/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./game-of-throwers-website-title.js";
import "./game-of-throwers-website-about-title-blocks.js";

/**
 * `game-of-throwers-website-about-screen`
 * 
 * @demo index.html
 * @element game-of-throwers-website-about-screen
 */
export class GameOfThrowersWebsiteAboutScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-about-screen";
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
        color: light-dark (
          var(--ddd-theme-default-black),
          var(--ddd-theme-default-white)
        );
      }

      .title {
        padding-top: 30px;
      }

      p {
        padding-left: 30px;
        padding-right: 30px;
        font-size: 27px;
      }

      .phil-list {
        list-style-type: decimal;
        padding-left: 90px;
      }
      .season-list {
        list-style-type: disc;
        padding-left: 90px;
      }
      li {
        font-size: 25px !important;
      }
      ul li::marker {
        color: var(--ddd-theme-default-black);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <game-of-throwers-website-title title="About Game of Throws" class="title"></game-of-throwers-website-title>

      <div class="mission-text">
        <game-of-throwers-website-about-title-blocks title="Mission"></game-of-throwers-website-about-title-blocks>
        <p>Game of Throws is a dedicated <strong>throws-only</strong> track & field club specializing in the shot put, discus, hammer, and javelin. We exist for one simple reason: to give throwers a place where they can focus entirely on what they love most — stepping into the circle and launching heavy objects as far as possible.</p>
        <p>We provide a fun, competitive, and highly supportive training environment for throwers of all ages and ability levels — from complete beginners just learning proper technique to seasoned athletes chasing national-level distances. Our program is built around year-round technical development, explosive strength training, and consistent competition experience.</p>
        <p>At Game of Throws, you won't have to split your time between sprints, jumps, or distance events. Instead, you’ll train with athletes and coaches who truly understand the unique demands of throwing. We emphasize proper technique, building real power, mental toughness, and strong camaraderie. Most importantly, we want every athlete to experience the thrill and satisfaction of throwing farther than they ever thought possible.</p>
        <p>Whether your goal is to make the high school varsity team, earn a college roster spot, or simply become the strongest version of yourself while having a great time — you belong here.</p>
      </div>

      <div class="philosophy-text">
        <game-of-throwers-website-about-title-blocks title="Our Philosophy"></game-of-throwers-website-about-title-blocks>
        <p>To create the best throws-only community in the area — where everyone gets stronger, throws farther, and has a great time doing it.</p>
        <p>Game of Throws operates on four core pillars:</p>
        <ul class="phil-list">
          <li>Promoting a love of the throws — Making the circle a place where athletes want to be.</li>
          <li>Developing explosive technique and power — Focused coaching on the four throwing events.</li>
          <li>Building a tight-knit throwing crew — Training together, competing together, and cheering each other on.</li>
          <li>Developing mental toughness and sportsmanship — In the circle and outside of it.</li>
        </ul>
      </div>

      <div class="season-overview-text">
        <game-of-throwers-website-about-title-blocks title="Season Overview"></game-of-throwers-website-about-title-blocks>
        <p>Here's a high-level look at how our year usually flows (dates can shift slightly year to year):</p>
        <ul class="season-list">
          <li>Winter (November-Early March): Indoor training focus, technique work, and strength building. Local and regional indoor meets.</li>
          <li>Spring (Late March-May): Outdoor season ramps up — more frequent competitions and heavy throwing sessions.</li>
          <li>Summer/Fall (June-October): Peak throwing season with bigger meets, possible travel competitions, and summer training blocks.</li>
          <li>Registration: New throwers can join at the start of each training block. No formal tryouts — just come ready to throw!</li>
        </ul>
        <p>We keep the atmosphere welcoming but driven. Throwers support each other, celebrate big PRs, and push one another to improve.</p>
      </div>

      <div class="contact-text">
        <game-of-throwers-website-about-title-blocks title="Contact Us"></game-of-throwers-website-about-title-blocks>
        <p><strong>If you have any questions or would like to learn more about Game of Throws, feel free to reach out!</strong></p>
        <p><strong>Email:</strong> gameofthrowers@gmail.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> Colorado Springs, CO (1 Olympic Plaza, 80909)</p>
      </div>
    </div>
  `;
  }
}

globalThis.customElements.define(GameOfThrowersWebsiteAboutScreen.tag, GameOfThrowersWebsiteAboutScreen);