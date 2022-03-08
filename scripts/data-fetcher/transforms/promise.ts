import { RawPromise } from '../extracts/promise';
import { RawPromiseTimeline } from '../extracts/timeline';
import {
  PromiseTopic,
  PromiseStatus,
  TrackingPromise,
  PromiseTimeline,
} from '~/models/promise';

export function transformToTrackingPromises(
  rawPromises: RawPromise[],
  rawTimelines: RawPromiseTimeline[]
): TrackingPromise[] {
  return rawPromises.map((r) => {
    try {
      const topic = mapTopic(r.topic);
      const status = mapStatus(r.status);

      const timelines = (
        rawTimelines.find((tl) => tl.promiseId === r.promiseId)?.timelines || []
      ).map((tl): PromiseTimeline => {
        const { from, to } = convertRangeToFromTo(tl.range);
        return {
          label: tl.name,
          from,
          to,
        };
      });

      return {
        id: r.promiseId,
        isActive: false,
        party: r.party,
        title: r.promiseTitle,
        topic,
        status,
        description: r.explain,
        isNCPO: r.isNCPO,
        imageFileName: r.refPicture,
        links: r.links,
        timelines,
      };
    } catch (e) {
      (e as Error).message += ` on promiseId = ${r.promiseId}`;
      throw e;
    }
  });
}

function mapTopic(value: string): PromiseTopic {
  if (Object.values(PromiseTopic).includes(value as PromiseTopic)) {
    return value as PromiseTopic;
  }
  throw new Error(`Cannot find topic to map "${value}"`);
}

const statuses = new Map<string, PromiseStatus>([
  ['nodata', PromiseStatus.NoData],
  ['proposed', PromiseStatus.Proposed],
  ['paused', PromiseStatus.Paused],
  ['working', PromiseStatus.Working],
  ['done', PromiseStatus.Done],
]);

function mapStatus(value: string): PromiseStatus {
  const status = statuses.get(value);
  if (status) {
    return status;
  }
  throw new Error(`Cannot find status to map "${value}"`);
}

function convertRangeToFromTo(value: string): {
  from: string;
  to: string | undefined;
} {
  const [from, to] = value.split('-').map((e) => e.trim());
  if (from === '' || to === '') {
    throw new Error(`Incorrect timeline "${value}"`);
  }
  return {
    from: convertDateToISOFormat(from),
    to: to ? convertDateToISOFormat(to) : undefined,
  };
}

function convertDateToISOFormat(date: string): string {
  const splited = date.split('/');
  if (splited.length === 3) {
    const [day, month, year] = splited;
    return `${year}-${month}-${day}`;
  } else if (splited.length === 2) {
    const [month, year] = splited;
    return `${year}-${month}`;
  }
  throw new Error(`Incorrect timeline "${date}"`);
}
