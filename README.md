# Server

## Environmental Variables (Create .env file root)

### Required
```
API__STRIPE__PUBLISHABLE_KEY = < GET-FROM-STRIPE >
API__STRIPE__WAD__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAD__DISCOUNTED__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAD__DISCOUNTED__PRO_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAD__DISCOUNTED__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAD__PRO_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAD__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAH__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAH__DISCOUNTED__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAH__DISCOUNTED__PRO_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAH__DISCOUNTED__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAH__PRO_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAH__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
API__STRIPE__WAS__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
```

### Required only on Production
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

### NOTE
Heroku deployments runs the `build` scripts by default.
