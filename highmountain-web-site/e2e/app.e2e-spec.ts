import { HighmountainWebSitePage } from './app.po';

describe('highmountain-web-site App', function() {
  let page: HighmountainWebSitePage;

  beforeEach(() => {
    page = new HighmountainWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
