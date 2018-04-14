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
  measure: Measure;
}

export interface NoteEvent {
  tick: number;
  value: number;
  track: number;
  type: NoteType;
  velocity: number;
  measure: Measure;
}

export function getNoteEventTracks(
  tracks: Event[][],
  measures: Measure[]
): NoteEvent[][] {
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
            velocity: event.velocity || 127,
            measure: getMeasureForNoteEvent(event.tick, measures)
          });
      }

      if (event.name === "Note off" || event.velocity === 0) {
        if (event.noteNumber)
          noteEvents.push({
            type: "off",
            track: index,
            tick: event.tick,
            value: event.noteNumber,
            velocity: event.velocity || 0,
            measure: getMeasureForNoteEvent(event.tick, measures)
          });
      }
    });
    noteEventTracks.push(noteEvents);
  });

  return noteEventTracks;
}

export function generateNotesForMeasures(
  noteEventTracks: NoteEvent[][]
): Note[][] {
  const noteTracks: Note[][] = [];
  noteEventTracks.forEach(track => {
    const notes: Note[] = [];
    let currentMeasure = 0;
    const runningNotes: NoteEvent[] = [];

    track.forEach(noteEvent => {
      if (currentMeasure === noteEvent.measure.index) {
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
                post: "complete",
                to: noteEvent.tick,
                from: noteMatch.tick,
                value: noteEvent.value,
                track: noteMatch.track,
                measure: noteEvent.measure,
                velocity: noteMatch.velocity,
                pre:
                  noteMatch.measure.index !== currentMeasure
                    ? "running"
                    : "complete"
              });
              runningNotes.splice(runningNotes.indexOf(noteMatch), 1);
            }
          }
        }
      }

      function completeUnmatchedNotes() {
        if (runningNotes.length) {
          runningNotes.forEach(runningNote => {
            if (runningNote.type === "on")
              notes.push({
                post: "running",
                from: runningNote.tick,
                track: runningNote.track,
                value: runningNote.value,
                to: runningNote.measure.to,
                measure: runningNote.measure,
                velocity: runningNote.velocity,
                pre:
                  currentMeasure === runningNote.measure.index
                    ? "complete"
                    : "running"
              });
          });
        }
      }
    });

    noteTracks.push(notes);
  });
  return noteTracks;
}

export function getMeasureForNoteEvent(
  noteTick: number,
  measures: Measure[]
): Measure {
  for (let measure of measures) {
    if (noteTick <= measure.to && noteTick >= measure.from) return measure;
  }
  throw new Error("Not in provided measures");
}
