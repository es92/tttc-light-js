// TIP: install the VSCODE plugin `vscode-styled-components` to
// get CSS syntax highlighting and IntelliSense in this file.
const css = (parts: any) => parts[0];

export default css`
  body {
    margin: 20px;
  }

  h2,
  h3 {
    margin-bottom: 5px;
  }
  h3 {
    margin-top: 7px;
  }

  .claim {
    color: gray;
    cursor: pointer;
    text-decoration: underline;
  }

  .report-description {
    font-style: italic;
  }

  .details {
    display: none;
  }

  .open > .details {
    display: block;
    margin-bottom: 1em;
  }

  .quote {
    font-style: italic;
  }

  .count {
    font-weight: normal;
    opacity: 0.5;
  }

  .video {
    border: none;
  }
`;
