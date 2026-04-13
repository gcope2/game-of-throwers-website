/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { rosterImages, coaches } from "./data.js";
import "./game-of-throwers-website-title.js";

/**
 * `game-of-throwers-website-team-screen`
 * 
 * @demo index.html
 * @element game-of-throwers-website-team-screen
 */
export class GameOfThrowersWebsiteTeamScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-team-screen";
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
        min-height: calc(100vh - 125px);
        background-color: var(--ddd-color-white);
        padding: 40px 20px;
      }

      .subtitle {
        display: flex;
        justify-content: center;
      }
      .coach-subtitle {
        display: flex;
        margin-top: 60px;
        justify-content: center;
      }

      .roster-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto;
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
      .athlete-info,
      .coach-info {
        padding: 16px;
        text-align: center;
        width: 100%;
      }
      .athlete-name,
      .coach-name {
        font-size: 22px;
        font-weight: bold;
        color: var(--ddd-color-black);
        margin-bottom: 8px;
      }
      .athlete-event,
      .coach-title {
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
      .coach-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto;
        margin-top: 20px;
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
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <game-of-throwers-website-title title="Meet the Throwers!"></game-of-throwers-website-title>
    <h2 class="subtitle">The Squad:</h2>

    <div class="roster-grid">
      ${rosterImages.map((athlete, index) => html`
        <div class="athlete-card">
          <img class="athlete-image" src="${athlete.url}" alt="${athlete.name}">
          <div class="athlete-info">
            <div class="athlete-name">${athlete.name}</div>
            <div class="athlete-event">${athlete.event}</div>
            <div class="athlete-pr">PR: ${athlete.pr}</div>
          </div>
        </div>
      `)}
    </div>

    <h2 class="coach-subtitle">The Coaches:</h2>
    <div class="coach-grid">
      ${coaches.map((coach) => html`
        <div class="coach-card">
          <img class="coach-image" src="${coach.url}" alt="${coach.name}">
          <div class="coach-info">
            <div class="coach-name">${coach.name}</div>
            <div class="coach-title">${coach.title}</div>
          </div>
        </div>
      `)}
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteTeamScreen.tag, GameOfThrowersWebsiteTeamScreen);