import { PromiseStatus, TrackingPromise } from '@/models/promise';

export const matchedPromise = (promises: TrackingPromise[], ID: number) => {
  return promises.filter((promise) => promise.id === ID)[0] as TrackingPromise;
};

const promiseStatusTitleMap = new Map<PromiseStatus, string>([
  [PromiseStatus.NoData, 'ยังไม่พบข้อมูล'],
  [PromiseStatus.Proposed, 'ถูกเสนอต่อสภาแล้ว'],
  [PromiseStatus.Paused, 'ถูกระงับ'],
  [PromiseStatus.Working, 'กำลังดำเนินการ'],
  [PromiseStatus.Done, 'สำเร็จแล้ว'],
]);

export const titleText = (
  title: string,
  party: string,
  status: PromiseStatus
) => {
  return `โครงการ${title} โดยพรรค${party} ${promiseStatusTitleMap.get(status)}`;
};

export const descriptionMap = new Map<PromiseStatus, string>([
  [
    PromiseStatus.NoData,
    'คำสัญญานี้ยังไม่พบข้อมูล ขอ(ทวง)ถามพรรคการเมืองถึงข้อมูลและการดำเนินการเกี่ยวกับคำสัญญานี้',
  ],
  [
    PromiseStatus.Proposed,
    'คำสัญญานี้ถูกเสนอต่อสภา ร่วมจับตา รอดูผล ของคำสัญญานี้...ว่าได้ไปต่อไหม ?',
  ],
  [
    PromiseStatus.Paused,
    'น่าเศร้า !! คำสัญญานี้ถูกระงับไว้ ร่วมแชร์ให้คำสัญญาได้ไปต่อกัน',
  ],
  [
    PromiseStatus.Working,
    'คำสัญญานี้กำลังดำเนินการอยู่ บอกต่อให้ทุกคนมาลุ้นไปพร้อมๆกันว่าใกล้แล้ว!!',
  ],
  [
    PromiseStatus.Done,
    'คำสัญญานี้ทำได้สำเร็จ บอกต่อให้ทุกคนดู นี่คือคำสัญญาที่พูดแล้วทำจริง!!',
  ],
]);

export const imageUrl = (baseImageUrl: string, status: PromiseStatus) => {
  return `${baseImageUrl}/${status}.jpg`;
};
