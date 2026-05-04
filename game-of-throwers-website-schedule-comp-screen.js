/**
 * Copyright 2026 Gabby Cope
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./game-of-throwers-website-title.js";

/**
 * `game-of-throwers-website-schedule-comp-screen`
 * 
 * @demo index.html
 * @element game-of-throwers-website-schedule-comp-screen
 */
export class GameOfThrowersWebsiteScheduleCompScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "game-of-throwers-website-schedule-comp-screen";
  }

  constructor() {
    super();
    this.currentCompIndex = 0;
    this.compDates = [];
    this._loadSchedule();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currentCompIndex: { type: Number },
      compDates: { type: Array },
    };
  }

  async _loadSchedule() {
    try {
      const res = await fetch('/api/schedule');
      if (res.ok) {
        const allData = await res.json();
        this.compDates = allData
          .filter(day => day.events.some(e => e.isComp === true))
          .map(day => ({
            date: day.date,
            events: day.events.filter(e => e.isComp === true)
          }));
      }
    } catch (e) {
      console.error("Failed to load comp schedule", e);
    }
    this.requestUpdate();
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 800px;
        padding: 40px 20px 100px;
        color: light-dark (
          var(--ddd-theme-default-black),
          var(--ddd-theme-default-white)
        );
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
        background: var(--ddd-theme-default-black);
        color: var(--ddd-theme-default-white);
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 32px;
        cursor: pointer;
        transition: all 0.2s;
      }
      button:hover:not(:disabled) {
        background: var(--ddd-theme-default-gray);
        transform: scale(1.1);
      }
      button:disabled {
        background: var(--ddd-theme-default-light-gray);
        color: var(--ddd-theme-default-white);
        cursor: not-allowed;
        transform: none;
      }

      table {
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
        background: var(--ddd-theme-default-white);
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
        background: var(--ddd-theme-default-black);
        color: var(--ddd-theme-default-white);
        font-size: 22px;
      }

      th:first-child, td:first-child { width: 18%; }
      th:nth-child(2), td:nth-child(2) { width: 18%; }
      th:nth-child(3), td:nth-child(3) { width: 27%; }
      th:last-child, td:last-child { width: 36%; }

      td {
        border-top: 1px solid #ddd;
        color: var(--ddd-theme-default-black);
      }

      .comp {
        font-weight: bold;
        color: var(--ddd-theme-default-red);
      }
    `];
  }

  // Lit render the HTML
  render() {
    if (this.compDates.length === 0) {
      return html`
        <div class="container">
          <game-of-throwers-website-title title="Competition Schedule"></game-of-throwers-website-title>
          <p style="text-align:center; font-size:24px;">Loading competition schedule...</p>
        </div>
      `;
    }

    const current = this.compDates[this.currentCompIndex];

    return html`
      <div class="container">
        <game-of-throwers-website-title title="Competition Schedule"></game-of-throwers-website-title>

        <div title="${current.date}" class="date">${current.date}</div>

        <div class="nav-controls">
          <button title="Back Button" ?disabled=${this.currentCompIndex === 0} @click=${this._prev}>‹</button>
          <button title="Next Button" ?disabled=${this.currentCompIndex === this.compDates.length - 1} @click=${this._next}>›</button>
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
                <td title="Type: ${event.type}" class="comp">${event.type}</td>
                <td title="Team: ${event.team}">${event.team}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }

  _prev() { 
    if (this.currentCompIndex > 0) {
      this.currentCompIndex--; 
    }
  }

  _next() { 
    if (this.currentCompIndex < this.compDates.length - 1) {
      this.currentCompIndex++; 
    }
  }

}

globalThis.customElements.define(GameOfThrowersWebsiteScheduleCompScreen.tag, GameOfThrowersWebsiteScheduleCompScreen);