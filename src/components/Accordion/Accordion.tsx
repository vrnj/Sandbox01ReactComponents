import React from 'react';


type AccordionPropsType = {
    menuTitle: string,
    collapsed: boolean
};

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.menuTitle} />
      <AccordionBody accordionCollapsed={props.collapsed}/>
    </div>
  );
}

type AccordionPropsTitleType = {
    title: string;
}
function AccordionTitle(props: AccordionPropsTitleType) {
  return <h4>{props.title}</h4>;
}

type AccordionBodyType = {
    accordionCollapsed: boolean;
}

function AccordionBody(props: AccordionBodyType) {

    if(props.accordionCollapsed){
        return (<div><span>Collapsed</span></div>);
    } else {
        return (
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    );
    }
  
}

export default Accordion;