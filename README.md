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

__cart.add({id: 1, name: "Sample Product, price: 100})

// you can also define quantity like this or can pass as second parameter to "add" function
// also if product is already exist it will get updated
__cart.add({id: 2, name: "Demo Product", price: 100, quantity:2})
__cart.add({id: 2, name: "Demo Product", price: 100}, 2)

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

#### add(product, [quantity:1])

Adds product to the cart. If the product already exists it increases the quantity with 1 or with provided quantity. 
The product object structure is flexible, only "id" and "price" are mandatory properties.

```javascript
const myproduct = {id: 3, name: "2 dozen Alphonso Mango Box", price: 1000}
__cart.add(myproduct, 3)
```

#### get(id)

Get product from the cart by id 

```javascript
__cart.get(3)
// Output - {id: 3, name: "2 dozen Alphonso Mango Box", price: 1000}
```

#### exists(id)

Checks if the product already exists in the cart

```javascript
__cart.exists(3)
// true or false
```

#### list()

Get the content of the cart as an array of products. 

```javascript
__cart.list()
// [{id: 1, name: "Sample Product", price: 100, quantity: 1}, {id: 2, name: "Demo Product", price: 100, quantity: 2}]
``` 

#### remove(id)

Removes the product from the cart

```javascript
__cart.remove(1)
```

#### update(id, property, value)

Updates the product's property with a certain value.

```javascript
__cart.update(1,'price',200)
```

#### quantity(id, diff)

Increase / decrease product's quantity with a positive or negative value.

```javascript
__cart.quantity(3,2) // will add the quantity of product [id:3] with 2.
__cart.quantity(3,-1) // will decrease the quantity of product [id:3] with 1.
```


#### totalPrice([reducer])

By default returns with the total price:  

```javascript
__cart.totalPrice()
// 5000
```
or you can pass a custom reducer function to have full control over the calculation.

#### totalQuantity()

returns with the total cumulative quantity summing up quantities present in cart:  

```javascript
__cart.totalQuantity()
// 5
```


## License

This plugin is available under Apache 2.0 license.
