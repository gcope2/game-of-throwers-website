/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-nav`
 * 
 * @demo index.html
 * @element game-of-throwers-website-nav
 */
export class GameOfThrowersWebsiteNav extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-nav";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currentScreen: { type: String },
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
        <a href="/game-of-throwers/home" title="Home Button" @click=${this._goHome}>
          <img class="home-image" src="/public/images/game-of-throws-png.jpg" alt="Game of Throwers Logo">
        </a>
        
        <div class="nav-buttons">
          <button class="schedule-button" title="Schedule Button" @click=${() => this._navigateTo('schedule')}>Schedule</button>
          <button class="team-button" title="Team Button" @click=${() => this._navigateTo('team')}>Team</button>
          <button class="about-button" title="About Button" @click=${() => this._navigateTo('about')}>About</button>
        </div>
      </div>
  `;
  }

  _navigateTo(screen) {
    this.dispatchEvent(new CustomEvent('navigate', { 
      detail: { screen }, 
      bubbles: true, 
      composed: true 
    }));
  }

  _goHome(e) {
    e.preventDefault();
    this._navigateTo('home');
  }

}

globalThis.customElements.define(GameOfThrowersWebsiteNav.tag, GameOfThrowersWebsiteNav);