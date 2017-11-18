const BASE_URL = 'https://vapeshop-api.herokuapp.com/';

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
  categoriesUrl: BASE_URL + 'categories'
};
