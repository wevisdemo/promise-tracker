import {
  TrackingPromise,
  PromiseTopic,
  PromiseStatus,
  promiseTopicTextMap,
} from '@/models/promise';
import {
  groupPromisesBy,
  Chart,
} from '@/components/explore/promise-overview/promises-aggregator';
import { FilterType } from '~/models/filter';

const promises: Partial<TrackingPromise>[] = [
  {
    party: 'พลังไทยรักไทย',
    topic: PromiseTopic.Economics,
    status: PromiseStatus.Done,
  },
  {
    party: 'พลังไทยรักไทย',
    topic: PromiseTopic.Environmental,
    status: PromiseStatus.Done,
  },
  {
    party: 'เพื่อไทย',
    topic: PromiseTopic.Culture,
    status: PromiseStatus.Done,
  },
  {
    party: 'อนาคตใหม่',
    topic: PromiseTopic.Economics,
    status: PromiseStatus.NoData,
  },
  {
    party: 'อนาคตใหม่',
    topic: PromiseTopic.Environmental,
    status: PromiseStatus.Paused,
  },
  {
    party: 'ประชาธิปัติ',
    topic: PromiseTopic.Culture,
    status: PromiseStatus.Working,
  },
  {
    party: 'พลังประชารัฐ',
    topic: PromiseTopic.Equality,
    status: PromiseStatus.Proposed,
  },
  {
    party: 'ชาติไทยพัฒนา',
    topic: PromiseTopic.Security,
    status: PromiseStatus.NoData,
  },
];

test('should be able to group by party', () => {
  const { max, total, charts } = groupPromisesBy(
    FilterType.Party,
    promises as TrackingPromise[]
  );

  const expectedCharts: Chart[] = [
    {
      label: 'พลังไทยรักไทย',
      data: [{ status: PromiseStatus.Done, count: 2 }],
    },
    {
      label: 'อนาคตใหม่',
      data: [
        { status: PromiseStatus.NoData, count: 1 },
        { status: PromiseStatus.Paused, count: 1 },
      ],
    },
    {
      label: 'เพื่อไทย',
      data: [{ status: PromiseStatus.Done, count: 1 }],
    },
    {
      label: 'ประชาธิปัติ',
      data: [{ status: PromiseStatus.Working, count: 1 }],
    },
    {
      label: 'พลังประชารัฐ',
      data: [{ status: PromiseStatus.Proposed, count: 1 }],
    },
    {
      label: 'ชาติไทยพัฒนา',
      data: [{ status: PromiseStatus.NoData, count: 1 }],
    },
  ];

  expect(max).toBe(2);
  expect(total).toBe(8);
  expect(charts.length).toBe(expectedCharts.length);
  expect(charts).toEqual(expectedCharts);
});

test.skip('should be able to group by topic', () => {
  const { max, total, charts } = groupPromisesBy(
    FilterType.Topic,
    promises as TrackingPromise[]
  );

  const expectedCharts: Chart[] = [
    {
      label: promiseTopicTextMap.get(PromiseTopic.Equality)?.short as string,
      data: [{ status: PromiseStatus.Proposed, count: 1 }],
    },
    {
      label: promiseTopicTextMap.get(PromiseTopic.Security)?.short as string,
      data: [{ status: PromiseStatus.NoData, count: 1 }],
    },
    {
      label: promiseTopicTextMap.get(PromiseTopic.Foreign)?.short as string,
      data: [],
    },
    {
      label: promiseTopicTextMap.get(PromiseTopic.Administration)
        ?.short as string,
      data: [],
    },
    {
      label: promiseTopicTextMap.get(PromiseTopic.Culture)?.short as string,
      data: [
        { status: PromiseStatus.Working, count: 1 },
        { status: PromiseStatus.Done, count: 1 },
      ],
    },
    {
      label: promiseTopicTextMap.get(PromiseTopic.Economics)?.short as string,
      data: [
        { status: PromiseStatus.NoData, count: 1 },
        { status: PromiseStatus.Done, count: 1 },
      ],
    },
    {
      label: promiseTopicTextMap.get(PromiseTopic.Environmental)
        ?.short as string,
      data: [
        { status: PromiseStatus.Paused, count: 1 },
        { status: PromiseStatus.Done, count: 1 },
      ],
    },
  ];

  expect(max).toBe(2);
  expect(total).toBe(8);
  expect(charts.length).toBe(expectedCharts.length);
  expect(charts).toEqual(expect.arrayContaining(expectedCharts));
});
