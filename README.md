# Evojam test task

So in this task i used react because i more familiar with it.

## How to start project

- `$npm install`
- `$npm start`
- open your browser on [http://localhost:3000/](http://localhost:3000/)

## About technologies i used

### uuid
So i was thinking to just generate some uniq id's myself but did find out that it will be just simpler to use library for this to ensure that all keys for components i mapthrough are uniq.

### redux-toolkit
Used it as state manager bacause it makes project simpler to handle when it settled, also i awnted to use RTKQuery, but more on it below.

### RTKQuery
As middleware for redux-toolkit for async actions. I did not want to use build-in tools from redux-toolkit because it do nat have page caching. With this tools it cache data that already was fetched and store it, so when i do change page that was opened before it dont call another fetch but use data from cache.

## About some technoligies that i did not used, and why

### react-query
So i wanted to use redux, and RTKQuery so i decided to not use this tool,

### react-router / Next.js???
I think that is too much for simpe app to change routes for web-page.

