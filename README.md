# Server

### Required only on production
```
APP__BASE_URL = http://www.< website-name-here >.com
```

## Project setup

### Install Node.js packages
```
npm install
```

### Compiles and minifies for production
```
npm run build
```
This command creates a "dist" directory for the compiled TS code. It then copies over the "s-static" directory into the "dist" directory as well.

## NOTE
Heroku deployments runs the `build` scripts by default.
