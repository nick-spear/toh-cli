import { TohCliPage } from './app.po';

describe('toh-cli App', () => {
  let page: TohCliPage;

  beforeEach(() => {
    page = new TohCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
