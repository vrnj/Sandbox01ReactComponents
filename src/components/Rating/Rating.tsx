import React from 'react';

export function Rating(props: any) {
  if (props.value === 1){
    return(
    <div>
      <Star selected={true}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>    
    );
  }
  else if(props.value === 2){
    return(
    <div>
      <Star selected={true}/>
      <Star selected={true}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>    
    );
  }
  else if(props.value === 3){
    return(
    <div>
      <Star selected={true}/>
      <Star selected={true}/>
      <Star selected={true}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>    
    );
  }

  return (
    <div>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>    
    );
  

}




function Star(props: any) { //function Star accepts props with some values inside it
  //and renders the component according to the value passed forward with the props
  //rendering star styling depending on the props (selected) value
  //component itself does not own any data from within
  if(props.selected === true)  { //props.selected comes from <Star selected={true}/>
    return <span style={{color: "red"}}>★</span>;
  }
  else {
    return <span style={{color: "gray"}}>★</span>;
  }
}