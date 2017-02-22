import { Angular220217Page } from './app.po';

describe('angular220217 App', () => {
  let page: Angular220217Page;

  beforeEach(() => {
    page = new Angular220217Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
