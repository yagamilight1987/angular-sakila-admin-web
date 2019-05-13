import { AppPagesModule } from './app-pages.module';

describe('AppPagesModule', () => {
  let appPagesModule: AppPagesModule;

  beforeEach(() => {
    appPagesModule = new AppPagesModule();
  });

  it('should create an instance', () => {
    expect(appPagesModule).toBeTruthy();
  });
});
