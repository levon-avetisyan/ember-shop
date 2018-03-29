import Controller from '@ember/controller';

export default Controller.extend({
    addingShop: false,
    startAddShop: false,
    newShopName: null,
    actions: {
        startAddShop(){
            this.set('addingShop', true);
            this.set('startAddShop', true);
        },
        addShop(){
            let model=this.get('model');
            let ids = model.mapBy('id');
            let nextId = Math.max(...ids) + 1;
            let inputValue = this.get('newShopName');
            if(inputValue !== null){
                let shop = this.get('store').createRecord('shop',{
                    id:nextId,
                    name:this.get('newShopName'),
                });
                shop.save();
                this.set('newShopName', '');
                this.set('startAddShop', false);
                this.set('addingShop', false);

            }
        },
        cancelAdding(){
            this.set('shopName', '');
            this.set('startAddShop', false);
            this.set('addingShop', false);
        }
    }
});
