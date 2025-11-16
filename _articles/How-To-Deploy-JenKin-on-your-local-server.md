---
layout: single
title: "How to deploy Jenkin on you local machine"
date: 2025-11-16
categories: [Jenkin, Docker]
tags: [Jenkin, Docker, Docker Compose, Linux, Git]
excerpt: "These are my notes about deploy Jenkin server on your local machine using docker. I hope you find them useful."
header:
  teaser: /assets/images/500x300.jpg
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/Articles.jpg
author_profile: true
---
- [What is Jenkins](#what-is-jenkins)
  - [install the centos 7 os with virtual box.](#install-the-centos-7-os-with-virtual-box)
  - [Install jenkin](#install-jenkin)
    - [Step 1 install docker.](#step-1-install-docker)
    - [install docker compose.](#install-docker-compose)
    - [install jenkin by Docker image](#install-jenkin-by-docker-image)
  - [Create a Docker compose file for jenkins](#create-a-docker-compose-file-for-jenkins)
    - [create local DNS for jenkin pages](#create-local-dns-for-jenkin-pages)
- [Create your first job](#create-your-first-job)
  - [step 1: create job name.](#step-1-create-job-name)
  - [Step 2: configurate the job.](#step-2-configurate-the-job)
  - [Running the jobs.](#running-the-jobs)
- [create another docker container as the remote for running the jobs.](#create-another-docker-container-as-the-remote-for-running-the-jobs)
  - [Install Jenkins pluggin.](#install-jenkins-pluggin)
  - [Create Credential for access to remote\_host container.](#create-credential-for-access-to-remote_host-container)
  - [Check connection with remote\_host and create jenkin job.](#check-connection-with-remote_host-and-create-jenkin-job)
- [AWS](#aws)
  - [Install MySQL client and aws cli.](#install-mysql-client-and-aws-cli)
  - [Create MySQL Database.](#create-mysql-database)
  - [Create Scrip to backup data.](#create-scrip-to-backup-data)
  - [Create Digital ocean space bucket](#create-digital-ocean-space-bucket)
  - [Create Digital ocean space bucket key, and scretkey.](#create-digital-ocean-space-bucket-key-and-scretkey)

# What is Jenkins 

Jenkins, which is considered to be the best open-source automation server, provides a wide range of plugins that can be very helpful in automating various types of projects. These plugins can assist in tasks such as building and deployment.

Jenkin is written in Java and is designed to be highly extensible. This means that you can customize Jenkin to fit your specific needs. You can add plugins to Jenkin that allow you to integrate it with other tools in your development process. This includes things like code repositories, issue trackers, and more.

## install the centos 7 os with virtual box.
please use the iso file of centos minimal to install the VM for linux. 

[CentOS-7-x86_64-Minimal-2009.iso](http://download.nus.edu.sg/mirror/centos/7.9.2009/isos/x86_64/)

after we have the VM, we use the putty program to connect to the VM and start installing the jenkin. 

## Install jenkin 
### Step 1 install docker.
please follow the installation of docker for linux to install docker engine. [docker installation](https://docs.docker.com/engine/install/centos/)

```shell
sudo yum install -y yum-utils

sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

Install Docker Engine

```shell
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# start docker service
sudo systemctl start docker

# enable docker 

sudo systemctl enable docker

# verify docker install
sudo docker run hello-world

# we need to modify the exist user to able to run docker without sudo (administrator). 
# the below command tell linux to add the user jenkin to docker groups. 
# after this command, we need to logout and login agains. 

sudo usermod -aG docker jenkin
```


### install docker compose. 

To download and install the Compose CLI plugin, run
```shell
curl -SL https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```

Apply executable permissions to the binary:

```shell
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
# check the version
docker compose version
 Docker Compose version v2.17.2
```

> [ref](https://docs.docker.com/compose/install/linux/)


### install jenkin by Docker image
at first we need to find the docker image on [docker hub](https://hub.docker.com/r/jenkins/jenkins)
and then we type in the following command to download the image. 

```shell
docker pull jenkins/jenkins

# docker root
docker infor | grep -i root
```

## Create a Docker compose file for jenkins

```
vi docker-compose.yml

```

prepare the docker compose file for installing jenkin. 

```yml
version : '3'
services:
    jenkins:
        container_name: jenkins
        image: jenkins/jenkins
        ports:
          - "8080:8080"
        volumes:
          - $PWD/jenkins_home:/var/jenkins_home
        networks:
          - net
networks:
    net

```

```
# change the owner of the folder
sudo chown 1000:1000 jenkins_home -R

# show ID of the groups
id
```

start docker-compose 

```
docker-compose up -d
```
after that check the docker container by ```docker ps ```

to start jenkin, please open the browser and input the VM ip address. In my case, I input 192.168.40.77:8080 

![image](https://user-images.githubusercontent.com/34083808/232785909-b5b3d06b-12ac-4f9e-a82e-981b87391816.png)

you can find the passwords by using the command ```docker logs -f jenkins```

![image](https://user-images.githubusercontent.com/34083808/232786808-f0f3794d-a1dc-42a9-942c-bf710786b9f7.png)


install pluggin for jenkins

![image](https://user-images.githubusercontent.com/34083808/232786681-cfaec660-d5e4-4f3d-a471-1d726dac4d3f.png)

### create local DNS for jenkin pages
You can add the local DNS to C:/window/system32/drivers/etc/host

![image](https://user-images.githubusercontent.com/34083808/232789924-5c3bb0e3-9007-4fbf-b4d4-6dbb202d8fb5.png)

![image](https://user-images.githubusercontent.com/34083808/232790277-7bdc2836-efba-4fb4-bc3c-820062d97fc3.png)



# Create your first job 
Let's take a closer look at the GUI of Jenkins. Our initial example involves creating a job that executes a shell script command within Jenkins. In the upcoming session, we will explore creating the execution process on a separate machine or container.


## step 1: create job name. 
Click on the new item button and then create new job with name. 

![image](https://user-images.githubusercontent.com/34083808/232792461-94756c7c-bd1d-483f-b0d3-b4c221849867.png)

![image](https://user-images.githubusercontent.com/34083808/234013514-060e59f7-ff4f-4f7b-9757-d1a74c13adbe.png)

## Step 2: configurate the job. 

click on the job in dashboard, then go to inside the job, and click Configure button. 

![image](https://user-images.githubusercontent.com/34083808/234015517-a7d6af7f-cfdf-406d-bcf0-c43e7cfa15af.png)

Go to the build steps and drop down the list and pick the ```Execute shell```

![image](https://user-images.githubusercontent.com/34083808/234016130-7d699110-2c96-476f-b636-b88b7432c167.png)

Then create your first scripts 

![image](https://user-images.githubusercontent.com/34083808/234016375-93e62994-5e0b-463f-95f8-e206fe4f6331.png)

## Running the jobs. 
Click on the Build button to run the job build.

![image](https://user-images.githubusercontent.com/34083808/234016710-231c5b87-a2c6-4272-82cf-402a8b9efb6a.png)

Next wait for the job build completed, then you can check the build success or failed by clicking on the job id which correspond with your build job and check wherether the icon is blue stick or red x. 
 
![image](https://user-images.githubusercontent.com/34083808/234017272-afcbf48f-3c75-4f55-bb54-2dc5c2d35ec8.png)

You can also check the build log by clicking on the console output. 

![image](https://user-images.githubusercontent.com/34083808/234018157-d809b3de-f6db-4a46-b4b3-0ffbbc6aa488.png)


# create another docker container as the remote for running the jobs.

As mentioned before, we will create the node for Jenkins. Actually, we can add the node to Jenkins using another machine, virtual machine, or containers. In this lecture, I will focus on Docker and containers, so I would like to create a container for running the Jenkins node.

At first, we will create the Docker image which contains the environment for running an SSH server. You can check the "Dockerfile" which includes the image configuration. This image will be based on CentOS 7 and will enable access to the server by SSH public key. We will use ssh-keygen to generate the public and private keys.

```ssh
ssh-keygen -t remote-key
```
after running that command, it will automatically generate the public key and private key for the remote_host container. 

``` ssh
[jenkin@localhost jenkins-data]$ cat centos7/remote-key
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAqtfMvPktA03OjRteDUpBU+gQkVH3WZdUWk2YIQnin3YxcjTX
jMPK38hXxOja6YnqKX5Cppm4HYwGBytSXb8yS/jj5EGDvk1Wrg30mZ2ZptAHGEvw
v7WvG/Vepcq/ST/7ORZefbsj/XKs2++k56fmJySk5sc8CQaNwB/k3CFkA4VgKgtm
Rx4UuPzT9b63SaEnRiYTStnP8PRQgvCgGJnCRCTXyicGEsp9l74aRqcNaaQGpHga
xfFKDv7i/Mnw8ya5MGUBrkyhGAPirrCRDk8b4eWGdwt6xDpxvbN5Mfp8WuQBWMko
1yUYcTzXqphIqUeCRqR/mFzFrr6p/7TL2+I2WQIDAQABAoIBAGCqfkQm0VtfORIK
fCsU6uXpFwbC1CwzPh1ibkOzbjFAFTZDw/r4BeCdYVwfTU57JK2ZrWjK7ax6QCbq
Uk6NEo5+I6RRlZOl+ve9GbuZuwjyCDGtNmmjCZPOQGGa2KU/uIxSpeCKdRDBRCGl
9S7Gh6l6SHv0G3oX5TjiUwJjOk3qyvcVINZNQ4RAb6x5y1JOJ/W7QL5qQVCwAehA
0TDY5Aln1cRteyiuzevNCsmkIyAxKY/kPm9Bv4mRNcdi2vLlHySz07GYBJDL2z1U
r/6mqMVGdduG5TqE48l0P4MnS7pggSgLO9bA5v3Isub5vza0+OaQ8/H04dMGdJik
aCSwMUkCgYEA2ALjS5jUDldvqZiJk5fgwPxPZ9Ait4fHrpWCPmPaBwp+hEBBfXk3
VCLWv4Y2hgXwAMCw0J7SKHrECRO/pVGOWMrmreJerFE3Bg2JqAQbhEQYXc6Ijguf
yT6qqM3GlGqrGNkY+UVBjb81R0P7T6wPAowwC0bAeRX0JWvAhCwxb6cCgYEAynhQ
oQd4K4MW67po/KylgFDbqi8Lbow1Pn/vTb475Mv3RSLKEufnUBlT1XrDCR64Y0ZO
6njb9BbCI5ht3vTIiTK0KLVNK3YfI5AZvixF9bocjnH+yMHeM3o+OkFxwaAjgpyD
2gGqyDApKoiE7tLp/mKkUg6HfkMZ96PP0tBz6f8CgYEAuJIPIQMe/nobgTBDLYey
lXOBbdTcNTGhnz1EooazPxzqaZp12v5+FjgGgnPtlqrwHdSHwFpUfB4Z7x+eu2Vq
WdhVLvKjrl1exJ9Apf2MfYGpyE23RJgOGeif7ciWCy7xrzOhMSzKDJH6tkASNktw
L98VFi2IPG5TxL3DK6yPOTUCgYAcfyKaB3saZLDtLKdqKMKCdN717Pkm7gTwbwE3
Z/b2FN8Qk/zs/EbKN0ZdXZHlzrUVA+hHiAstJ6bba7DLGJjA9qn0sM/TtiRb1QRK
h+Cw3Sj3w4OgreigRixL9roUDn3w/CZyoJlw45Znrh9HndfhPfDyu6jGVJtrB1tQ
yJYH8QKBgAzLTytBVSGnQ7Ea9hh8dhGWIZcbRzwET5YHCE7lPr+eEuSrOfpbNpaM
nogB0vaD7aDC6VwTd+cdCAwjd+sCgeZ2Z2d/UsjoNkVGyArTXqeexSb/nL1a8VPf
yqyxU42+oas3H+68SAqiIsjkfd1zQHSBCcK15kdtveZ0A4Io+l7x
-----END RSA PRIVATE KEY-----

[jenkin@localhost jenkins-data]$ cat centos7/remote-key.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCq18y8+S0DTc6NG14NSkFT6BCRUfdZl1RaTZghCeKfdjFyNNeMw8rfyFfE6NrpieopfkKmmbgdjAYHK1JdvzJL+OPkQYO+TVauDfSZnZmm0AcYS/C/ta8b9V6lyr9JP/s5Fl59uyP9cqzb76Tnp+YnJKTmxzwJBo3AH+TcIWQDhWAqC2ZHHhS4/NP1vrdJoSdGJhNK2c/w9FCC8KAYmcJEJNfKJwYSyn2XvhpGpw1ppAakeBrF8UoO/uL8yfDzJrkwZQGuTKEYA+KusJEOTxvh5YZ3C3rEOnG9s3kx+nxa5AFYySjXJRhxPNeqmEipR4JGpH+YXMWuvqn/tMvb4jZZ jenkin@localhost.localdomain
```

We'll transfer the private key to the remote_host container using a Docker file. Essentially, a Docker container functions similarly to a virtual machine, allowing you to copy files and install applications during the Docker image building process. You can find more information in the code snippet below. 


```Dockerfile
FROM centos:7

RUN yum -y install openssh-server

RUN useradd remote_user && \
    echo "1234" | passwd remote_user --stdin && \
    mkdir /home/remote_user/.ssh && \
    chmod 700 /home/remote_user/.ssh

COPY remote-key.pub /home/remote_user/.ssh/authorized_keys

RUN chown remote_user:remote_user -R /home/remote_user/.ssh && \
    chmod 600 /home/remote_user/.ssh/authorized_keys

RUN /usr/sbin/sshd-keygen

RUN yum -y install mysql

RUN curl -O https://bootstrap.pypa.io/pip/2.7/get-pip.py && \
        python get-pip.py && \
        pip install awscli --upgrade

CMD /usr/sbin/sshd -D
```

Afterward, we will make modifications to the Docker Compose file in order to include the remote_host service. In the remote host configuration, we will add the build instruction, which will guide Docker Compose to build the remote_host image. Subsequently, we can utilize this image for the container.

```yaml
version: '3'
services:
  jenkins:
    container_name: jenkins
    image: jenkins/jenkins
    ports:
      - "8080:8080"
    volumes:
      - $PWD/jenkins_home:/var/jenkins_home
    networks:
      - net
  remnote_host:
    container_name: remote_host
    image: remote_host
    build:
      context: centos7
    networks:
      - net
networks:
  net:
```

Once the configuration file modifications are complete, we can proceed to create our container. To begin, we need to build the remote_host image using the command ```docker-compose build```. Following that, we can start up the container using the command ```docker-compose up -d```.

![image](https://user-images.githubusercontent.com/34083808/243037553-e4b8edd9-e045-4946-94d6-eaa94f65e8a1.png)

we can check our remote-host container by access dirrectly to the container by ``` docker exec -it remote_host bash ``` 

![image](https://user-images.githubusercontent.com/34083808/243037666-a2f0469f-bfef-4eeb-98c5-e006b0d06f8a.png)

we can also, access remote_host container through jenkins container. 


```
docker exec -it jenkins bash

# check remote_host running or not
ping remote_host

# access using ssh key, it allow you to connect to your remote_host container. 
ssh remote_user@remote_host
```

Next, we will test the connection using the key file that we created. 

```
# copy key file to docker container 

docker cp remote-key jenkins:/tmp/remote-key

# access to jenkins docker container
docker exec -it jenkins bash

# connect to remote_host container using ssh key

ssh -i remote-key remote_user@remote_host

```

## Install Jenkins pluggin. 

- Step1: Select Magage Jenkins

![image](https://user-images.githubusercontent.com/34083808/244934376-d456ec90-24c5-456c-a0e5-fda0362319df.png)
- Step2: Select Plugins.

![image](https://user-images.githubusercontent.com/34083808/244934434-aa66518b-2654-4f11-8143-fdf4d3b066cc.png)

- Step3: Click Available pluggins and select plugin you want to install (ssh).

![image](https://user-images.githubusercontent.com/34083808/244934481-2169add1-557e-43c1-91af-92f1e63dccb2.png)

## Create Credential for access to remote_host container.

![image](https://user-images.githubusercontent.com/34083808/244934718-5aa67d67-f9e9-47d4-ad2b-305ac5566169.png)

![image](https://user-images.githubusercontent.com/34083808/244934854-dd8e8f87-4575-40c8-9a1d-f63671a1474c.png)

![image](https://user-images.githubusercontent.com/34083808/244934971-af22c91a-646a-4e3c-b94b-ee69dd0e085f.png)

![image](https://user-images.githubusercontent.com/34083808/244934876-8253dfe9-cd9f-4528-8126-1c792388b2a8.png)

## Check connection with remote_host and create jenkin job. 

![image](https://user-images.githubusercontent.com/34083808/244935297-cd8338ad-e357-4d9c-be14-5bd0f894fa73.png)

![image](https://user-images.githubusercontent.com/34083808/244935355-200b2fc6-60a6-42ba-8649-4b660b121451.png)

# AWS

In this session, we will create backup data using mySQL and aws s3 bucket (digital ocean space bucket). 
At first, we will create the database container using mysql image, please check the below docker compose. 

```yml
version: '3'
services:
  jenkins:
    container_name: jenkins
    image: jenkins/jenkins
    ports:
      - "8080:8080"
    volumes:
      - $PWD/jenkins_home:/var/jenkins_home
    networks:
      - net
  remnote_host:
    container_name: remote_host
    image: remote_host
    build:
      context: centos7
    networks:
      - net
  db_host:
    container_name: db
    image: mysql:5.7
    environment:
      - "MYSQL_ROOT_PASSWORD=1234"
    volumes:
      - "$PWD/db_data:/var/lib/mysql"
    networks:
      - net
networks:
  net:
```
then you can deploy database container by ``` docker-compose up -d ```

## Install MySQL client and aws cli. 

In order to install mysql client and aws cli, we need to modify Dockerfile, and rebuild remote_host image.

```dockerfile
FROM centos:7

RUN yum -y install openssh-server

RUN useradd remote_user && \
    echo "1234" | passwd remote_user --stdin && \
    mkdir /home/remote_user/.ssh && \
    chmod 700 /home/remote_user/.ssh

COPY remote-key.pub /home/remote_user/.ssh/authorized_keys

RUN chown remote_user:remote_user -R /home/remote_user/.ssh && \
    chmod 600 /home/remote_user/.ssh/authorized_keys

RUN /usr/sbin/sshd-keygen

RUN yum -y install mysql

RUN curl -O https://bootstrap.pypa.io/pip/2.7/get-pip.py && \
        python get-pip.py && \
        pip install awscli --upgrade

CMD /usr/sbin/sshd -D
```
> in this example we will use aws cli with digital ocean space bucket, since I don't have aws account. 

## Create MySQL Database. 

- Step1: connect to mysql server.

```
mysql -u root -h db_host -p
```

## Create Scrip to backup data. 

```
#/bin/bash


DATE=$(date +%H-%M-%S)
BACKUP=db-$DATE.sql
DB_HOST=$1
DB_PASSWORD=$2
DB_NAME=$3
DIGITIAL_OCEAN_SECRET=$4
BUCKET_NAME=$5
mysqldump -u root -h $DB_HOST -p$DB_PASSWORD $DB_NAME > /tmp/db-$DATE.sql


export AWS_ACCESS_KEY_ID=DO00TTLNYTXXEGUZQHEH && \
export AWS_SECRET_ACCESS_KEY=$DIGITIAL_OCEAN_SECRET && \
echo "uploading your db backup" && \
aws s3 --endpoint https://space-demo-2023-01.nyc3.digitaloceanspaces.com cp /tmp/db-$DATE.sql s3://$BUCKET_NAME/$BACKUP
```

## Create Digital ocean space bucket

![image](https://user-images.githubusercontent.com/34083808/244936866-79197e5f-2c6f-4199-87ae-885634f53f6e.png)

## Create Digital ocean space bucket key, and scretkey. 

![image](https://user-images.githubusercontent.com/34083808/244936804-6a9cb69d-a935-4186-9d9f-9e414f4e4dc2.png)



