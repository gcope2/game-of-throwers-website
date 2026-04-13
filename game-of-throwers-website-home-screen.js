/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./game-of-throwers-website-arrows.js";
import "./game-of-throwers-website-title.js";
import "./game-of-throwers-website-footer.js";
import images from "./data.js";

/**
 * `game-of-throwers-website-home-screen`
 * 
 * @demo index.html
 * @element game-of-throwers-website-home-screen
 */
export class GameOfThrowersWebsiteHomeScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-home-screen";
  }

  constructor() {
    super();
    this.images = images;
    this.currentImageIndex = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currentImageIndex: { type: Number },
      images: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }

      .first-block-wrapper {
        padding-bottom: 200px;
        padding-top: 30px;
      }
      .image-frame {
        display: flex;
        justify-content: center;
      }
      .carousel-image {
        object-fit: contain;
        max-height: 400px;
        min-height: 400px;
        max-width: 600px;
        border-radius: 10px;
        transition: filter 0.3s ease;
      }
      .carousel-image:hover {
        filter: drop-shadow(0 0 5px black);
        transition: filter 0.3s ease;
      }
      .arrows {
        margin-top: -200px;
      }

      .second-block-wrapper {
        background-color: black !important;
        color: white;
        height: 600px;
        padding-top: 20px;
        padding-bottom: 80px;
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
      <div class="first-block-wrapper">
      <game-of-throwers-website-title title="Welcome to the Game of Throws League!"></game-of-throwers-website-title>

        <div class="image-frame">
          <img class="carousel-image" src="${this.currentImage.url}" alt="Throwers image ${this.currentImageIndex + 1}">
        </div>

        <game-of-throwers-website-arrows
          class="arrows"
          .activeIndex=${this.currentImageIndex}
          .totalItems=${this.images.length}
          @prev-clicked=${this._onPrevClick}
          @next-clicked=${this._onNextClick}>
        </game-of-throwers-website-arrows>
      </div>

      <div class="second-block-wrapper">
        <h1 class="about-title">About Game of Throws</h1>

        <div class="about-row">
          <img class="about-image" src="/images/game-of-throws-logo.jpg" alt="Game of Throwers Logo">
          
          <div class="about-text">
            <p>Game of Throws is a throws-only track & field club dedicated to the shot put, discus, hammer, and javelin. We bring together throwers of all ages and levels who want to get stronger, throw farther, and have a blast doing it.</p>
            <p>Whether you're just learning how to spin in the circle or you're already chasing big personal records, we offer focused coaching, serious strength training, and a tight-knit crew that actually gets the throws. No splitting time with sprints or jumps — just pure throwing energy.</p>
            <p>If you want to get brutally strong and launch bombs with a squad that has your back, this is your crew.</p>
            <p>Let's Throw.</p>
          </div>
        </div>
      </div>

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

  get currentImage() {
    return this.images?.[this.currentImageIndex] || { url: "" };
  }

  _onPrevClick() {
    this.currentImageIndex = this.currentImageIndex === 0 ? this.images.length - 1 : this.currentImageIndex - 1;
  }

  _onNextClick() {
    this.currentImageIndex = this.currentImageIndex === this.images.length - 1 ? 0 : this.currentImageIndex + 1;
  }

}

globalThis.customElements.define(GameOfThrowersWebsiteHomeScreen.tag, GameOfThrowersWebsiteHomeScreen);