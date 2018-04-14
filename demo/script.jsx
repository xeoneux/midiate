import React from "react";
import ReactDOM from "react-dom";

import { Midiate } from "../build";

const KeyboardTypes = {
  $49: { startKey: 36, endKey: 84 },
  $54: { startKey: 36, endKey: 89 },
  $61: { startKey: 36, endKey: 96 },
  $76: { startKey: 28, endKey: 103 },
  $88: { startKey: 21, endKey: 108 },
  $128: { startKey: 0, endKey: 127 }
};

class App extends React.Component {
  render() {
    return <Piano />;
  }
}

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = generateKeyboard(KeyboardTypes.$128);
  }

  render() {
    return (
      <div className="piano">
        {this.state.pianoKeys.map((pianoKey, keyIndex) => {
          const keyWidth = 100 / this.state.whiteKeys.length;

          let left;
          let width;
          let classNames;
          if (pianoKey.type === "white") {
            width = keyWidth;
            classNames = "key white";
            left = pianoKey.position * keyWidth;
          } else {
            width = 2 / 3 * keyWidth;
            classNames = "key black";
            left = (keyIndex - pianoKey.position - 1 / 3) * keyWidth;
          }

          return (
            <div
              key={pianoKey.note}
              className={classNames}
              style={{ left: `${left}vw`, width: `${width}vw` }}
            />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("midiate"));

function generateKeyboard({ startKey, endKey }) {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ];

  const pianoKeys = [];
  const blackKeys = [];
  const whiteKeys = [];

  for (let i = startKey; i <= endKey; i++) {
    const note = i;
    const name = notes[i % notes.length];
    const type = name.includes("#") ? "black" : "white";
    const position = type === "black" ? blackKeys.length : whiteKeys.length;

    const pianoKey = { note, name, type, position };

    pianoKeys.push(pianoKey);
    type === "black" ? blackKeys.push(pianoKey) : whiteKeys.push(pianoKey);
  }

  return { pianoKeys, blackKeys, whiteKeys };
}
