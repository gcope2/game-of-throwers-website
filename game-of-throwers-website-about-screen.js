/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-about-screen`
 * 
 * @demo index.html
 * @element game-of-throwers-website-about-screen
 */
export class GameOfThrowersWebsiteAboutScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-about-screen";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteAboutScreen.tag, GameOfThrowersWebsiteAboutScreen);