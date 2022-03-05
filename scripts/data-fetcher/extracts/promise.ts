import { parse } from 'papaparse';

export interface RawLink {
  name: string;
  url: string;
}

export interface RawPromise {
  promiseId: number;
  party: string;
  topic: string;
  promiseTitle: string;
  status: string;
  explain: string;
  isNCPO: boolean;
  refPicture: string;
  picturesDrive: string;
  vdo: string | null;
  links: RawLink[];
}

export async function getRawPromises(csvUrl: string): Promise<RawPromise[]> {
  const content = await (await fetch(csvUrl)).text();
  const parsed = await parse<{ [key: string]: string }>(content, {
    header: true,
  }).data;

  const mapped = parsed.map((e): RawPromise => {
    const linkKeys = Object.keys(e).filter(
      (k) => k.startsWith('nameLink') && e[k] !== ''
    );
    const links: RawLink[] = linkKeys.map(
      (k): RawLink => ({
        name: e[k],
        url: e[`urlLink${k.replace('nameLink', '')}`],
      })
    );

    return {
      promiseId: Number(e.promiseId),
      party: e.party,
      topic: e.topic,
      promiseTitle: e.promiseTitle,
      status: e.status,
      explain: e.explain,
      isNCPO: transformBoolean(e.isNCPO),
      refPicture: e.refPicture,
      picturesDrive: e.picturesDrive,
      vdo: guardEmptiness(e.vdo),
      links,
    };
  });

  return await Promise.resolve(mapped);
}

function transformBoolean(value: string): boolean {
  if (value === 'TRUE') return true;
  return false;
}

function guardEmptiness(value: string): string | null {
  if (value === '-' || value === '') return null;
  return value;
}
