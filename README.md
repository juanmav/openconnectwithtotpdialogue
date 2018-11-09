# Open connect with TOTP dialogue.

This little script is automate the connection to a Cisco VPN
 that ask for a TOTP password using OpenConnectVPN.  

This project was only tested on Ubuntu 18.04LTS. 

## Getting started

> git clone https://github.com/juanmav/openconnectwithtotpdialogue
> cd openconnectwithtotpdialogue
> npm install 

If you dont have `node` installed as root run the 
following commands to link your `node` to the root
users. Normally this happens when you use nvm 
(node version manager)

> sudo ln -s \`which node\` /usr/bin/node

> sudo ln -s  \`which npm\` /usr/bin/npm

Create a .env file it should look like this:

```$xslt
VPN=vpn01.yourcompanyurl.com
USERNAME=misuperuser
PASSWORD=misuperpassword
OPTIONTOTP=3
TOTPSECRET=HELLOGGD52SWOWC5T
```

And finally run the script

> sudo npm start

(*) note that you have to run the script with root permissions.