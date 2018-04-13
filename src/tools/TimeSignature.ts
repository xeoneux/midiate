import { Event } from "midi-player-js";

export interface TimeSignature {
  upper: number;
  lower: number;
}

export interface TimeSignatureEvent {
  [tick: number]: TimeSignature;
}

export function parseTimeSignature(value: string): TimeSignature {
  const index = value.indexOf("/");
  const upper = parseInt(value.slice(0, index));
  const lower = parseInt(value.slice(index + 1, value.length));
  return { upper, lower };
}

export function getTimeSignatureEvents(
  tracks: Event[][]
): TimeSignatureEvent[] {
  let initialExists = false;
  let timeSignatureEvents: TimeSignatureEvent[] = [];
  tracks.forEach(events =>
    events.forEach(event => {
      if (event.name === "Time Signature") {
        const timeSignatureEvent: TimeSignatureEvent = {};
        timeSignatureEvent[event.tick] = parseTimeSignature(
          event.timeSignature
        );
        timeSignatureEvents.push(timeSignatureEvent);
        if (event.tick === 0) initialExists = true;
      }
    })
  );

  if (!initialExists)
    timeSignatureEvents.unshift({ 0: { upper: 4, lower: 4 } });

  return timeSignatureEvents;
}
