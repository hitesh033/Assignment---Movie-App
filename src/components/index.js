import { LitElement, html, css } from 'lit';
import { NavigationMain } from './navigation/NavigationMain';

export class MovieApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Movie app';
  }

  render() {
    return html` <app-navigation></app-navigation> `;
  }
}

customElements.define('movie-app', MovieApp);
