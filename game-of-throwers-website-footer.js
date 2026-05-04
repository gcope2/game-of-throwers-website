/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-footer`
 * 
 * @demo index.html
 * @element game-of-throwers-website-footer
 */
export class GameOfThrowersWebsiteFooter extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-footer";
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
        background-color: black !important;
        color: white;
        width: 100%;
      }

      .footer-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .copyright-thing {
        padding-left: var(--ddd-spacing-8);
      }

      .links-wrapper {
        color: var(--ddd-color-white);
        display: flex;
        gap: var(--ddd-spacing-10);
        padding-right: var(--ddd-spacing-12);
      }
      .links-wrapper a {
        color: var(--ddd-color-white);
        font-size: 30px;
      }
      .links-wrapper a:hover {
        filter: drop-shadow(0 0 5px gold);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="footer-wrapper">
      <h3 class="copyright-thing">© Game of Throws - Throwing League</h3>
    
      <div class="links-wrapper">
        <a class="insta" title="Instagram Button" href="https://hax.psu.edu/">Instagram</a>
        <a class="fb" title="Facebook Button" href="https://hax.psu.edu/">Facebook</a>
      </div>
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteFooter.tag, GameOfThrowersWebsiteFooter);