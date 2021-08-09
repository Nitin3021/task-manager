# Task Manager (Manage your tasks with ease!)

## Overview
Welcome to one of my personal projects! As the project name makes it clear, the idea behind this project is to allow users to manage their daily tasks. This app has been built using NodeJS. User can create, update and manage tasks. This project is only providing API endpoints, without any frontend.

## Features

- Sign up stage for first time user.
- Login authentication after a successful sign up.
- Multiple logins can be done on different devices using tokens.
- Image can be uploaded in your user profile.
- Welcome email is sent to the users who are newly signing up.
- Email is also sent when the user decides to delete their account.
- Tasks can be managed independently as they are stored in the database.
- Pagination is available to scroll through set of tasks.

## Usage

## Database
This project uses MongoDB along with Mongoose, to store and manage user & task related data. It is essential to setup MongoDB before executing the project.

### Project creation
This project has been created using npm version 7.1.0.

### Env Variables

Create 2 files, "dev.env" & "test.env" in /config folder (in root of the project) and add the following to both of the files.

```
PORT=3000
MAILGUN_API_KEY= (Register in https://www.mailgun.com/ and get the API key for your account)
MONGODB_URL=mongodb://127.0.0.1:27017/api-task-manager
JWT_SECRET=abcdefgh123456
```

### Install Dependencies (frontend & backend)

```
npm install
```

### Run
```
# Running MongoDB (This step is essential and needs to be successfully setup before proceeding to next step)
After downloading MongoDB executables from MongoDB website, you can use following command to run Database.
(Downloaded Mongodb directory)\mongod.exe --dbpath="(Your new directory path to store data)"
```

```
# Run in development environment
npm run dev
```

There is a Heroku start script for executing after deployment.

## License

The MIT License

Copyright (c) 2021 [MIT © NP](https://github.com/Nitin3021)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
