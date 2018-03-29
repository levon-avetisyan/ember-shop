export default function () {

    this.get('/shops');
    this.patch('/shops');
    this.post('/shops');
    this.put('/shops');
    this.del('/shops');

    this.get('/shops/:id');
    this.patch('/shops/:id');
    this.post('/shops/:id');
    this.put('/shops/:id');
    this.del('/shops/:id');

    this.get('/products/:id');
    this.patch('/products/:id');
    this.post('/products');
    this.put('/products');
    this.del('/products/:id');

}
