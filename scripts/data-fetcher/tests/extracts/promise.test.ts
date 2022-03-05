import { getRawPromises } from '../../extracts/promise';

describe('getRawPromises', () => {
  let mockFetch: { text: jest.Mock<any, any> };

  beforeEach(() => {
    mockFetch = {
      text: jest.fn().mockResolvedValue(''),
    };
    global.fetch = jest.fn().mockResolvedValue(mockFetch) as jest.Mock;
  });

  const HEADER_ROW = `promiseId,party,topic,promiseTitle,status,explain,isNCPO,refPicture,picturesDrive,vdo,nameLink1,urlLink1,nameLink2,urlLink2,nameLink3,urlLink3,nameLink4,urlLink4`;

  test('should fetch remote csv from given URL', async () => {
    const CSV_URL = 'https://path/to/promises.csv';
    await getRawPromises(CSV_URL);
    expect(global.fetch).toBeCalledWith(CSV_URL);
  });

  test('should extract simple string properties properly', async () => {
    const DATA_ROW = `171,พลังประชารัฐ,สิ่งแวดล้อม,เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า,nodata,เพื่อให้เป็นไปตามนโยบายสีเขียว ...,FALSE,พลังประชารัฐ_13,https://drive.google.com/drive/folders/EXAMPLE,-,ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai,https://news.mthai.com/politics-news/789439.html,คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online,https://mgronline.com/business/detail/9630000126371,รถเมล์ร้อน - กรุงเทพธุรกิจ,https://www.bangkokbiznews.com/politics/981586,,`;
    mockFetch.text = jest.fn().mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

    const promises = await getRawPromises('http://path/to/promises.csv');

    expect(promises[0]).toEqual(
      expect.objectContaining({
        party: 'พลังประชารัฐ',
        topic: 'สิ่งแวดล้อม',
        promiseTitle: 'เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า',
        status: 'nodata',
        explain: 'เพื่อให้เป็นไปตามนโยบายสีเขียว ...',
        refPicture: 'พลังประชารัฐ_13',
        picturesDrive: 'https://drive.google.com/drive/folders/EXAMPLE',
      })
    );
  });

  test('should transform promiseId to number', async () => {
    const DATA_ROW = `171,พลังประชารัฐ,สิ่งแวดล้อม,เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า,nodata,เพื่อให้เป็นไปตามนโยบายสีเขียว ...,FALSE,พลังประชารัฐ_13,https://drive.google.com/drive/folders/EXAMPLE,-,ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai,https://news.mthai.com/politics-news/789439.html,คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online,https://mgronline.com/business/detail/9630000126371,รถเมล์ร้อน - กรุงเทพธุรกิจ,https://www.bangkokbiznews.com/politics/981586,,`;
    mockFetch.text = jest.fn().mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

    const promises = await getRawPromises('http://path/to/promises.csv');

    expect(promises[0].promiseId).toBe(171);
  });

  describe('extract isNCPO', () => {
    const DATA_ROW = (rawIsNCPO: string) =>
      `171,พลังประชารัฐ,สิ่งแวดล้อม,เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า,nodata,เพื่อให้เป็นไปตามนโยบายสีเขียว ...,${rawIsNCPO},พลังประชารัฐ_13,https://drive.google.com/drive/folders/EXAMPLE,-,ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai,https://news.mthai.com/politics-news/789439.html,คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online,https://mgronline.com/business/detail/9630000126371,รถเมล์ร้อน - กรุงเทพธุรกิจ,https://www.bangkokbiznews.com/politics/981586,,`;

    test('should be false', async () => {
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW('FALSE')}`);
      const promises = await getRawPromises('http://path/to/promises.csv');
      expect(promises[0].isNCPO).toBe(false);
    });

    test('should be true', async () => {
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW('TRUE')}`);
      const promises = await getRawPromises('http://path/to/promises.csv');
      expect(promises[0].isNCPO).toBe(true);
    });
  });

  describe('extract vdo', () => {
    const DATA_ROW = (rawVdo: string) =>
      `171,พลังประชารัฐ,สิ่งแวดล้อม,เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า,nodata,เพื่อให้เป็นไปตามนโยบายสีเขียว ...,FALSE,พลังประชารัฐ_13,https://drive.google.com/drive/folders/EXAMPLE,${rawVdo},ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai,https://news.mthai.com/politics-news/789439.html,คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online,https://mgronline.com/business/detail/9630000126371,รถเมล์ร้อน - กรุงเทพธุรกิจ,https://www.bangkokbiznews.com/politics/981586,,`;

    test('should be null when it is marked with dash (-)', async () => {
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW('-')}`);
      const promises = await getRawPromises('http://path/to/promises.csv');
      expect(promises[0].vdo).toBe(null);
    });

    test('should be null when it is an empty string', async () => {
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW('')}`);
      const promises = await getRawPromises('http://path/to/promises.csv');
      expect(promises[0].vdo).toBe(null);
    });

    test('should be as original when it is anything else', async () => {
      const vdo = 'ANYTHING';
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW(vdo)}`);

      const promises = await getRawPromises('http://path/to/promises.csv');

      expect(promises[0].vdo).toBe(vdo);
    });
  });

  describe('extract links', () => {
    test('single link', async () => {
      const DATA_ROW = `171,พลังประชารัฐ,สิ่งแวดล้อม,เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า,nodata,เพื่อให้เป็นไปตามนโยบายสีเขียว ...,FALSE,พลังประชารัฐ_13,https://drive.google.com/drive/folders/EXAMPLE,-,ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai,https://news.mthai.com/politics-news/789439.html,,,,,`;
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

      const promises = await getRawPromises('http://path/to/promises.csv');

      expect(promises[0].links).toEqual([
        {
          name: 'ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai',
          url: 'https://news.mthai.com/politics-news/789439.html',
        },
      ]);
    });

    test('two links', async () => {
      const DATA_ROW = `171,พลังประชารัฐ,สิ่งแวดล้อม,เปลี่ยนรถโดยสาร เป็นรถเมล์ไฟฟ้า,nodata,เพื่อให้เป็นไปตามนโยบายสีเขียว ...,FALSE,พลังประชารัฐ_13,https://drive.google.com/drive/folders/EXAMPLE,-,ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai,https://news.mthai.com/politics-news/789439.html,คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online,https://mgronline.com/business/detail/9630000126371,,,,`;
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW}\n${DATA_ROW}`);

      const promises = await getRawPromises('http://path/to/promises.csv');

      expect(promises[0].links).toEqual([
        {
          name: 'ส.ส.พลังประชารัฐ เสนอใช้รถเมล์ไฟฟ้าลด PM 2.5 - Mthai',
          url: 'https://news.mthai.com/politics-news/789439.html',
        },
        {
          name: 'คมนาคมตั้งเป้าเปลี่ยนรถสาธารณะเป็นไฟฟ้าใน 20 ปี-นำร่อง 6 จังหวัด - MGR online',
          url: 'https://mgronline.com/business/detail/9630000126371',
        },
      ]);
    });

    test('be able to handle dynamic number of links according to headers', async () => {
      const HEADER_ROW_WITH_5_LINKS =
        'promiseId,party,topic,promiseTitle,status,explain,isNCPO,refPicture,picturesDrive,vdo,nameLink1,urlLink1,nameLink2,urlLink2,nameLink3,urlLink3,nameLink4,urlLink4,nameLink5,urlLink5';
      const DATA_ROW = `,,,,,,,,,,name1,http://link/1,name2,http://link/2,name3,http://link/3,name4,http://link/4,name5,http://link/5`;
      mockFetch.text = jest
        .fn()
        .mockResolvedValue(`${HEADER_ROW_WITH_5_LINKS}\n${DATA_ROW}`);

      const promises = await getRawPromises('http://path/to/promises.csv');

      expect(promises[0].links).toEqual([
        {
          name: 'name1',
          url: 'http://link/1',
        },
        {
          name: 'name2',
          url: 'http://link/2',
        },
        {
          name: 'name3',
          url: 'http://link/3',
        },
        {
          name: 'name4',
          url: 'http://link/4',
        },
        {
          name: 'name5',
          url: 'http://link/5',
        },
      ]);
    });
  });
});
