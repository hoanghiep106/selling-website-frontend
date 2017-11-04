const BASE_URL = 'https://vapeshop-api.herokuapp.com/';

export const authConfig = {
  signupUrl: BASE_URL + 'sign-up/user',
  signinUrl: BASE_URL + 'log-in/user',
  profileUrl: BASE_URL + 'users/me'
};

export const productsConfig = {
  categoriesUrl: BASE_URL + 'categories',
  productsUrl: BASE_URL + 'products',
  productsByCategoryUrl: (categoryId) => BASE_URL + 'categories/' + categoryId + '/products',
  productUrl: (productId) => BASE_URL + 'products/' + productId
};
