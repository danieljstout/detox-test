describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
    console.log(device);
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should test something', async () => {
    console.log(device);
  });

  it('"Click me" button should be visible', async () => {
    await expect(element(by.id('click-me-button'))).toBeVisible();
  });

  it('shows "Hi!" after tapping "Click me"', async () => {
    await element(by.id('click-me-button')).tap();
    await expect(element(by.text('Hi!'))).toBeVisible();
  });
});
