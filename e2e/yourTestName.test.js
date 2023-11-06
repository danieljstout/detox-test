import {faker} from '@faker-js/faker';

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

  it('shows "Hi, <name>!" when the user enters their name', async () => {
    const name = faker.person.firstName;
    const input = await element(by.id('name-input'));
    await input.clearText();
    await input.typeText(name);

    await expect(element(by.id('output-text'))).toHaveText(`Hi, ${name}!`);
  });
});
