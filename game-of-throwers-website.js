/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./game-of-throwers-website-about-screen.js";
import "./game-of-throwers-website-home-screen.js";
import "./game-of-throwers-website-schedule-screen.js";
import "./game-of-throwers-website-team-screen.js";

/**
 * `game-of-throwers-website`
 * 
 * @demo index.html
 * @element game-of-throwers-website
 */
export class GameOfThrowersWebsite extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website";
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
        width: 100%;
        height: 125px;
        background-color: black;
        font-family: var(--ddd-font-navigation);
      }

      .top-row-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .home-image {
        cursor: pointer;
        width: auto;
        height: 130px;
        padding-left: 20px;
      }
      .home-image:hover {
        filter: drop-shadow(0 0 5px gold);
      }

      .nav-buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 100px;
        gap: 50px;
      }
      .schedule-button,
      .team-button,
      .about-button {
        cursor: pointer;
        background-color: transparent;
        color: white;
        border: none;
        height: 40px;
        font-size: 30px;
      }
      .schedule-button:hover,
      .team-button:hover,
      .about-button:hover {
        color: gold;
        filter: drop-shadow(0 0 5px gold);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="top-row-wrapper">
        <a href="/" title="Home Button">
          <img class="home-image" src="/public/images/game-of-throws-png.jpg" alt="Game of Throwers Logo">
        </a>
        
        <div class="nav-buttons">
          <button class="schedule-button" title="Schedule Button">Schedule</button>
          <button class="team-button" title="Team Button">Team</button>
          <button class="about-button" title="About Button">About</button>
        </div>
      </div>

      <div>
        <game-of-throwers-website-home-screen></game-of-throwers-website-home-screen>
      </div>
  `;
  }

}

globalThis.customElements.define(GameOfThrowersWebsite.tag, GameOfThrowersWebsite);