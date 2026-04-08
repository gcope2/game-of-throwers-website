/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./game-of-throwers-website-arrows.js";
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

      .welcome {
        display: flex;
        justify-content: center;
        color: var(--ddd-color-black);
        padding-left: var(--ddd-spacing-18);
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
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="first-block-wrapper">
        <h1 class="welcome">Welcome to the Game of Throws League!</h1>

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