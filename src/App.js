import React from "react";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header info=" Lidiane Mendes" info1=" 34" info2="Front-end">
          <li>Eu tenho uma filha linda.</li>
        </Header>
      </>
    );
  }
}
