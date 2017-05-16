import { MnhVirtualListPage } from './app.po';

describe('mnh-virtual-list App', () => {
  let page: MnhVirtualListPage;

  beforeEach(() => {
    page = new MnhVirtualListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
