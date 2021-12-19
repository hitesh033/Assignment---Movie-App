import { LitElement, html } from 'lit-element';
import { movieCardStyles } from './styles.js';

export class MovieCard extends LitElement {
  static get properties() {
    return {
      movieList: { type: Array },
      page: { type: String },
      rawSearchData: { type: Array },
      loaded: { type: Boolean },
    };
  }

  static get styles() {
    return [movieCardStyles];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loaded = false;
    this.addEventListener('page-event:movie-list', this.getData.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('page-event:movie-list', this.getData.bind(this));
  }

  getData({ detail }) {
    this.loaded = false;
    this.movieList = detail.data;
    this.page = detail.page;
    this.rawSearchData = detail.rawData;
    this.requestUpdate();
  }

  loadAll() {
    this.movieList = this.rawSearchData;
    this.loaded = true;
  }

  render() {
    console.log('featured card', this.movieList);
    return html`
      <div class="container">
        ${this.movieList
          ? this.movieList.map(
              movie => html`
                <div class="movie-card">
                  <div
                    class="movie-header"
                    style="background: url(${movie.Poster});background-size: cover;"
                  >
                    <div class="header-icon-container"></div>
                  </div>
                  <div class="movie-content">
                    <div class="movie-content-header">
                      <h3 class="movie-title">
                        ${movie.Title}
                        <span
                          >(${this.page === 'search'
                            ? html`${movie.Released}`
                            : html`${movie.Year}`})</span
                        >
                      </h3>
                    </div>
                    <p class="plot">${movie.Plot}</p>
                    <div class="movie-info">
                      <div class="info-section">
                        <label>Awards</label>
                        <span>${movie.Awards}</span>
                      </div>
                    </div>
                    ${this.page === 'search'
                      ? html`
                          <div class="movie-info">
                            <div class="info-section">
                              <label>Year</label>
                              <span>${movie.Year}</span>
                            </div>
                            ${movie.Ratings.map(
                              rating => html`
                                <div class="info-section">
                                  <label
                                    >${rating.Source ===
                                    'Internet Movie Database'
                                      ? 'IMDB'
                                      : rating.Source}</label
                                  >
                                  <span>${rating.Value}</span>
                                </div>
                              `
                            )}
                          </div>
                          <div class="movie-info">
                            <div class="info-section">
                              <label>Type</label>
                              <span>${movie.Type}</span>
                            </div>
                            <div class="info-section">
                              <label>Genre</label>
                              <span>${movie.Genre}</span>
                            </div>
                          </div>
                          <div class="movie-info">
                            <div class="info-section">
                              <label>Actors</label>
                              <span>${movie.Actors}</span>
                            </div>
                            <div class="info-section">
                              <label>Director</label>
                              <span>${movie.Director}</span>
                            </div>
                          </div>
                        `
                      : html``}
                  </div>
                </div>
              `
            )
          : html``}
      </div>
      ${this.page === 'search' && !this.loaded
        ? html`
            <div class="load-all">
              <button @click="${() => this.loadAll()}" class="load-all-btn">
                Load All
              </button>
            </div>
          `
        : html``}
    `;
  }
}

customElements.define('app-movie-card', MovieCard);
