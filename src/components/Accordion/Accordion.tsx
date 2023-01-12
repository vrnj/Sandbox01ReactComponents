import React from 'react';

function Accordion() {
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}

function AccordionTitle() {
  return <h4>Menu</h4>;
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