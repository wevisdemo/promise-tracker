import { FilterType } from '~/models/filter';
import {
  TrackingPromise,
  PromiseStatus,
  PromiseTopic,
  promiseTopicTextMap,
} from '~/models/promise';

export interface ChartData {
  status: PromiseStatus;
  count: number;
}

export interface Chart {
  label: string;
  data: ChartData[];
}

const promiseTopicOrder: PromiseTopic[] = [
  PromiseTopic.Equality,
  PromiseTopic.Security,
  PromiseTopic.Foreign,
  PromiseTopic.Administration,
  PromiseTopic.Culture,
  PromiseTopic.Economics,
  PromiseTopic.Environmental,
];

export const groupPromisesBy = (
  groupBy: FilterType,
  promises: TrackingPromise[]
): {
  max: number;
  total: number;
  charts: Chart[];
} => {
  const groupByKey = groupBy === FilterType.Party ? 'party' : 'topic';

  const groupedPromiseObject = promises.reduce<{
    [key: string]: { count: number; statuses: { [status: string]: number } };
  }>((obj, { status, ...rest }) => {
    const group = rest[groupByKey];

    if (!(group in obj)) {
      obj[group] = {
        count: 1,
        statuses: {},
      };
    } else {
      obj[group].count++;
    }

    if (!(status in obj[group].statuses)) {
      obj[group].statuses[status] = 1;
    } else {
      obj[group].statuses[status]++;
    }

    return obj;
  }, {});

  const charts: Chart[] =
    groupBy === FilterType.Party
      ? Object.entries(groupedPromiseObject)
          .map<Chart>(([label, { statuses }]) => ({
            label,
            data: Object.entries(statuses).map(([status, count]) => ({
              status: status as PromiseStatus,
              count: count as number,
            })),
          }))
          .sort(
            (a, z) =>
              groupedPromiseObject[z.label].count -
              groupedPromiseObject[a.label].count
          )
      : promiseTopicOrder.map<Chart>((topic) => ({
          label: promiseTopicTextMap.get(topic)?.short as string,
          data:
            topic in groupedPromiseObject
              ? Object.entries(groupedPromiseObject[topic].statuses).map(
                  ([status, count]) => ({
                    status: status as PromiseStatus,
                    count: count as number,
                  })
                )
              : [],
        }));

  const groupCounts = Object.values(groupedPromiseObject).map(
    ({ count }) => count
  );

  return {
    max: Math.max(...groupCounts),
    total: groupCounts.reduce((sum, count) => sum + count, 0),
    charts,
  };
};
