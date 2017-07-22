import { TonicPage } from './app.po';

describe('tonic App', () => {
  let page: TonicPage;

  beforeEach(() => {
    page = new TonicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
