---
layout: post
title: "Data Engineering Project: Importing and Processing Data with AWS"
author: "Aashay Zende"
categories: projects
tags: [Data Engineering, AWS, Streamlit, EC2, S3]
image: data-engineering.jpg
---

## Data Engineering Project by Aashay

### Project Summary

Welcome to my Data Engineering project! This project demonstrates the steps taken to import data from Amazon S3, process it on an EC2 instance, and save the data in a GitHub repository using Streamlit.

### Project Highlights

1. **Uploading Data to Amazon S3**
   - Amazon S3 (Simple Storage Service) is a scalable object storage service designed for high availability, durability, security, and cost-effectiveness.
   - Key features include scalability, durability (11 9's of durability), security, accessibility, and cost-effectiveness.
   - Two CSV files were uploaded to an S3 bucket for this project.

2. **Creating an EC2 Instance**
   - Amazon Elastic Compute Cloud (EC2) provides secure, resizable compute capacity in the cloud.
   - EC2 is used for various applications, including web hosting, data analysis, and machine learning.
   - An Ubuntu machine was used to create the EC2 instance.
   - An Elastic IP address was associated with the instance for consistent accessibility.
   - Port 8501 was exposed for the Streamlit app.

3. **Setting Up the Environment**
   - A Python virtual environment was created within the EC2 instance to manage dependencies.
   - Necessary packages were installed to ensure smooth operation.
   - Commands used include:
     ```shell
     sudo apt update
     sudo apt-get update
     sudo apt upgrade -y
     sudo apt install python3-pip
     python3 -m venv myenv
     source myenv/bin/activate
     ```

4. **Connecting Visual Studio Code to EC2**
   - VSCode was connected to the EC2 instance using SSH for seamless development.
   - Steps included generating an SSH key pair, copying the SSH key to the EC2 instance, and configuring VSCode to connect via SSH.

5. **Installing Required Packages and Libraries**
   - The environment was set up by updating and installing necessary packages:
     ```shell
     sudo apt install git curl unzip tar make sudo vim wget -y
     git clone "Your-repository"
     pip install -r requirements.txt
     ```

6. **Configuring AWS Credentials**
   - AWS CLI was installed and configured on the EC2 instance to allow access to the S3 bucket.
   - AWS credentials were set up securely for authenticated access.
   - Verification of the setup was done by listing S3 buckets.

7. **Running the Streamlit App**
   - The Streamlit app was run to import data from the S3 bucket and display it.
   - Command used:
     ```shell
     streamlit run Home.py
     ```

### Live Demo and GitHub Repository

For a detailed walkthrough of the project steps and to view the code, please head to the Steps section in the sidebar.

- [View the project on GitHub](#)
- [Live Demo of Data Engineering Project](https://sqlproject.streamlit.app/)

### Conclusion

This project showcases the integration of various AWS services and Python libraries to achieve data engineering tasks. It serves as a practical example of how to manage and process data using modern cloud technologies.

If you have any questions or need further assistance, feel free to contact me.

---
