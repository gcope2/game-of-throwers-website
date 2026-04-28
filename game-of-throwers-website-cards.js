/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-cards`
 * 
 * @demo index.html
 * @element game-of-throwers-website-cards
 */
export class GameOfThrowersWebsiteCards extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-cards";
  }

  constructor() {
    super();
    this.name = '';
    this.event = '';
    this.pr = '';
    this.url = '';
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      name: {type: String},
      event: {type: String},
      pr: {type: String},
      url: {type: String},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }

      .athlete-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--ddd-color-white);
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .athlete-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
      .athlete-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center 10%;
      }
      .athlete-info {
        padding: 16px;
        text-align: center;
        width: 100%;
      }
      .athlete-name {
        font-size: 22px;
        font-weight: bold;
        color: var(--ddd-color-black);
        margin-bottom: 8px;
      }
      .athlete-event {
        font-size: 18px;
        color: var(--ddd-color-primary);
        margin-bottom: 4px;
        font-weight: 600;
      }
      .athlete-pr {
        font-size: 18px;
        color: var(--ddd-color-secondary);
        font-weight: 500;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="athlete-card">
      <img class="athlete-image" src="${this.url}" alt="${this.name}">
        <div class="athlete-info">
          <div class="athlete-name">${this.name}</div>
          <div class="athlete-event">${this.event}</div>
          <div class="athlete-pr">PR: ${this.pr}</div>
        </div>
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteCards.tag, GameOfThrowersWebsiteCards);