import { Player, Event } from "midi-player-js";

import { getTimeSignatureEvents } from "../tools/TimeSignature";

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
    getTimeSignatureEvents(this.tracks);
  };
}
