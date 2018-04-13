import { Event } from "midi-player-js";

export interface TimeSignature {
  tick: number;
  upper: number;
  lower: number;
}

export function parseTimeSignature(value: string) {
  const index = value.indexOf("/");
  const upper = parseInt(value.slice(0, index));
  const lower = parseInt(value.slice(index + 1, value.length));
  return { upper, lower };
}

export function getTimeSignatures(tracks: Event[][]): TimeSignature[] {
  let initialExists = false;
  let timeSignatures: TimeSignature[] = [];

  tracks.forEach(events =>
    events.forEach(event => {
      if (event.name === "Time Signature") {
        const { upper, lower } = parseTimeSignature(event.timeSignature);
        timeSignatures.push({ upper, lower, tick: event.tick });
        if (event.tick === 0) initialExists = true;
      }
    })
  );

  if (!initialExists)
    timeSignatures.unshift({
      tick: 0,
      upper: 4,
      lower: 4
    });

  return timeSignatures;
}
