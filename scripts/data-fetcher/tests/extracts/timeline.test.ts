import { getRawPromiseTimelines } from '../../extracts/timeline';

describe('getRawPromiseTimelines', () => {
  let mockFetch: { text: jest.Mock<any, any> };

  beforeEach(() => {
    mockFetch = {
      text: jest.fn().mockResolvedValue(''),
    };
    global.fetch = jest.fn().mockResolvedValue(mockFetch) as jest.Mock;
  });

  const HEADER_ROW = `promiseId,name1,timeline1,name2,timeline2`;

  test('should fetch remote csv from given URL', async () => {
    const CSV_URL = 'https://path/to/timeline.csv';
    await getRawPromiseTimelines(CSV_URL);
    expect(global.fetch).toBeCalledWith(CSV_URL);
  });

  test('should extract promiseId as number', async () => {
    const DATA_ROW = '10,,,,';
    mockFetch.text = jest.fn().mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

    const timelines = await getRawPromiseTimelines(
      'http://path/to/timelines.csv'
    );

    expect(timelines[0].promiseId).toBe(10);
  });

  describe('extract timelines', () => {
    test('single timeline', async () => {
      const DATA_ROW = '0,name1,range1,,';
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

      const timelines = await getRawPromiseTimelines(
        'http://path/to/timelines.csv'
      );

      expect(timelines[0].timelines).toEqual([
        {
          name: 'name1',
          range: 'range1',
        },
      ]);
    });

    test('2 timelines', async () => {
      const DATA_ROW = '0,name1,range1,name2,range2';
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

      const timelines = await getRawPromiseTimelines(
        'http://path/to/timelines.csv'
      );

      expect(timelines[0].timelines).toEqual([
        {
          name: 'name1',
          range: 'range1',
        },
        {
          name: 'name2',
          range: 'range2',
        },
      ]);
    });

    test('be able to handle dynamic number of timelines according to headers', async () => {
      const HEADER_ROW_WITH_4_TIMELINES = `promiseId,name1,timeline1,name2,timeline2,name3,timeline3,name4,timeline4`;
      const DATA_ROW = '0,name1,range1,name2,range2,name3,range3,name4,range4';
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW_WITH_4_TIMELINES}\n${DATA_ROW}`);

      const timelines = await getRawPromiseTimelines(
        'http://path/to/timelines.csv'
      );

      expect(timelines[0].timelines).toEqual([
        {
          name: 'name1',
          range: 'range1',
        },
        {
          name: 'name2',
          range: 'range2',
        },
        {
          name: 'name3',
          range: 'range3',
        },
        {
          name: 'name4',
          range: 'range4',
        },
      ]);
    });
  });
});
