import { LitElement, html } from 'lit-element';
import { outlet } from 'lit-element-router';

class NavigationOutlet extends outlet(LitElement) {
  render() {
    return html` <slot></slot> `;
  }
}

customElements.define('app-navigation-outlet', NavigationOutlet);
