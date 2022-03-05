import { transformToTrackingPromises } from '../../transforms/promise';
import { RawLink, RawPromise } from '../../extracts/promise';
import { RawPromiseTimeline } from '../../extracts/timeline';
import { PromiseStatus, PromiseTopic } from '~/models/promise';

describe('transformToTrackingPromises', () => {
  test('should transform directly mapped fields', () => {
    const raw = rawPromiseStub({
      promiseId: 1,
      party: 'mock_party',
      explain: 'mock_description',
      isNCPO: true,
      refPicture: 'mock_fileName',
    });
    const promises = transformToTrackingPromises([raw], []);
    expect(promises[0]).toEqual(
      expect.objectContaining({
        id: raw.promiseId,
        party: raw.party,
        description: raw.explain,
        isNCPO: raw.isNCPO,
        imageFileName: raw.refPicture,
      })
    );
  });

  describe('map topic', () => {
    test.each([
      {
        topic: 'บริหารจัดการ(ราชการ)',
        category: 'administration',
        expected: PromiseTopic.Administration,
      },
      {
        topic: 'ศาสนาและวัฒนธรรม',
        category: 'culture',
        expected: PromiseTopic.Culture,
      },
      {
        topic: 'เศรษฐกิจ',
        category: 'economics',
        expected: PromiseTopic.Economics,
      },
      {
        topic: 'สิ่งแวดล้อม',
        category: 'environmental',
        expected: PromiseTopic.Environmental,
      },
      {
        topic: 'ความเท่าเทียม/คุณภาพชีวิต',
        category: 'equality',
        expected: PromiseTopic.Equality,
      },
      {
        topic: 'ความมั่นคง/ปกป้องสถาบันกษัตริย์',
        category: 'security',
        expected: PromiseTopic.Foreign,
      },
      {
        topic: 'ต่างประเทศ',
        category: 'foreign',
        expected: PromiseTopic.Security,
      },
    ])('from $topic to $category', ({ topic, expected }) => {
      const rawPromises = [rawPromiseStub({ topic })];

      const promises = transformToTrackingPromises(rawPromises, []);

      expect(promises[0].category).toBe(expected);
    });

    test('should throw error when cannot find correct topic', () => {
      const RAW_INCORRECT_TOPIC = 'INCORRECT_TOPIC';
      const PROMISE_ID = 10;
      const rawPromises = [
        rawPromiseStub({ promiseId: PROMISE_ID, topic: RAW_INCORRECT_TOPIC }),
      ];

      expect(() => transformToTrackingPromises(rawPromises, [])).toThrowError(
        `Cannot find topic to map "${RAW_INCORRECT_TOPIC}" on promiseId = ${PROMISE_ID}`
      );
    });
  });

  describe('map status', () => {
    test.each([
      { status: 'nodata', expected: PromiseStatus.NoData },
      { status: 'proposed', expected: PromiseStatus.Proposed },
      { status: 'paused', expected: PromiseStatus.Paused },
      { status: 'working', expected: PromiseStatus.Working },
      { status: 'done', expected: PromiseStatus.Done },
    ])('from string $status', ({ status, expected }) => {
      const rawPromises = [rawPromiseStub({ status })];

      const promises = transformToTrackingPromises(rawPromises, []);

      expect(promises[0].status).toBe(expected);
    });

    test('should throw error when cannot find correct status', () => {
      const RAW_INCORRECT_STATUS = 'INCORRECT_STATUS';
      const PROMISE_ID = 10;
      const rawPromises = [
        rawPromiseStub({ promiseId: PROMISE_ID, status: RAW_INCORRECT_STATUS }),
      ];

      expect(() => transformToTrackingPromises(rawPromises, [])).toThrowError(
        `Cannot find status to map "${RAW_INCORRECT_STATUS}" on promiseId = ${PROMISE_ID}`
      );
    });
  });

  test('should directly transform raw links to tracking promise links', () => {
    const rawLinks: RawLink[] = [
      { name: 'name1', url: 'url1' },
      { name: 'name2', url: 'url2' },
    ];
    const rawPromises = [rawPromiseStub({ links: rawLinks })];

    const promises = transformToTrackingPromises(rawPromises, []);

    expect(promises[0].links).toEqual([
      { name: 'name1', url: 'url1' },
      { name: 'name2', url: 'url2' },
    ]);
  });

  describe('find and map timelines', () => {
    test('find correct timelines from raw promise timelines', () => {
      const TIMELINE_NAME = 'name1';
      const PROMISE_ID = 2;
      const rawPromiseTimelines: RawPromiseTimeline[] = [
        {
          promiseId: 1,
          timelines: [{ name: 'not_this_timeline', range: '01/01/2022' }],
        },
        {
          promiseId: PROMISE_ID,
          timelines: [{ name: TIMELINE_NAME, range: '01/01/2022' }],
        },
      ];

      const promises = transformToTrackingPromises(
        [rawPromiseStub({ promiseId: PROMISE_ID })],
        rawPromiseTimelines
      );

      expect(promises[0].timelines.length).toBe(1);
      expect(promises[0].timelines[0].label).toBe(TIMELINE_NAME);
    });

    test('set timelines as empty when cannot match raw promise timelines', () => {
      const RAW_PROMISE_TIMELINE_ID = 9;
      const RAW_TIMELINE_ID = 11;

      const rawPromiseTimelines: RawPromiseTimeline[] = [
        {
          promiseId: RAW_PROMISE_TIMELINE_ID,
          timelines: [{ name: '', range: '01/01/2022' }],
        },
      ];

      const promises = transformToTrackingPromises(
        [rawPromiseStub({ promiseId: RAW_TIMELINE_ID })],
        rawPromiseTimelines
      );

      expect(promises[0].timelines.length).toBe(0);
    });

    describe('map range', () => {
      test.each([
        {
          name: 'has from date but no to date',
          range: '15/01/2022',
          expectedFrom: '2022-01-15',
          expectedTo: undefined,
        },
        {
          name: 'has from date without day',
          range: '01/2022',
          expectedFrom: '2022-01',
          expectedTo: undefined,
        },
        {
          name: 'has both from and to date',
          range: '15/01/2022 - 20/02/2022',
          expectedFrom: '2022-01-15',
          expectedTo: '2022-02-20',
        },
        {
          name: 'has both from and to date, to date without day',
          range: '15/01/2022 - 02/2022',
          expectedFrom: '2022-01-15',
          expectedTo: '2022-02',
        },
      ])('$name', ({ range, expectedFrom, expectedTo }) => {
        const rawPromises = [rawPromiseStub({ promiseId: 1 })];
        const rawPromiseTimelines = rawPromiseTimelineStubWithRange(range);

        const promises = transformToTrackingPromises(
          rawPromises,
          rawPromiseTimelines
        );

        expect(promises[0].timelines[0].from).toBe(expectedFrom);
        expect(promises[0].timelines[0].to).toBe(expectedTo);
      });

      test.each([
        ['1/15/01/2022'],
        ['2022'],
        ['15/01/2022 -'],
        ['- 15/02/2022'],
      ])('should throw error with incorrect range: %s', (range) => {
        const PROMISE_ID = 1;
        const rawPromises = [rawPromiseStub({ promiseId: PROMISE_ID })];
        const rawPromiseTimelines = rawPromiseTimelineStubWithRange(range);

        expect(() =>
          transformToTrackingPromises(rawPromises, rawPromiseTimelines)
        ).toThrowError(
          `Incorrect timeline "${range}" on promiseId = ${PROMISE_ID}`
        );
      });

      function rawPromiseTimelineStubWithRange(
        range: string
      ): RawPromiseTimeline[] {
        return [{ promiseId: 1, timelines: [{ name: 'name1', range }] }];
      }
    });
  });

  function rawPromiseStub(edit: Partial<RawPromise>): RawPromise {
    return Object.assign(
      {
        promiseId: 0,
        party: '',
        topic: 'บริหารจัดการ(ราชการ)',
        promiseTitle: '',
        status: 'nodata',
        explain: '',
        isNCPO: true,
        refPicture: '',
        picturesDrive: '',
        vdo: null,
        links: [],
      },
      edit
    );
  }
});
