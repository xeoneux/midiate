import { Event, Player } from "midi-player-js";

import { getMeasures, Measure } from "../tools/Measure";
import { getTimeSignatures } from "../tools/TimeSignature";

const player = new Player();

export class Midiate {
  public ppq: number;
  public tracks: Event[][];

  constructor(location: string) {
    player.loadFile(location);
    this.ppq = player.division;

    const tracks: any = player.getEvents();
    this.tracks = tracks;
  }

  public calculateMeasures = (): Measure[] => {
    player.getTotalTicks();
    const timeSignatures = getTimeSignatures(this.tracks);
    return getMeasures(this.ppq, player.totalTicks, timeSignatures);
  };
}
