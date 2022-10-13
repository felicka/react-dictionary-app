import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        Search Results below...
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          
          return <div key={index}>
            <Meaning meaning={meaning}/>
            </div>
                   
          //meaning.definitions[0].definition;
          //meaning.definitions[0].example;
        })}
      </div>
    );
  } else {
    return null;
    //word not found
  }
}
