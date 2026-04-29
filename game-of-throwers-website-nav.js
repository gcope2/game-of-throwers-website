/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import outline from "./outline.js";

export class GameOfThrowersWebsiteNav extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-nav";
  }

  static get properties() {
    return {
      ...super.properties,
      navItems: { type: Array },
    };
  }

  constructor() {
    super();
    this.navItems = outline.items.filter(item => item.id !== "home");
  }

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
        height: 100%;
      }

      .home-image {
        cursor: pointer;
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
        padding-right: 150px;
        gap: 50px;
      }

      .nav-item {
        position: relative;
        color: white;
        font-size: 28px;
        cursor: pointer;
        padding: 8px 12px;
      }

      .nav-item:hover {
        color: gold;
        filter: drop-shadow(0 0 5px gold);
      }

      .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: black;
        border: 2px solid gold;
        border-top: none;
        display: none;
        flex-direction: column;
        min-width: 220px;
        box-shadow: 0 8px 16px black;
        z-index: 100;
      }

      .nav-item:hover .dropdown {
        display: flex;
      }

      .dropdown a {
        color: white;
        padding: 12px 20px;
        text-decoration: none;
        font-size: 22px;
        white-space: nowrap;
      }

      .dropdown a:hover {
        background-color: #222;
        color: gold;
      }
    `];
  }

  render() {
    return html`
      <div class="top-row-wrapper">
        <a title="Home Button" href="?page=home" @click=${this._goHome}>
          <img class="home-image" src="/images/game-of-throws-png.jpg" alt="Game of Throwers Logo">
        </a>

        <div class="nav-buttons">
          ${this.navItems.map(item => html`
            <div class="nav-item">
              <span title="${item.title}" @click=${() => this._navigateTo(item.slug)}>${item.title}</span>
              
              ${item.children ? html`
                <div class="dropdown">
                  ${item.children.map(child => html`
                    <a title="${child.title}" href="?page=${child.slug}" 
                       @click=${(e) => this._navigateTo(child.slug, e)}>
                      ${child.title}
                    </a>
                  `)}
                </div>
              ` : ''}
            </div>
          `)}
        </div>
      </div>
    `;
  }

  _navigateTo(screen, e = null) {
    if (e) e.preventDefault();
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