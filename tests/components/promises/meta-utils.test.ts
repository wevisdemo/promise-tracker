import { titleText, imageUrl } from '@/pages/promises/meta-utils';
import { PromiseStatus } from '@/models/promise';

test('should output title text', () => {
  expect(titleText('ที่ 1', 'พลังประชารวย', 'nodata' as PromiseStatus)).toBe(
    'โครงการที่ 1 โดยพรรคพลังประชารวย ยังไม่พบข้อมูล'
  );
  expect(titleText('ที่ 1', 'พลังประชารวย', 'proposed' as PromiseStatus)).toBe(
    'โครงการที่ 1 โดยพรรคพลังประชารวย ถูกเสนอต่อสภาแล้ว'
  );
  expect(titleText('ที่ 1', 'พลังประชารวย', 'paused' as PromiseStatus)).toBe(
    'โครงการที่ 1 โดยพรรคพลังประชารวย ถูกระงับ'
  );
  expect(titleText('ที่ 1', 'พลังประชารวย', 'working' as PromiseStatus)).toBe(
    'โครงการที่ 1 โดยพรรคพลังประชารวย กำลังดำเนินการ'
  );
  expect(titleText('ที่ 1', 'พลังประชารวย', 'done' as PromiseStatus)).toBe(
    'โครงการที่ 1 โดยพรรคพลังประชารวย สำเร็จแล้ว'
  );
});

test('should output image url path', () => {
  expect(imageUrl('https://github.com', 'nodata' as PromiseStatus)).toBe(
    'https://github.com/nodata.jpg'
  );
  expect(imageUrl('https://github.com', 'proposed' as PromiseStatus)).toBe(
    'https://github.com/proposed.jpg'
  );
  expect(imageUrl('https://github.com', 'paused' as PromiseStatus)).toBe(
    'https://github.com/paused.jpg'
  );
  expect(imageUrl('https://github.com', 'working' as PromiseStatus)).toBe(
    'https://github.com/working.jpg'
  );
  expect(imageUrl('https://github.com', 'done' as PromiseStatus)).toBe(
    'https://github.com/done.jpg'
  );
});
