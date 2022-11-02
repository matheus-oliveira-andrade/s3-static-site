variable "region" {
  description = "AWS region"
  default = "us-east-1"
}

variable "profile_name" {
  description = "Profile used for create resources in AWS"
  default = "default"
}

variable "url" {
  description = "URL for static website hosting"
  default = "matheus-oliveira-andrade.com"
}

variable "www_url" {
  description = "URL with www. for redirect to public s3"
  default = "www.matheus-oliveira-andrade.com"
}

variable "any_subdomain_url" {
  description = "URL with wildcard for subdomain"
  default = "*.matheus-oliveira-andrade.com.br"
}