import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  console.log(props.results);

  if (props.results && Array.isArray(props.results.meanings)) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning, index) => (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
