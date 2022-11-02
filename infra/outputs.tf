output "public_url_for_static_website" {
  value = aws_s3_bucket.s3_public_website_hosting.website_endpoint
}

output "servers_name" {
  value = aws_route53_zone.route53_hosted_zone.name_servers
}