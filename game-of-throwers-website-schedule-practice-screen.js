/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import scheduleData from "./schedule-data.js";
import "./game-of-throwers-website-title.js";

/**
 * `game-of-throwers-website-schedule-practice-screen`
 * 
 * @demo index.html
 * @element game-of-throwers-website-schedule-practice-screen
 */
export class GameOfThrowersWebsiteSchedulePracticeScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-schedule-practice-screen";
  }

  constructor() {
    super();
    this.practiceDates = this._getPracticeDates();
    this.currentPracticeIndex = 1;
  }

  _getPracticeDates() {
    return scheduleData
      .filter(day => day.events.some(e => !e.isComp)) // Only days with practices
      .map(day => ({
        date: day.date,
        events: day.events.filter(e => !e.isComp) // Only practice events
      }));
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currentPracticeIndex: { type: Number },
      practiceDates: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: gold;
        min-height: 800px;
        padding: 40px 20px 100px;
        color: black;
      }

      .container {
        max-width: 1500px;
        margin: 0 auto;
      }

      .date {
        text-align: center;
        font-size: 48px;
        font-weight: 700;
        margin: 30px 0 25px;
      }

      .nav-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        margin-bottom: 20px;
      }

      button {
        background: black;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 32px;
        cursor: pointer;
        transition: all 0.2s;
      }
      button:hover:not(:disabled) {
        background: #333;
        transform: scale(1.1);
      }
      button:disabled {
        background: #666;
        color: #aaa;
        cursor: not-allowed;
        transform: none;
      }

      table {
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
      }

      th, td {
        padding: 20px 15px;
        text-align: left;
        font-size: 21px;
      }

      th {
        background: black;
        color: white;
        font-size: 22px;
      }

      th:first-child, td:first-child { width: 18%; }
      th:nth-child(2), td:nth-child(2) { width: 18%; }
      th:nth-child(3), td:nth-child(3) { width: 27%; }
      th:last-child, td:last-child { width: 36%; }

      td {
        border-top: 1px solid #ddd;
      }
    `];
  }

  // Lit render the HTML
  render() {
    if (this.practiceDates.length === 0) {
      return html`
        <div class="container">
          <game-of-throwers-website-title title="Practices"></game-of-throwers-website-title>
          <p style="text-align:center; font-size:24px;">No practices scheduled.</p>
        </div>
      `;
    }

    const current = this.practiceDates[this.currentPracticeIndex];

    return html`
      <div class="container">
        <game-of-throwers-website-title title="Practice Schedule"></game-of-throwers-website-title>

        <div title="${current.date}" class="date">${current.date}</div>

        <div class="nav-controls">
          <button title="Back Button" ?disabled=${this.currentPracticeIndex === 0} @click=${this._prev}>‹</button>
          <button title="Next Button" ?disabled=${this.currentPracticeIndex === this.practiceDates.length - 1} @click=${this._next}>›</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Type</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            ${current.events.map(event => html`
              <tr>
                <td title="From: ${event.from}">${event.from}</td>
                <td title="To: ${event.to}">${event.to}</td>
                <td title="Type: ${event.type}">${event.type}</td>
                <td title="Team: ${event.team}">${event.team}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
  `;
  }

 _prev() {
    if (this.currentPracticeIndex > 0) this.currentPracticeIndex--;
  }

  _next() {
    if (this.currentPracticeIndex < this.practiceDates.length - 1) this.currentPracticeIndex++;
  }

  _today() {
    this.currentPracticeIndex = 1;
  }

}

globalThis.customElements.define(GameOfThrowersWebsiteSchedulePracticeScreen.tag, GameOfThrowersWebsiteSchedulePracticeScreen);