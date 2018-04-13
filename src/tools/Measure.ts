import { TimeSignature } from "./TimeSignature";

export interface Measure {
  to: number;
  from: number;
  ticks: number;
}

export function getMeasures(
  ppq: number,
  lastTick: number,
  signatures: TimeSignature[]
): Measure[] {
  const measures: Measure[] = [];

  signatures.forEach((signature, index) => {
    const beat = 4 * ppq / signature.lower;
    const measure = beat * signature.upper;

    let nextChangeTick: number;
    const isLastSignature = index + 1 === signatures.length;
    if (isLastSignature) nextChangeTick = lastTick;
    else nextChangeTick = signatures[index + 1].tick;

    const totalMeasures = nextChangeTick / measure;
    const perfectMeasures = Math.floor(totalMeasures);

    for (let index = 0; index < perfectMeasures; index++) {
      const ticks = measure;
      const from = index * measure;
      const to = (index + 1) * measure;
      measures.push({ to, from, ticks });
    }

    if (perfectMeasures !== totalMeasures) {
      measures.push({
        to: nextChangeTick,
        from: measure * perfectMeasures,
        ticks: nextChangeTick - measure * perfectMeasures
      });
    }
  });

  return measures;
}
