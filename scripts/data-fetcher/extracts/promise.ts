import { parse } from 'papaparse';
import fetch from 'node-fetch';
import { guardEmptiness, transformBoolean } from './helpers';

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

const NAME_LINK_PREFIX = 'nameLink';

export async function getRawPromises(csvUrl: string): Promise<RawPromise[]> {
  const content = await (await fetch(csvUrl)).text();
  const parsed = await parse<{ [key: string]: string }>(content, {
    header: true,
  }).data;

  const mapped = parsed.map((e): RawPromise => {
    const linkKeys = Object.keys(e).filter(
      (key: string) => key.startsWith(NAME_LINK_PREFIX) && e[key] !== ''
    );
    const links: RawLink[] = linkKeys.map(createRawLink(e));

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

  return mapped;
}

function createRawLink(data: {
  [key: string]: string;
}): (key: string) => RawLink {
  return (key: string): RawLink => ({
    name: data[key],
    url: data[`urlLink${key.replace(NAME_LINK_PREFIX, '')}`],
  });
}
