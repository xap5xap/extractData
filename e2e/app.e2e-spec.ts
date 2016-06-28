import { ExtractDataPage } from './app.po';

describe('extract-data App', function() {
  let page: ExtractDataPage;

  beforeEach(() => {
    page = new ExtractDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
