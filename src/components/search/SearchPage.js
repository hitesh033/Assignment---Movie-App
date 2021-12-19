import { css, LitElement, html } from 'lit-element';
import { searchPageStyles } from './styles';
import { MovieCard } from '../shared/MovieCard';

export class SearchPage extends LitElement {
  static get properties() {
    return {
      results: { type: Array },
      error: { type: String },
      loading: { type: Boolean },
    };
  }

  static get styles() {
    return [searchPageStyles];
  }

  constructor() {
    super();
    this.results = [];
    this.loading = false;
  }

  async search(event) {
    event.preventDefault();
    try {
      this.error = '';
      this.loading = true;
      this.results = [];
      const searchString = event.target.querySelector('#search').value;
      const data = await fetch(
        `http://www.omdbapi.com/?s=${searchString}&apikey=6c3a2d45`
      ).then(r => r.json());
      if (data?.Error) {
        this.loading = false;
        this.handleError(data.Error);
        return;
      }
      this.fetchMovies(data.Search);
    } catch (error) {
      this.handleError(error);
    }
  }

  fetchMovies(search) {
    try {
      search.forEach(async movie => {
        const data = await fetch(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=6c3a2d45`
        ).then(r => r.json());
        this.results.push(data);
        this.triggerEvent(this.results);
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  getTopFive(movies) {
    return movies.filter((movie, index) => index < 5);
  }

  triggerEvent(results) {
    const event = new CustomEvent('page-event:movie-list', {
      detail: {
        data: this.getTopFive(results),
        rawData: results,
        page: 'search',
      },
    });
    this.loading = false;
    this.shadowRoot.querySelector('#movieCard').dispatchEvent(event);
  }

  handleError(error) {
    this.triggerEvent([]);
    this.error = error;
  }

  render() {
    return html`
      <form name="searchForm" @submit="${e => this.search(e)}">
        <div class="wrap">
          <div class="search">
            <input
              id="search"
              type="text"
              class="search-term"
              placeholder="Search for Movies.."
            />
            <button type="submit" class="search-button">Search</button>
          </div>
        </div>
      </form>

      <div class="results">
        <app-movie-card id="movieCard"></app-movie-card>
        ${this.results.length === 0 && this.error
          ? html`<p class="error">${this.error}</p>`
          : html``}
        ${this.loading ? html`<p class="loader">Loading...</p>` : html``}
      </div>
    `;
  }
}

customElements.define('app-search', SearchPage);
