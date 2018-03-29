import Router from '@ember/routing/router';

Router.map(function() {
  this.route('shops');
  this.route('shop', { path: '/shops/:shop_id' });
});

export default Router;
