import { css } from 'lit';

export const searchPageStyles = css`
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

  .error {
    text-align: center;
    color: #474747;
    font-size: 15px;
  }

  .loader {
    text-align: center;
  }
`;
