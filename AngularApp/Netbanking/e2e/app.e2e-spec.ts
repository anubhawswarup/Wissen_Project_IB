import { NetbankingPage } from './app.po';

describe('netbanking App', () => {
  let page: NetbankingPage;

  beforeEach(() => {
    page = new NetbankingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
