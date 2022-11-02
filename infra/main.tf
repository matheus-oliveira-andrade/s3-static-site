provider "aws" {
  region  = "us-east-1"
  profile = "default"
}

# PUBLIC S3

resource "aws_s3_bucket" "s3_public_website_hosting" {
  bucket = var.url
}

resource "aws_s3_bucket_policy" "allow_public_access_s3" {
  bucket = aws_s3_bucket.s3_public_website_hosting.id
  policy = data.aws_iam_policy_document.allow_public_access_s3.json
}

data "aws_iam_policy_document" "allow_public_access_s3" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.s3_public_website_hosting.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.s3_origin_access_identity.iam_arn]
    }

    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_website_configuration" "s3_public_website_config" {
  bucket = aws_s3_bucket.s3_public_website_hosting.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# HTTPS CERTIFICATE

resource "aws_acm_certificate" "url_certificate" {
  domain_name       = var.url
  validation_method = "DNS"

  subject_alternative_names = [var.www_url, var.any_subdomain_url]

  lifecycle {
    create_before_destroy = true
  }
}

# ROUTE 53

resource "aws_route53_zone" "route53_hosted_zone" {
  name = var.url
}

resource "aws_route53_record" "route53_record" {
  for_each = {
    for dvo in aws_acm_certificate.url_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.route53_hosted_zone.zone_id
}

# CLOUDFRONT FOR REDIRECT TO HTTPS AND CDN

data "aws_cloudfront_cache_policy" "CachingOptimized" {
  id = "658327ea-f89d-4fab-a63d-7e88639e58f6" // managed cache policy
}

resource "aws_cloudfront_origin_access_identity" "s3_origin_access_identity" {
  comment = "cloudfront-blog"
}

resource "aws_cloudfront_distribution" "s3_public_distribution" {
  origin {
    domain_name = aws_s3_bucket.s3_public_website_hosting.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.s3_public_website_hosting.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.s3_origin_access_identity.cloudfront_access_identity_path
    }
  }

  aliases = [var.www_url, var.url]

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.url_certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.s3_public_website_hosting.bucket_regional_domain_name
    cache_policy_id  = data.aws_cloudfront_cache_policy.CachingOptimized.id

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
  }

  price_class = "PriceClass_100"
}

# Record on route 53 to redirect for CDN (cloudfront)

resource "aws_route53_record" "route53_record_url" {
  zone_id = aws_route53_zone.route53_hosted_zone.zone_id
  name    = var.url
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_public_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_public_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "route53_record_www_url" {
  zone_id = aws_route53_zone.route53_hosted_zone.zone_id
  name    = var.www_url
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_public_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_public_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
