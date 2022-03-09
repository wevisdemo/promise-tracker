import { FilterType } from '~/models/filter';
import {
  TrackingPromise,
  PromiseStatus,
  PromiseTopic,
  promiseTopicTextMap,
  promiseStatusTextMap,
} from '~/models/promise';

export interface ChartData {
  status: PromiseStatus;
  count: number;
}

export interface Chart {
  label: string;
  icon?: string;
  data: ChartData[];
}

interface StatusPair {
  [status: string]: number;
}

const promiseStatusOrder: PromiseStatus[] = [
  PromiseStatus.NoData,
  PromiseStatus.Proposed,
  PromiseStatus.Paused,
  PromiseStatus.Working,
  PromiseStatus.Done,
];

const promiseTopicOrder: PromiseTopic[] = [
  PromiseTopic.Equality,
  PromiseTopic.Security,
  PromiseTopic.Foreign,
  PromiseTopic.Administration,
  PromiseTopic.Culture,
  PromiseTopic.Economics,
  PromiseTopic.Environmental,
];

const parseChartDataFromStatusPair = (statuses: StatusPair): ChartData[] =>
  statuses
    ? promiseStatusOrder.reduce<ChartData[]>(
        (list, status) =>
          status in statuses
            ? [...list, { status, count: statuses[status] }]
            : list,
        []
      )
    : [];

export const groupPromisesBy = (
  groupBy: FilterType.Party | FilterType.Status | FilterType.Topic,
  promises: TrackingPromise[],
  maxGroup = 7
): {
  max: number;
  total: number;
  charts: Chart[];
} => {
  const groupedPromiseObject = promises.reduce<{
    [key: string]: { count: number; statuses: StatusPair };
  }>((obj, promise) => {
    const group = promise[groupBy];

    if (!(group in obj)) {
      obj[group] = {
        count: 1,
        statuses: {},
      };
    } else {
      obj[group].count++;
    }

    if (!(promise.status in obj[group].statuses)) {
      obj[group].statuses[promise.status] = 1;
    } else {
      obj[group].statuses[promise.status]++;
    }

    return obj;
  }, {});

  let charts: Chart[] =
    groupBy === FilterType.Party
      ? Object.entries(groupedPromiseObject)
          .map<Chart>(([label, { statuses }]) => ({
            label,
            icon: `party/${label}.jpg`,
            data: parseChartDataFromStatusPair(statuses),
          }))
          .sort(
            (a, z) =>
              groupedPromiseObject[z.label].count -
              groupedPromiseObject[a.label].count
          )
      : groupBy === FilterType.Topic
      ? promiseTopicOrder.map<Chart>((key) => ({
          label: promiseTopicTextMap.get(key)?.short as string,
          icon: `topic/${key}_small.png`,
          data: parseChartDataFromStatusPair(
            groupedPromiseObject[key]?.statuses
          ),
        }))
      : promiseStatusOrder.map<Chart>((key) => ({
          label: promiseStatusTextMap.get(key) as string,
          icon: `status/${key}_small.png`,
          data: parseChartDataFromStatusPair(
            groupedPromiseObject[key]?.statuses
          ),
        }));

  if (charts.length > maxGroup) {
    const otherParties = charts.slice(maxGroup);

    charts = [
      ...charts.slice(0, maxGroup),
      {
        label: 'อื่นๆ',
        icon: `other-group.png`,
        data: promiseStatusOrder
          .map<ChartData>((status) => ({
            status,
            count: otherParties.reduce(
              (sum, { data }) =>
                sum + (data.find((d) => d.status === status)?.count || 0),
              0
            ),
          }))
          .filter(({ count }) => count > 0),
      },
    ];
  }

  const groupCounts = Object.values(groupedPromiseObject).map(
    ({ count }) => count
  );

  return {
    max: Math.max(...groupCounts),
    total: groupCounts.reduce((sum, count) => sum + count, 0),
    charts,
  };
};
