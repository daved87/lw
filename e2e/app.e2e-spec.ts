import { LegiwatchPage } from './app.po';

describe('legiwatch App', function() {
  let page: LegiwatchPage;

  beforeEach(() => {
    page = new LegiwatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
