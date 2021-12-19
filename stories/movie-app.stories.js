import { html } from 'lit';
import '../src/movie-app.js';

export default {
  title: 'MovieApp',
  component: 'movie-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <movie-app
      style="--movie-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </movie-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
