import { css, LitElement, html } from 'lit-element';
import { MovieCard } from '../shared/MovieCard';

export class SearchPage extends LitElement {
  static get properties() {
    return {
      results: { type: Array },
    };
  }

  static get styles() {
    return css`
      .search {
        width: 100%;
        position: relative;
        display: flex;
      }

      .search-term {
        width: 100%;
        border: 3px solid rgb(31, 37, 51);
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9dbfaf;
      }

      .search-term:focus {
        color: rgb(31, 37, 51);
      }

      .search-button {
        width: auto;
        height: 36px;
        border: 1px solid rgb(31, 37, 51);
        background: rgb(31, 37, 51);
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 15px;
      }

      .wrap {
        width: 50%;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }

  constructor() {
    super();
    this.results = [];
  }

  async search(event) {
    event.preventDefault();
    this.results = [];
    const searchString = event.target.querySelector('#search').value;
    const data = await fetch(
      `http://www.omdbapi.com/?s=${searchString}&apikey=6c3a2d45`
    ).then(r => r.json());
    this.fetchMovies(data.Search);
  }

  fetchMovies(search) {
    search.forEach(async movie => {
      const data = await fetch(
        `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=6c3a2d45`
      ).then(r => r.json());
      this.results.push(data);
      const event = new CustomEvent('page-event:movie-list', {
        detail: {
          data: this.getTopFive(this.results),
          rawData: this.results,
          page: 'search',
        },
      });
      this.shadowRoot.querySelector('#movieCard').dispatchEvent(event);
    });
  }

  getTopFive(movies) {
    return movies.filter((movie, index) => index < 5);
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
      </div>
    `;
  }
}

customElements.define('app-search', SearchPage);
