---
layout: single
title: "Basic knowledge of Linux"
date: 2025-11-05
categories: [Linux, Shell]
tags: [Shell, Script]
excerpt: "Linux = Open, stable, secure, customizable, and built for developers and systems."
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Articles.jpg
author_profile: true
---

# Commond file Systems

- windows: FAT32 and NTFS
- Mac: HFS+ and APFS
- Linux: ext2, ext3, ext4,xfs, and ftrfs

> in this article we will use the ext4, because it is the default for ubuntu

# Command that use to search for command

```
# seach for command that related to 
apropos file
article "remove file"

whatis rm
```

# Files 

- collection of binary data that represents information. 
	- Text-contents interpreted as characters
	- Binary-contents interpreted by software or hardware

![image](https://user-images.githubusercontent.com/34083808/238662076-40debda3-d79c-4682-884a-fdf076e1b7b0.png)

![image](https://user-images.githubusercontent.com/34083808/238668754-582f7e0f-6a7e-494c-aa6c-425d13acfc8e.png)

![image](https://user-images.githubusercontent.com/34083808/238669157-5091e273-663a-4a9f-a486-780baa3a08e7.png)

you can easily find the command location by using ```which <command-name>```


## Shortcut characters
| Character |   Meaning	|
|---	|---	|
|   .	| current dirrectory  	|
|   ..	|   Parent directory	|
|   ~	|   user's home folder	|


# Working with files and directories

## File Globbing

Using patterns to match file or directory names
- * match zero or more of any charater
- ? matches one of any character

```
man 7 glob

# how to use globbing command
ls a*
```


## Hard links and soft (symbolic) Links

![image](https://user-images.githubusercontent.com/34083808/238962197-76af6796-a349-4b53-9de2-bd6035e563d6.png)

```
nano users.txt
ln -s /home/yushin/users.txt /home/yushin/user-list.txt
```

## Finding file

```
touch apple pineapple eggplaint

truncate file1 1M
truncate file2 10M
truncate file3 100M

# find the file

find . -name apple
find . -name "*apple*"

file . -size -10M
file . -size +10M

file . -name apple -type d
file . -name apple -type f

```

## Input/output redirection 


```
echo "I love my wife" > out.txt

echo "my wife is so beautifull" >>  out.txt

ls > homedir.txt

# take the content of the file and pass it into next command
cat homedir.txt | wc

# take the content in the reverse direction 

wc < homedir.txt

wc << EOF
> this is a line of text
> and some numbers: 123
> but that's all for now


```

| Descriptor |   Number	|
|---	|---	|
|   Standard Input(stdin)	| 0  	|
|   Standard Output(stdout)	| 1|
|   Standard Error(stderr)	|  2	|


```
# find the file and folder that have name "home" and write the error to error.txt and the results to output.txt
 find / -name "home" 2>error.txt 1>output.txt
```

## Compare txt Files

```
 diff -y users.txt users2.txt
```

![image](https://user-images.githubusercontent.com/34083808/238972102-864a4e4b-0f8d-4112-b922-c8611e1e6a69.png)

```
 diff -u users.txt users2.txt
```

![image](https://user-images.githubusercontent.com/34083808/238972404-6d8c59aa-1709-4319-8f52-d2050f302f52.png)


## Comparing Binary Files

```
 cmp users.txt users2.txt
 
 cmp -l users.txt users2.txt
 
 hexdump users.txt
 
 stat users.txt
```

![image](https://user-images.githubusercontent.com/34083808/238973070-fdaba893-a3e7-4aef-b56c-85b0469d24a1.png)

![image](https://user-images.githubusercontent.com/34083808/238973451-f6557232-1118-4891-9605-b990f50ecbe6.png)

> The operating system cannot tell you the qualitative differences.

> To compare the contents of files, you my need to use the other software.

## Archives and Compression

![image](https://user-images.githubusercontent.com/34083808/238974550-41747cf9-91e7-4208-9f69-ebd881f84d4a.png)

the common archive format in linux was ```Tape Archive```

```
tar -cf _archive.tar <folder-name>

# list all file and folder inside the archive file
tar -tf _archive.tar

# extract the file
tar -xf _archive.tar

tar -xf _archive.tar -C <folder-extract-to>
```

> [ref](https://www.freecodecamp.org/news/tar-in-linux-example-tar-gz-tar-file-and-tar-directory-and-tar-compress-commands/)

## Archive compression 

![image](https://user-images.githubusercontent.com/34083808/238976547-a2e1d4a3-aabc-4633-a702-46755a63547a.png)

```
# Gzip
tar -czf _archive.tgz <folder-name>


# Bzip
tar -cjf _archive.tar.tbz <folder-name>

```

Another way to archive the file in linux by using the ```zip``` and ```unzip``` command

# Regular Expressions(Regex)

- A way of describing text by way of patterns
- Good for matching phone numbers, emails, etc.
- Check out the Learning Regular Expressions course for more detail. 

## Common Regex Operators

| Operator |   Matches	|
|---	|---	|
|   .	| Any character  	|
|   *	| One or more of a specified character|
|   []	|  Range of characters	|
|   {}	|  Number of characters	|
|   ^	|  Beginning of line	|
|   $	|  End of line	|
|   \n	|  Newline	|

```
# search all charactor
cat users.txt | grep -E ".*"

# file letter a*
cat users.txt | grep -E "a"
```

![image](https://user-images.githubusercontent.com/34083808/239689075-8b8d967d-e408-4022-8a84-4b5996a94868.png)


# Change files programmatically 

## sed 

- Stream editor
- Good for replacing text according to a rule
- Helpful in piped commands
- s command substitutes text

![image](https://user-images.githubusercontent.com/34083808/239690518-4600e6ce-35d5-4fbe-a6c4-5be4f1629180.png)

![image](https://user-images.githubusercontent.com/34083808/239690656-17c1e306-ba45-48b7-9290-b8ef8391880c.png)

> It's currently doesn't change the content of the file, if you want it changes, you can overwrite the content of the file latter using ```>```. 

## AWK

- helpful for reformatting text
- Powerful scripting language 

![image](https://user-images.githubusercontent.com/34083808/239690882-bbd4ac61-378b-40fb-8cca-a5e7ec60d5d8.png)




# Permissions

- Define which users and groups access a file.
- Describe the actions users and groups can take.

## Permissions as a Matrix
|   | User(u)  | Group(g)  | Others(o)  |
|:---:|:---:|:---:|:---:|
|  Read(r) |  x |  x |  x |
|  Write(w) |  x |  x |   |
|  Execute(x) |   |   |   |
|   |  rw- | rw-  | r--  |

or we can assign the number for each action.

|   | User(u)  | Group(g)  | Others(o)  |
|:---:|:---:|:---:|:---:|
|  Read(r) |  4 |  4 |  4 |
|  Write(w) |  2 |  2 |  2 |
|  Execute(x) | 1  | 1  | 1  |
|   |  7 | 7  | 7  |

> 664 = readable by everyone, writeable by user and group, not executable

![image](https://user-images.githubusercontent.com/34083808/239691634-9a6178eb-3832-4c11-b6a8-b03361be725e.png)

```
#check file information 

stat users.txt
```
![image](https://user-images.githubusercontent.com/34083808/239691698-278af9f4-9c89-4d18-9181-14655848327a.png)


```
chmod 600 users.txt
```

![image](https://user-images.githubusercontent.com/34083808/239691759-d2a78063-d911-479e-845c-74362897561c.png)

# The Root user

- Root is the system "supper user"
- The root account has no limitations.
- Root's power can be borrowed with sudo
- It is used for system administraion tasks.
- sudoers are listed in /etc/sudoers

```
# borrow supper user by sudo command
sudo apt update
```

You can swich the user to user root, and using the command without any limitation.

```
sudo -s
# exit to your user
exit
```

you can add your user to the list of user that can use sudo or sudoer by the following command

```
sudo visudo
```

![image](https://user-images.githubusercontent.com/34083808/239692147-7933a57e-6703-4afb-bc32-13fd117d820c.png)

# Install the software

- Advanced Packaging Tool (APT)
- Search for, install, and manage software

```
sudo apt upgrate

apt search colordiff

apt remove <app-name>
```

# Remote access

- Remote terminal access s very common. 
- SSH(Secure Shell) provides access.
- OpenSSH Server.


# Transfer Files Securely 

- SSH supports secure file tranfers
SFTP and SCP

## SFTP 
- SSH File transfer protocol
- FileZilla and other software
- Works like FTP
- Only for file operation 

```
sftp scott@10.35.3.156

# dowload file
get <file-name>

# upload
put <file-name>
```

# SCP

- Secure Copy protocol
- scp source destination
- remote component - user@host:path-to-file
- Minor downside - need to know the exact path (no tab-completion)

```
scp scott@10.25.4.1:file2 .
```


# Users and Groups
- We set human-readble names, but users and groups are tracked by numeric UIDs and GIDs
- When creating a regular user, it becomes a member of a group with the same name
- Users can be added to other groups
- Users list is ```/etc/passwd```
- Group list is ```/etc/group```


## ```/etc/passwd
File content as bellow.

![image](https://user-images.githubusercontent.com/34083808/240297163-c2a981c7-58bf-4aa8-be7c-3fc28102ecab.png)

![image](https://user-images.githubusercontent.com/34083808/240297649-6af82a34-75ea-4592-a4da-3b852e658dda.png)

## ```/etc/shadow```
This file store encrypted password for the user. 

![image](https://user-images.githubusercontent.com/34083808/240298023-682d3e57-c408-4f97-986d-63b5128f029e.png)


![image](https://user-images.githubusercontent.com/34083808/240298772-6a8050e4-6feb-4939-82bd-32f8f130eaff.png)

## ```/etc/group

![image](https://user-images.githubusercontent.com/34083808/240299110-3c7bb043-8399-43df-af8c-9acc15ad6ca1.png)

![image](https://user-images.githubusercontent.com/34083808/240299242-6dbf3003-8b8b-427f-982a-9bb08366516e.png)

# The Adduser command

- Front end for 'useradd'
- Allows us to specify additional information
- Reads from /etc/adduser.conf for defaults

```
sudo adduser yushin
```

![image](https://user-images.githubusercontent.com/34083808/240301702-f7658143-fdee-423a-9538-adf90efd7228.png)

To switch to new user, we can use ```su <new user name>```

## System User

```
sudo adduser --system botuser
```

![image](https://user-images.githubusercontent.com/34083808/240302487-d862c669-1049-4189-af3a-4b05885a4829.png)


## Changing the password

```
passwd

# Change password without input current password incase of you forgot your current pass

sudo passwd
```

![image](https://user-images.githubusercontent.com/34083808/240304033-a7d87f4a-d4a0-431b-914d-dca2600e2070.png)










