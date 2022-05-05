import React from "react";

const props = (props) => {
  return (
    <>
      <ul>
        <li>Olá, eu me chamo {props.info}.</li>
        <li>Eu tenho {props.info1} anos.</li>
        <li>Eu amo estudar {props.info2}.</li>
        {props.children}
      </ul>
    </>
  );
};

export default props;
