/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-arrows`
 * 
 * @demo index.html
 * @element game-of-throwers-website-arrows
 */
export class GameOfThrowersWebsiteArrows extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-arrows";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      activeIndex: { type: Number },
      totalItems: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back-wrapper {
        justify-content: left;
        padding-left: 40px;
      }
      .next-wrapper {
        justify-content: right;
        padding-right: 40px;
      }

      button {
        cursor: pointer;
        background-color: transparent;
        border: 4px solid black;
        font-weight: var(--ddd-font-weight-bold);
        border-radius: 50%;
        font-size: 25px;
        height: 40px;
        width: 40px;
      }
      button:hover {
        opacity: 0.65;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="back-wrapper">
      <button
      class="back"
      title="Back Button"
      @click=${() => this.dispatchEvent(new CustomEvent('prev-clicked', {bubbles: true, composed: true }))}><</button>
    </div>
    <div class="next-wrapper">
      <button
      class="next"
      title="Next Button"
      @click=${() => this.dispatchEvent(new CustomEvent('next-clicked', {bubbles: true, composed: true}))}>></button>
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteArrows.tag, GameOfThrowersWebsiteArrows);