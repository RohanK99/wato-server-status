# Backend for Wato Server Status

### Installation

The monitoring application requires [Node.js](https://nodejs.org/) to run and [Yarn](https://yarnpkg.com/lang/en/). The following application was build with node v12+ and yarn 1.19.1

Install the dependencies and devDependencies and start the server on port 5000.

```sh
$ yarn install
& yarn start
```

API Endpoints
```
POST: '/'
Usage:
    {
        'host': 'host_ip' eg. 127.0.0.1
    }
```