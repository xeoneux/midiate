import { Event } from "midi-player-js";

import { Measure } from "./Measure";

export type NoteType = "on" | "off";
export type NoteState = "running" | "complete";

export interface Note {
  to: number;
  from: number;
  value: number;
  track: number;
  pre: NoteState;
  post: NoteState;
  velocity: number;
}

export interface NoteEvent {
  tick: number;
  value: number;
  track: number;
  type: NoteType;
  velocity: number;
}

export function getNoteEventTracks(tracks: Event[][]): NoteEvent[][] {
  const noteEventTracks: NoteEvent[][] = [];

  tracks.forEach((track, index) => {
    const noteEvents: NoteEvent[] = [];
    track.forEach(event => {
      if (event.name === "Note on" && event.velocity !== 0) {
        if (event.noteNumber)
          noteEvents.push({
            type: "on",
            track: index,
            tick: event.tick,
            value: event.noteNumber,
            velocity: event.velocity || 127
          });
      }

      if (event.name === "Note off" || event.velocity === 0) {
        if (event.noteNumber)
          noteEvents.push({
            type: "off",
            track: index,
            tick: event.tick,
            value: event.noteNumber,
            velocity: event.velocity || 0
          });
      }
    });
    noteEventTracks.push(noteEvents);
  });

  return noteEventTracks;
}

export function generateNotesForMeasures(
  measures: Measure[],
  noteEventTracks: NoteEvent[][]
): Note[][] {
  const noteTracks: Note[][] = [];
  noteEventTracks.forEach(track => {
    const notes: Note[] = [];
    let currentMeasure = 0;
    const runningNotes: NoteEvent[] = [];
    track.forEach(noteEvent => {
      const noteMeasure = getMeasureForNoteEvent(noteEvent, measures);
      if (noteMeasure.index === currentMeasure) {
        pairMatchedNotes();
      } else {
        currentMeasure++;
        completeUnmatchedNotes();
        pairMatchedNotes();
      }

      function pairMatchedNotes() {
        if (noteEvent.type === "on") runningNotes.push(noteEvent);
        if (noteEvent.type === "off") {
          for (let noteMatch of runningNotes) {
            if (noteMatch.value === noteEvent.value) {
              notes.push({
                pre: "complete",
                post: "complete",
                to: noteEvent.tick,
                from: noteMatch.tick,
                value: noteEvent.value,
                track: noteEvent.track,
                velocity: noteMatch.velocity
              });
              runningNotes.splice(runningNotes.indexOf(noteMatch), 1);
            }
          }
        }
      }

      function completeUnmatchedNotes() {
        if (runningNotes.length) {
          console.log(runningNotes.length);
          runningNotes.forEach(runningNote => {});
        }
      }
    });

    noteTracks.push(notes);
  });
  return noteTracks;
}

export function getMeasureForNoteEvent(
  noteEvent: NoteEvent,
  measures: Measure[]
): Measure {
  for (let measure of measures) {
    if (noteEvent.tick <= measure.to && noteEvent.tick >= measure.from)
      return measure;
  }
  throw new Error("Not in provided measures");
}
