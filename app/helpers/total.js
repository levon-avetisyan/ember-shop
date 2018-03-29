import {helper} from '@ember/component/helper';

export function total(params) {
    return params.reduce((price, qty) => {
        if (price.length && qty.length) {
            let totalProductsArr = [];
            qty.map(function (num, idx) {
                totalProductsArr.push(num * price[idx]);
            });
            return totalProductsArr.reduce((a, b) => a + b);
        }
    })
}

export default helper(total);