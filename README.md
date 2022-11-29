# Send Email

RESTful APIs using Node.js, Express, SendGrid

## Features

- Express
- CORS enabled
- Various HTTP headers with [helmet](https://github.com/helmetjs/helmet)
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Resquest logger with [morgan](https://github.com/expressjs/morgan)
- Request validation with [joi](https://github.com/hapijs/joi)
- Application logger with [wiston](https://github.com/winstonjs/winston)
- Gzip compression with [compression](https://github.com/expressjs/compression)
- Linter with [eslint](http://eslint.org)
- ES6+ & Babel
- Send mail with [SendGrid](https://sendgrid.com)

## Getting Started

#### Install dependencies:

```bash
yarn install
```

#### Environment variables:

```bash
cp .env.example .env
```

## Start development server

```bash
yarn start
```

## Start production server

Install [pm2](https://www.npmjs.com/package/pm2) then run commands:

```bash
yarn build
yarn prod
```

## Linter

```bash
yarn lint
yarn lint:fix
```

## Test

- Run app:
  `yarn start`
- use postman
  - Method: POST
  - Endpoint: `/api/mail/send`
    <img width="1133" alt="Screen Shot 2022-11-28 at 18 13 12" src="./docs/images/body_post_man_send_mail.png">
