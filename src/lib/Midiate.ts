import { Player } from "midi-player-js";

import { getMeasures, Measure } from "../tools/Measure";
import { getTimeSignatures } from "../tools/TimeSignature";

const player = new Player();

export class Midiate {
  constructor(arrayBuffer: ArrayBuffer) {
    player.loadArrayBuffer(arrayBuffer);
  }

  public calculateMeasures = (): Measure[] => {
    player.getTotalTicks();
    const timeSignatures = getTimeSignatures(player.getEvents());
    return getMeasures(player.division, player.totalTicks, timeSignatures);
  };
}
