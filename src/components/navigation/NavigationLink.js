import { css, LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

class NavigationLink extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  static get styles() {
    return css`
      .link {
        font-size: 14px;
        cursor: pointer;
        padding: 0px 10px;
        position: relative;
        text-decoration: none;
        font-weight: 400;
        color: rgb(204, 204, 204);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      }
    `;
  }
  constructor() {
    super();
    this.href = '';
  }
  render() {
    return html`
      <a class="link" href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }
  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define('app-navigation-link', NavigationLink);
