/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-coach-cards`
 * 
 * @demo index.html
 * @element game-of-throwers-website-coach-cards
 */
export class GameOfThrowersWebsiteCoachCards extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-coach-cards";
  }

  constructor() {
    super();
    this.name = '';
    this.title = '';
    this.url = '';
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      name: {type: String},
      title: {type: String},
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

      .coach-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--ddd-color-white);
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%;
      }
      .coach-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }
      .coach-image {
        width: 100%;
        height: 220px;
        object-fit: cover;
        object-position: center 20%;
      }
      .coach-info {
        padding: 16px;
        text-align: center;
        width: 100%;
      }
      .coach-name {
        font-size: 22px;
        font-weight: bold;
        color: var(--ddd-color-black);
        margin-bottom: 8px;
      }
      .coach-title {
        font-size: 18px;
        color: var(--ddd-color-primary);
        margin-bottom: 4px;
        font-weight: 600;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="coach-card">
        <img class="coach-image" src="${this.url || ''}" alt="${this.name}">
        <div class="coach-info">
          <div class="coach-name">${this.name}</div>
          <div class="coach-title">${this.title}</div>
        </div>
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteCoachCards.tag, GameOfThrowersWebsiteCoachCards);