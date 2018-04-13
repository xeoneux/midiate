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
  const lower = parseInt(value.slice(index, value.length));
  return { upper, lower };
}
