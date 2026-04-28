/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { rosterImages, coaches } from "./data.js";
import "./game-of-throwers-website-title.js";
import "./game-of-throwers-website-cards.js";
import "./game-of-throwers-website-coach-cards.js";

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
        min-height: 850px;
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
      
      .coach-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        max-width: 1400px;
        margin: 0 auto;
        margin-top: 20px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <game-of-throwers-website-title title="Meet the Throwers!"></game-of-throwers-website-title>
    <h2 class="subtitle">The Squad:</h2>

    <div class="roster-grid">
      ${rosterImages.map(athlete => html`
          <game-of-throwers-website-cards
            .name=${athlete.name}
            .event=${athlete.event}
            .pr=${athlete.pr}
            .url=${athlete.url}>
          </game-of-throwers-website-cards>
        `)}
    </div>

    <h2 class="coach-subtitle">The Coaches:</h2>
    <div class="coach-grid">
      ${coaches.map(coach => html`
          <game-of-throwers-website-coach-cards
            .name=${coach.name}
            .title=${coach.title}
            .url=${coach.url}>
          </game-of-throwers-website-coach-cards>
        `)}
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteTeamScreen.tag, GameOfThrowersWebsiteTeamScreen);