import { Player, Event } from "midi-player-js";

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
    timeSignatures.forEach(timeSignature => {
      const ppq = this.ppq;
      const beat = 4 * ppq / timeSignature.lower;
      const measure = beat * timeSignature.upper;
    });
  };
}

new Midiate("src/lib/fur_elise.mid").calculateMeasures();
