import { SellingWebsiteFrontendPage } from './app.po';

describe('selling-website-frontend App', () => {
  let page: SellingWebsiteFrontendPage;

  beforeEach(() => {
    page = new SellingWebsiteFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
