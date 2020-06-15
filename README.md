# javascript-cart

## Javascript Cart Module For Managing Cart Items

This module will help you get started quickly for persistantly storing cart items to localstorage, also flexible enough to accomodate any data. Also can be easily used with ES6 structure with minor changes.


## Install: 
Include cartModule.js in your html file: 

```html
<script src="cartModule.js" type="text/javascript"></script>

```

## Example

```javascript
using "__cart" you can access object and its defined functions 

__cart.add({id: 1, name: "Product 1", price: 100})

// you can also define quantity like this or can pass as second parameter to "add" function
__cart.add({id: 2, name: "Product 2", price: 100, quantity:2})
__cart.add({id: 2, name: "Product 2", price: 100}, 2)

```

## License

This plugin is available under Apache 2.0 license.
