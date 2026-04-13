/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-title`
 * 
 * @demo index.html
 * @element game-of-throwers-website-title
 */
export class GameOfThrowersWebsiteTitle extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-title";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
      }
      h1 {
        color: var(--ddd-color-black);
        font-size: 2.5rem;
        margin: 0;
        font-weight: 700;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <h1>${this.title}</h1>
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteTitle.tag, GameOfThrowersWebsiteTitle);