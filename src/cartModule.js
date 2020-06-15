/**
 * Author : Zeeshan M.
 * Cart Functionality for storing selected products to localstorage
 */

let __cart = {
    STORAGE_KEY : '__cart',
    quantityField : 'quantity',
    changeListener : null,
    listen : function(cb) { 
        this.changeListener = cb 
    },
    list : function(key){ 
        return this.parse(key) || [] 
    },
    save : function(data, key){
        localStorage.setItem(key || this.STORAGE_KEY, JSON.stringify(data));
        if(this.changeListener) this.changeListener(this.list(key))
            return ;
    },
    clear : function(key){
        localStorage.removeItem(key || this.STORAGE_KEY)
        if(this.changeListener) this.changeListener(this.list(key))
        return ;
    },
    get : function(id){ 
        return this.list().find((product) => product.id === id) 
    },
    add : function(product, quantity){ 
        return this.isValid(product) ? this.exists(product.id) ? this.update(product.id, this.quantityField, this.get(product.id).quantity + (product.quantity || quantity || 1)) : this.save(this.list().concat({ ...product, quantity: quantity || 1 })) : null 
    },
    update : function(id, field, value){ 
        return this.save(this.list().map((product) => product.id === id ? ({ ...product, [field]: value }) : product)) 
    },
    remove : function(id){ 
        return this.save(this.list().filter((product) => product.id !== id)) 
    },
    quantity : function(id, diff){ 
        return this.exists(id) && this.get(id).quantity + diff > 0 ? this.update(id, this.quantityField, this.get(id).quantity + diff) : this.remove(id)
    },
    totalPrice : function(cb){ 
        return this.list().reduce((sum, product) => this.isCallback(cb) ? cb(sum, product) : (sum += this.subtotal(product)), 0) 
    },
    subtotal : function(product){ 
        return this.isCalculable(product) ? (product.price * product.quantity) : 0 
    },
    totalQuantity : function(){ 
        return this.list().reduce((sum, product) => (sum += product.quantity), 0) 
    },
    exists : function(id){ 
        return !!this.get(id) 
    },
    isValid : function(product){ 
        return product.id && product.price 
    },
    isCalculable : function(product){ 
        return (product && product.price && product.quantity) 
    },
    isCallback : function(cb){ 
        return cb && typeof cb === "function" 
    },
    parse : function(key){
        return JSON.parse(localStorage.getItem(key || this.STORAGE_KEY));
    },
    onChange : function(cb){ 
        return this.isCallback(cb) ? this.listen(cb) : console.log(typeof cb) 
    },
}
