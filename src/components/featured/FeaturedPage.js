import { css, LitElement, html } from 'lit';
import { MovieCard } from '../shared/MovieCard';

export class FeaturedPage extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
      imdbIds: { type: Array },
      featured: { type: Array, reflect: true },
    };
  }

  static get styles() {
    return css`
      .error {
        text-align: center;
        color: #474747;
        font-size: 15px;
      }
    `;
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

  /**
   * Fetch movie data based on the predefined imdb ids
   */
  async getFeatured() {
    try {
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
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Sets the error property to have the error message
   */
  handleError(error) {
    this.error = error;
  }

  render() {
    return html`
      <app-movie-card id="movieCard"></app-movie-card>
      ${this.error ? html`<p class="error">${this.error}</p>` : html``}
    `;
  }
}

customElements.define('app-featured', FeaturedPage);
