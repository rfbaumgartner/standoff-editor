import { StandoffEditorPage } from './app.po';

describe('standoff-editor App', () => {
  let page: StandoffEditorPage;

  beforeEach(() => {
    page = new StandoffEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
