import { parse } from 'papaparse';
import fetch from 'node-fetch';

export interface RawParty {
  name: string;
  side: string;
}

export async function getRawParties(csvUrl: string): Promise<RawParty[]> {
  const content = await (await fetch(csvUrl)).text();
  const parsed = await parse<{ [key: string]: string }>(content, {
    header: true,
  }).data;

  const mapped = parsed.map((e): RawParty => {
    return {
      name: e.name,
      side: e.side,
    };
  });

  return mapped;
}
