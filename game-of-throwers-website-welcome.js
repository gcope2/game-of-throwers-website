/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `game-of-throwers-website-welcome`
 * 
 * @demo index.html
 * @element game-of-throwers-website-welcome
 */
export class GameOfThrowersWebsiteWelcome extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-welcome";
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

      .second-block-wrapper {
        background-color: black !important;
        height: 600px;
        padding-top: 20px;
        padding-bottom: 80px;
        color: var(--ddd-theme-default-white);
      }
      .about-title {
        display: flex;
        justify-content: center;
      }
      .about-row {
        flex-direction: row;
        display: flex;
        gap: 100px;
        padding-left: 50px;
        max-height: 550px;
      }
      .about-image {
        padding-left: var(--ddd-spacing-12);
        margin-bottom: 100px;
        max-width: 400px;
        border-radius: 15px;
        transition: filter 0.3s ease;
      }
      .about-image:hover {
        filter: drop-shadow(0 0 5px gold);
        transition: filter 0.3s ease;
      }
      .about-text {
        max-width: 1000px;
        font-size: 27px;
        line-height: 1.45;
        max-height: 515px;
        overflow-y: auto;
        padding-right: 20px;
        scrollbar-width: thin;
        scrollbar-color: gold gray;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="second-block-wrapper">
        <h1 class="about-title">About Game of Throws</h1>

        <div class="about-row">
          <img class="about-image" src="/images/game-of-throws-logo.jpg" alt="Game of Throws Official Logo" loading="lazy">
          
          <div class="about-text">
            <p>Game of Throws is a throws-only track & field club dedicated to the shot put, discus, hammer, and javelin. We bring together throwers of all ages and levels who want to get stronger, throw farther, and have a blast doing it.</p>
            <p>Whether you're just learning how to spin in the circle or you're already chasing big personal records, we offer focused coaching, serious strength training, and a tight-knit crew that actually gets the throws. No splitting time with sprints or jumps — just pure throwing energy.</p>
            <p>If you want to get brutally strong and launch bombs with a squad that has your back, this is your crew.</p>
            <p>Let's Throw.</p>
          </div>
        </div>
      </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteWelcome.tag, GameOfThrowersWebsiteWelcome);