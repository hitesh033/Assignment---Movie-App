import { LitElement, html } from 'lit';
import { MovieCard } from '../shared/MovieCard';

export class FeaturedPage extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
      imdbIds: { type: Array },
      featured: { type: Array, reflect: true },
    };
  }

  constructor() {
    super();
    this.featured = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.imdbIds = ['tt10872600', 'tt9389998'];
    this.getFeatured();
  }

  async getFeatured() {
    this.imdbIds.forEach(async id => {
      const data = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=6c3a2d45`
      ).then(r => r.json());
      this.featured.push(data);
      const event = new CustomEvent('page-event:movie-list', {
        detail: {
          data: this.featured,
          page: 'featured',
        },
      });
      this.shadowRoot.querySelector('#movieCard').dispatchEvent(event);
      this.requestUpdate();
    });
  }

  render() {
    return html` <app-movie-card id="movieCard"></app-movie-card> `;
  }
}

customElements.define('app-featured', FeaturedPage);
