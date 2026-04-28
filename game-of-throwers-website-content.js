/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-content`
 * 
 * @demo index.html
 * @element game-of-throwers-website-content
 */
export class GameOfThrowersWebsiteContent extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-content";
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
      }

      .third-block-wrapper {
        padding-left: var(--ddd-spacing-12);
      }
      .join-text {
        font-size: 25px;
      }
      ul {
        list-style-type: disc;
      }
      ul li::marker {
        color: var(--ddd-color-black);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="third-block-wrapper">
            <h1 class="join-title">Why Throws Only? The College Edge</h1>

            <div class="join-text">
                <p>In a sport where only about <strong>5-6%</strong> of high school athletes go on to compete in college, throwers who specialize early have a real advantage.</p>
                <p>By focusing exclusively on the shot put, discus, hammer, and javelin, our athletes get:</p>
                <ul>
                    <li>More focused coaching and technique work in the circle</li>
                    <li>Dedicated strength training designed specifically for throwers</li>
                    <li>A tight crew of athletes who push each other every session</li>
                    <li>Better competition experience and faster progress</li>
                </ul>
                <p>Many serious throwing clubs see <strong>90%+</strong> of their long-term athletes continue throwing at the college level (far above the national average). Whether your goal is earning a roster spot, walking on, or chasing a scholarship, training with a throws-only group gives you the best shot at reaching the next level.</p>
                <p><strong>If you're serious about throwing far, this is where it starts.</strong></p>
            </div>
        </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteContent.tag, GameOfThrowersWebsiteContent);