import { Player } from "midi-player-js";

import { getMeasures, Measure } from "../tools/Measure";
import { getTimeSignatures } from "../tools/TimeSignature";
import {
  Note,
  getNoteEventTracks,
  generateNotesForMeasures
} from "../tools/Notes";

const player = new Player();

export class Midiate {
  constructor(data: ArrayBuffer | string) {
    if (typeof data === "string") player.loadDataUri(data);
    if (typeof data === "object") player.loadArrayBuffer(data);
  }

  public calculateMeasures = (): Measure[] => {
    const timeSignatures = getTimeSignatures(player.getEvents());
    return getMeasures(player.division, player.totalTicks, timeSignatures);
  };

  public calculateNotes = (measures: Measure[]): Note[][] => {
    const noteEventTracks = getNoteEventTracks(player.getEvents(), measures);
    return generateNotesForMeasures(noteEventTracks);
  };
}
