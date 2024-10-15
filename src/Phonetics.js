import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="audio-player"
      />
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
