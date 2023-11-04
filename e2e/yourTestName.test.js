describe('Example', () => {
  beforeAll(async () => {
    console.log(device);
  });

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    // await device.reloadReactNative();
  });

  it('should test something', async () => {
      console.log(device)
  });
});
