terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket = "terraform-state-516735145595"
    key    = "state/terraform-state.tfstate"
    region = "us-east-1"
  }
}