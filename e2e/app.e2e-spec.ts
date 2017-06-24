import { AtualizaPrevPage } from './app.po';

describe('atualiza-prev App', () => {
  let page: AtualizaPrevPage;

  beforeEach(() => {
    page = new AtualizaPrevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
