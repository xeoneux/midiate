import { Event } from "midi-player-js";

export type NoteType = "on" | "off";
export type NoteState = "running" | "complete";

export interface Note {
  to: number;
  from: number;
  note: number;
  track: number;
  pre: NoteState;
  post: NoteState;
  velocity: number;
}

export interface NoteEvent {
  note: number;
  tick: number;
  track: number;
  type: NoteType;
  velocity: number;
}

export function flattenEvents(tracks: Event[][]): NoteEvent[] {
  let noteEvents: NoteEvent[] = [];

  tracks.forEach((track, index) => {
    track.forEach(event => {
      if (event.name === "Note on" && event.velocity !== 0) {
        if (event.noteNumber)
          noteEvents.push({
            type: "on",
            track: index,
            tick: event.tick,
            note: event.noteNumber,
            velocity: event.velocity || 127
          });
      }

      if (event.name === "Note off" || event.velocity === 0) {
        if (event.noteNumber)
          noteEvents.push({
            type: "off",
            track: index,
            tick: event.tick,
            note: event.noteNumber,
            velocity: event.velocity || 0
          });
      }
    });
  });

  return noteEvents;
}
