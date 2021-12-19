import { css } from 'lit';

export const movieCardStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Arimo:400,700');
  body {
    height: 100%;
    width: 100%;
    background: #e9e9e9;
    font-family: 'Arimo', Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #010b26;
  }

  * {
    -webkit-transition: 300ms;
    transition: 300ms;
  }

  .intro {
    text-align: center;
  }

  ul {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: #6abcea;
  }

  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .movie-card {
    background: #ffffff;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 315px;
    margin: 2em;
    border-radius: 10px;
    display: inline-block;
  }

  .movie-header {
    padding: 0;
    margin: 0;
    height: 450px;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .header-icon-container {
    position: relative;
  }

  .movie-card:hover {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  }

  .movie-content {
    padding: 18px 18px 24px 18px;
    margin: 0;
  }

  .movie-content-header,
  .movie-info {
    display: table;
    width: 100%;
  }

  .movie-title {
    font-size: 24px;
    margin: 0;
    display: table-cell;
  }

  .movie-title > span {
    font-size: 15px;
  }

  .movie-info {
    margin-top: 1em;
  }

  .info-section {
    display: table-cell;
    text-transform: uppercase;
    text-align: center;
  }

  .info-section:first-of-type {
    text-align: left;
    padding-right: 5px;
  }

  .info-section:last-of-type {
    text-align: right;
  }

  .info-section label {
    display: block;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 0.5em;
    font-size: 9px;
  }

  .info-section span {
    font-weight: 700;
    font-size: 11px;
  }

  .plot {
    font-size: 13px;
    height: 40px;
    padding: 0 0 5px;
    overflow: hidden;
  }

  .load-all {
    display: flex;
    justify-content: center;
    padding: 50px;
  }

  .load-all-btn {
    background-color: rgb(31, 37, 51);
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }

  @media screen and (max-width: 500px) {
    .movie-card {
      width: 95%;
      max-width: 95%;
      margin: 1em;
      display: block;
    }

    .container {
      padding: 0;
      margin: 0;
    }
  }
`;
