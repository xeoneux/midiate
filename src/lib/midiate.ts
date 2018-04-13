import { Player, Event } from "midi-player-js";

import { getMeasures } from "../tools/Measure";
import { getTimeSignatures } from "../tools/TimeSignature";

const player = new Player();

export class Midiate {
  ppq: number;
  tracks: Event[][];

  constructor(location: string) {
    player.loadFile(location);
    this.ppq = player.division;

    const tracks: any = player.getEvents();
    this.tracks = tracks;
  }

  calculateMeasures = () => {
    player.getTotalTicks();
    const timeSignatures = getTimeSignatures(this.tracks);
    const measures = getMeasures(this.ppq, player.totalTicks, timeSignatures);
  };
}
