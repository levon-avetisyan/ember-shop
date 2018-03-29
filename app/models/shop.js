import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
    name: DS.attr(),
    products: DS.hasMany('product', {async: true}),
    priceAmounts: computed('products.[]', function () {
        let products = this.get('products');
        return products.mapBy('price');
    }),
    qtyAmounts: computed('products.[]', function () {
        let products = this.get('products');
        return products.mapBy('quantity');
    }),
    total: computed.sum('priceAmounts')
});
