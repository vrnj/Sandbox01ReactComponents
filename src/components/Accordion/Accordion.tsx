import React from 'react';

function Accordion(props: any) {
  return (
    <div>
      <AccordionTitle title={props.menuTitle} />
      <AccordionBody />
    </div>
  );
}

function AccordionTitle(props: any) {
  return <h4>{props.title}</h4>;
}

function AccordionBody() {
  return (
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
  );
}

export default Accordion;