import { css, LitElement, html } from 'lit';
import { router } from 'lit-element-router';
import { FeaturedPage } from '../featured/FeaturedPage';
import { SearchPage } from '../search/SearchPage';
import './NavigationLink';
import './NavigationOutlet';

export class NavigationMain extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get styles() {
    return css`
      nav {
        width: 100%;
        background: rgb(31, 37, 51);
        padding: 10px 0;
      }
    `;
  }

  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
      },
      {
        name: 'featured',
        pattern: 'featured',
      },
      {
        name: 'search',
        pattern: 'search',
      },
      {
        name: 'not-found',
        pattern: '*',
      },
    ];
  }
  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
  }

  render() {
    return html`
      <nav>
        <app-navigation-link href="/featured">Featured</app-navigation-link>
        <app-navigation-link href="/search">Search</app-navigation-link>
      </nav>
      <app-navigation-outlet active-route=${this.route}>
        <div route="home"><app-featured></app-featured></div>
        <div route="featured">
          <app-featured></app-featured>
        </div>
        <div route="search">
          <app-search></app-search>
        </div>
        <h1 route="not-found">Not Found</h1>
      </app-navigation-outlet>
    `;
  }
}

customElements.define('app-navigation', NavigationMain);
