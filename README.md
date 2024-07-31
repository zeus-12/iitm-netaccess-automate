## Automate Netaccess Login (only for IITM wifi)

`src/index.ts` contains the puppeteer script to automate signing in.

## Steps

1. git clone the repository

```bash
# if you change the dir name here, make sure to update it in `netaccess.sh` file
git clone https://github.com/zeus-12/iitm-netaccess-automate netaccess-automate
```

2. Create .env file containing similar to `.env.example` file.

3. Install the dependencies and run the script

```bash
# to install the dependencies
npm install

# to run the script
npm start
```

Alternatively (Only for MacOS), you can use [Raycast](https://www.raycast.com) `Script Command` to run the script.
For which you can use the bash script in `src/netaccess.sh`. [refer](https://www.raycast.com/blog/getting-started-with-script-commands)
