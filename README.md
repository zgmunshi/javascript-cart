# javascript-cart

## Javascript Cart Module For Managing Cart Items

This module will help you get started quickly for persistantly storing cart items to localstorage, also flexible enough to accomodate any data. Also can be easily used with ES6 structure with minor changes.


## How to use: 
Include cartModule.js in your html file: 

```html
<script src="cartModule.js" type="text/javascript"></script>

```

## Example

```javascript
using "__cart" you can access object and its defined functions 

__cart.add({id: 1, name: "Product 1", price: 100})

// you can also define quantity like this or can pass as second parameter to "add" function
// also if product is already exist it will get updated
__cart.add({id: 2, name: "Product 2", price: 100, quantity:2})
__cart.add({id: 2, name: "Product 2", price: 100}, 2)

// update product data
__cart.update(1,'quantity',2)

// add quantity by 2 for product id 1
__cart.quantity(1,2)
// remove quantity by 1 for product id 1
__cart.quantity(1,-1)

// remove product id 1
__cart.remove(1)

// returns list of all items present in cart
__cart.list()

// return product from cart by id
__cart.get(1)

// returns total cart value
__cart.totalPrice()

// returns cumulative total cart item count
__cart.totalQuantity()

// onChange() event listener will help listen to any cart changes, you can bind any callback with the event, it will return all items in the cart with changes
__cart.onChange(callback)

```
## API 
```Will be added soon```

## License

This plugin is available under Apache 2.0 license.
