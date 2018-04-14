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
      keyboard: generateKeyboard(KeyboardTypes.$88)
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        const midiate = new Midiate(arrayBuffer);
        this.setState({
          tracks: midiate.calculateNotes(),
          measures: midiate.calculateMeasures()
        });
      };
      reader.onerror = () => console.log("file reading has failed");
      reader.onabort = () => console.log("file reading was aborted");

      reader.readAsArrayBuffer(file);
    });
  }

  render() {
    return (
      <Dropzone className="app" onDrop={this.onDrop} disableClick={true}>
        <Slides
          tracks={this.state.tracks}
          measures={this.state.measures}
          keyboard={this.state.keyboard}
        />
        <Piano keyboard={this.state.keyboard} />
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

class Slides extends React.Component {
  render() {
    return (
      <div className="slides">
        {this.props.measures
          ? this.props.measures.map((measure, index) => (
              <div key={index} className="slide">
                <span className="measure">{index}</span>
                {this.props.tracks
                  ? this.props.tracks.map((track, color) =>
                      track
                        .filter(note => note.measure.index === index)
                        .map(note => {
                          const keyWidth =
                            100 / this.props.keyboard.whiteKeys.length;

                          const pianoKey = this.props.keyboard.pianoKeys.filter(
                            pianoKey => pianoKey.note === note.value
                          )[0];

                          const keyIndex = this.props.keyboard.pianoKeys.indexOf(
                            pianoKey
                          );

                          let left;
                          let width;
                          if (pianoKey.type === "white") {
                            width = keyWidth;
                            left = pianoKey.position * keyWidth;
                          } else {
                            width = 2 / 3 * keyWidth;
                            left =
                              (keyIndex - pianoKey.position - 1 / 3) * keyWidth;
                          }

                          const height =
                            (note.to - note.from + 1) /
                            note.measure.ticks *
                            100;

                          let backgroundColor;
                          if (color === 0) backgroundColor = "red";
                          if (color === 1) backgroundColor = "green";
                          if (color === 2) backgroundColor = "blue";
                          if (color === 3) backgroundColor = "yellow";

                          return (
                            <div
                              key={index}
                              className="note"
                              style={{
                                backgroundColor,
                                left: `${left}vw`,
                                width: `${width}vw`,
                                height: `${height}%`
                              }}
                            />
                          );
                        })
                    )
                  : null}
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
