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
import "./game-of-throwers-website-nav.js";
import "./game-of-throwers-website-footer.js";

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
    this.currentScreen = 'home';

    this._handleRouteChange();
    window.addEventListener('popstate', () => this._handleRouteChange());
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
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <game-of-throwers-website-nav @navigate=${this._handleNavigation}></game-of-throwers-website-nav>

      <div>
        ${this.currentScreen === 'home' ? html`<game-of-throwers-website-home-screen></game-of-throwers-website-home-screen>` : ''}
        ${this.currentScreen === 'schedule' ? html`<game-of-throwers-website-schedule-screen></game-of-throwers-website-schedule-screen>` : ''}
        ${this.currentScreen === 'team' ? html`<game-of-throwers-website-team-screen></game-of-throwers-website-team-screen>` : ''}
        ${this.currentScreen === 'about' ? html`<game-of-throwers-website-about-screen></game-of-throwers-website-about-screen>` : ''}
      </div>

      <game-of-throwers-website-footer></game-of-throwers-website-footer>
  `;
  }

  _handleRouteChange() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    if (page && ['home', 'schedule', 'team', 'about'].includes(page)) {
      this.currentScreen = page;
    } else {
      this.currentScreen = 'home';
      window.history.replaceState({}, '', '?page=home');
    }
  }

  _handleNavigation(e) {
    const screen = e.detail.screen;
    this.currentScreen = screen;
    window.history.pushState({}, '', `?page=${screen}`);
  }
}

globalThis.customElements.define(GameOfThrowersWebsite.tag, GameOfThrowersWebsite);