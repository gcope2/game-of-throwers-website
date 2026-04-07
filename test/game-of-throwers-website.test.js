import { html, fixture, expect } from '@open-wc/testing';
import "../game-of-throwers-website.js";

describe("GameOfThrowersWebsite test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <game-of-throwers-website
        title="title"
      ></game-of-throwers-website>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
