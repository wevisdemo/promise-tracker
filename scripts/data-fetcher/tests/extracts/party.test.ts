import { getRawParties } from '../../extracts/party';

describe('getRawParties', () => {
  let mockFetch: { text: jest.Mock<any, any> };

  beforeEach(() => {
    mockFetch = {
      text: jest.fn().mockResolvedValue(''),
    };
    global.fetch = jest.fn().mockResolvedValue(mockFetch) as jest.Mock;
  });

  const HEADER_ROW = `name,side`;

  test('should fetch remote csv from given URL', async () => {
    const CSV_URL = 'https://path/to/timeline.csv';
    await getRawParties(CSV_URL);
    expect(global.fetch).toBeCalledWith(CSV_URL);
  });

  test('should extract name and side for raw party', async () => {
    const DATA_ROW = 'ก้าวไกล,opposition';
    mockFetch.text = jest.fn().mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

    const parties = await getRawParties('http://path/to/parties.csv');

    expect(parties[0]).toEqual({
      name: 'ก้าวไกล',
      side: 'opposition',
    });
  });
});
