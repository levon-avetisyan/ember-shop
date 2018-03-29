import Controller from '@ember/controller';


export default Controller.extend({
    addingProduct: false,
    startAddProduct: false,
    newProductName: null,
    actions: {
        startAddProduct(){
            this.set('addingProduct', true);
            this.set('startAddProduct', true);
        },
        addProduct(){
            let model = this.get('model');
            let nameInputValue = this.get('newProductName');
            let quantityInputValue = this.get('newProductQuantity');
            let priceInputValue = this.get('newProductPrice');
            if(priceInputValue !== null && quantityInputValue !== null && nameInputValue !== null){
                let shop = this.get('store').peekRecord('shop', model.id);
                let newProduct = this.get('store').createRecord('product',{
                    shop: shop,
                    name:this.get('newProductName'),
                    quantity:this.get('newProductQuantity'),
                    price:this.get('newProductPrice')
                });
                shop.get('products').pushObject(newProduct);
                    newProduct.save().then(function () {
                    shop.save();
                });
                this.set('newProductName', '');
                this.set('newProductQuantity', '');
                this.set('newProductPrice', '');
                this.set('startAddProduct', false);
                this.set('addingProduct', false);
            }
        },
        cancelAddingProduct(){
            this.set('newProductName', '');
            this.set('newProductQuantity', '');
            this.set('newProductPrice', '');
            this.set('startAddProduct', false);
            this.set('addingProduct', false);
        }
    }
});
