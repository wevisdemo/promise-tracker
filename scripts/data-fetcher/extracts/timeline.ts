import { parse } from 'papaparse';
import fetch from 'node-fetch';

export interface RawTimeline {
  name: string;
  range: string;
}

export interface RawPromiseTimeline {
  promiseId: number;
  timelines: RawTimeline[];
}

const NAME_PREFIX = 'name';

export async function getRawPromiseTimelines(
  csvUrl: string
): Promise<RawPromiseTimeline[]> {
  const content = await (await fetch(csvUrl)).text();
  const parsed = await parse<{ [key: string]: string }>(content, {
    header: true,
  }).data;

  const mapped = parsed.map((e): RawPromiseTimeline => {
    const linkKeys = Object.keys(e).filter(
      (key: string) => key.startsWith(NAME_PREFIX) && e[key] !== ''
    );
    const timelines: RawTimeline[] = linkKeys.map(createRawTimeline(e));

    return {
      promiseId: Number(e.promiseId),
      timelines,
    };
  });

  return mapped;
}

function createRawTimeline(data: {
  [key: string]: string;
}): (key: string) => RawTimeline {
  return (key: string): RawTimeline => ({
    name: data[key],
    range: data[`timeline${key.replace(NAME_PREFIX, '')}`],
  });
}
