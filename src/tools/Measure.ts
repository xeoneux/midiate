import { TimeSignature } from "./TimeSignature";

export interface Measure {
  to: number;
  from: number;
  beat: number;
  ticks: number;
  index: number;
}

export function getMeasures(
  ppq: number,
  lastTick: number,
  signatures: TimeSignature[]
): Measure[] {
  const measures: Measure[] = [];

  signatures.forEach((sig, idx) => {
    const beat = ppq * 4 / sig.lower;
    const measure = beat * sig.upper;

    const isLastSignature = idx + 1 === signatures.length;
    const nextChangeTick = !isLastSignature
      ? signatures[idx + 1].tick
      : lastTick;

    const totalMeasures = nextChangeTick / measure;
    const perfectMeasures = Math.floor(totalMeasures);

    for (let index = 0; index < perfectMeasures; index++) {
      const to = (index + 1) * measure - 1;
      const from = index * measure;
      const ticks = to - from + 1;

      measures.push({ to, from, beat, ticks, index });
    }

    measures.push({
      beat,
      to: nextChangeTick,
      from: measure * perfectMeasures,
      ticks: nextChangeTick - measure * perfectMeasures + 1,
      index:
        perfectMeasures !== totalMeasures
          ? perfectMeasures + 1
          : perfectMeasures
    });
  });

  return measures;
}
