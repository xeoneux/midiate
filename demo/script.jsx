import React from "react";
import ReactDOM from "react-dom";
import Dropzone from "react-dropzone";

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
  constructor(props) {
    super(props);
    this.state = {
      measures: [],
      keyboardType: KeyboardTypes.$88
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        const midiate = new Midiate(arrayBuffer);
        this.setState({ measures: midiate.calculateMeasures() });
      };
      reader.onerror = () => console.log("file reading has failed");
      reader.onabort = () => console.log("file reading was aborted");

      reader.readAsArrayBuffer(file);
    });
  }

  render() {
    return (
      <Dropzone className="app" onDrop={this.onDrop} disableClick={true}>
        <Piano keyboard={generateKeyboard(this.state.keyboardType)} />
        <Rain measures={this.state.measures} />
      </Dropzone>
    );
  }
}

class Piano extends React.PureComponent {
  render() {
    return (
      <div className="piano">
        {this.props.keyboard.pianoKeys.map((pianoKey, keyIndex) => {
          const keyWidth = 100 / this.props.keyboard.whiteKeys.length;

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

class Rain extends React.Component {
  render() {
    return (
      <div className="rain">
        {this.props.measures
          ? this.props.measures.map((measure, index) => (
              <div
                key={index}
                className="slide"
                style={{ backgroundColor: "#606060" }}
              >
                Measure
              </div>
            ))
          : null}
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
