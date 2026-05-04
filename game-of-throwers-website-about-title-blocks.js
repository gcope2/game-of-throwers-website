/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-about-title-blocks`
 * 
 * @demo index.html
 * @element game-of-throwers-website-about-title-blocks
 */
export class GameOfThrowersWebsiteAboutTitleBlocks extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-about-title-blocks";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }

      .align-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding-inline-start: 20px;
        padding-inline-end: 20px;
    }
      .left-line, .right-line {
        color: var(--color-black);
        flex: 1;
        height: 2px;
        margin-top: 20px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="align-wrapper">
            <hr class="left-line">
            <h2 class="title">${this.title}</h2>
            <hr class="right-line">
        </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteAboutTitleBlocks.tag, GameOfThrowersWebsiteAboutTitleBlocks);