import { TimeSignature } from "./TimeSignature";

export interface Measure {
  to: number;
  from: number;
  beat: number;
  ticks: number;
}

export function getMeasures(
  ppq: number,
  lastTick: number,
  signatures: TimeSignature[]
): Measure[] {
  const measures: Measure[] = [];

  signatures.forEach((signature, index) => {
    const beat = ppq * 4 / signature.lower;
    const measure = beat * signature.upper;

    const isLastSignature = index + 1 === signatures.length;
    const nextChangeTick = !isLastSignature
      ? signatures[index + 1].tick
      : lastTick;

    const totalMeasures = nextChangeTick / measure;
    const perfectMeasures = Math.floor(totalMeasures);

    for (let index = 0; index < perfectMeasures; index++) {
      const to = (index + 1) * measure;
      const from = index * measure;
      const ticks = measure;

      measures.push({ to, from, beat, ticks });
    }

    if (perfectMeasures !== totalMeasures) {
      measures.push({
        beat,
        to: nextChangeTick,
        from: measure * perfectMeasures,
        ticks: nextChangeTick - measure * perfectMeasures
      });
    }
  });

  return measures;
}
