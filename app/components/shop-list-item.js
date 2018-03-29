import Component from '@ember/component';

export default Component.extend({
    isEditing:false,
    shopName:null,
    actions: {
        edit(){
            this.set('isEditing', true);
        },
        cancel(){
            this.set('isEditing', false);
            this.set('shopName', null);
        },
        save(){
            this.set('shop.name', this.get('shopName') || this.get('shop.name'));
            this.get('shop').save();
            this.set('isEditing', false);
        },
        deleteRecord(shop){
            shop.deleteRecord();
            this.get('shop').save();
        }
    }
});
