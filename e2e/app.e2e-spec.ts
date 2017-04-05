import { NgRouterForFunctionalProgrammersPage } from './app.po';

describe('ng-router-for-functional-programmers App', () => {
  let page: NgRouterForFunctionalProgrammersPage;

  beforeEach(() => {
    page = new NgRouterForFunctionalProgrammersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
