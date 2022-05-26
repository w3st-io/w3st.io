# --- [SERVER]
## .Environmental Variables (Create .env file root)
###### note: *VARIABLE --> (ONLY NEEDED ON PRODUCTION)

* API__STRIPE__PUBLISHABLE_KEY = < GET-FROM-STRIPE >
* API__STRIPE__WAD__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAD__DISCOUNTED__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAD__DISCOUNTED__PRO_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAD__DISCOUNTED__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAD__PRO_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAD__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAH__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAH__DISCOUNTED__ADVANCED_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAH__DISCOUNTED__PRO_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAH__DISCOUNTED__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAH__PRO_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAH__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
* API__STRIPE__WAS__STANDARD_PRICE_ID = < GET-FROM-STRIPE >
* *APP__BASE_URL = http://www.< website-name-here >.com

# --- [Client]
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
