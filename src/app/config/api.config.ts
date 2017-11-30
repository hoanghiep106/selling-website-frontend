const BASE_URL = 'http://hardtobelieve.me:5000/';

export const authAPI = {
  signupUrl: BASE_URL + 'sign-up/user',
  signinUrl: BASE_URL + 'log-in/user',
  profileUrl: BASE_URL + 'users/me'
};

export const productsAPI = {
  productsUrl: (queryObject) => {
    const queryParams = Object.keys(queryObject)
      .filter(k => queryObject[k])
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(queryObject[k]))
      .join('&');
    return BASE_URL + 'products?' + queryParams;
  },
  productUrl: (productId) => BASE_URL + 'products/' + productId
};

export const categoriesAPI = {
  categoriesUrl: BASE_URL + 'categories',
  categoryUrl: (categoryId) => BASE_URL + 'categories/' + categoryId
};

export const cartAPI = {
  addToCartUrl: BASE_URL + 'carts',
  removeFromCartUrl: (orderId, productId) => BASE_URL + 'carts/order/' + orderId + '/product/' + productId,
  getCartUrl: (orderId) => BASE_URL + 'carts/order/' + orderId,
  checkoutUrl: (orderId) => BASE_URL + 'orders/checkout/' + orderId
};
