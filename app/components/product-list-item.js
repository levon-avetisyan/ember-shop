import Component from '@ember/component';

export default Component.extend({
    tagName: '',
    isEditingProduct:false,
    productName:null,
    productPrice:null,
    productQuantity:null,
    actions: {
        editProduct(){
            this.set('isEditingProduct', true);
        },
        cancelEditingProduct(){
            this.set('isEditingProduct', false);
            this.set('productName', null);
            this.set('productQuantity', null);
            this.set('productPrice', null);
        },
        saveProduct(){
            this.set('product.name', this.get('productName') || this.get('product.name'));
            this.set('product.price', this.get('productPrice') || this.get('product.price'));
            this.set('product.quantity', this.get('productQuantity') || this.get('product.quantity'));
            this.get('product').save();
            this.set('isEditingProduct', false);
        },
        deleteProductRecord(product){
            product.set('shop', null);
            product.save();
        }
    }
});