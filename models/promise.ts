export enum PromiseTopic {
  Equality = 'equality',
  Security = 'security',
  Foreign = 'foreign',
  Administration = 'administration',
  Culture = 'culture',
  Economics = 'economics',
  Environmental = 'environmental',
}

export enum PromiseStatus {
  NoData = 'nodata',
  Proposed = 'proposed',
  Paused = 'paused',
  Working = 'working',
  Done = 'done',
}

export interface PromiseLink {
  name: string;
  url: string;
}

export interface PromiseTimeline {
  label: string;
  from: string;
  to?: string;
}

export interface TrackingPromise {
  id: number;
  isActive: boolean;
  party: string;
  title: string;
  category: PromiseTopic;
  status: PromiseStatus;
  description: string;
  isNCPO: boolean;
  imageFileName?: string;
  links: PromiseLink[];
  timelines: PromiseTimeline[];
}

export const promiseTopicTextMap = new Map<
  PromiseTopic,
  { long: string; short: string }
>([
  [
    PromiseTopic.Equality,
    { long: 'ความเท่าเทียม/คุณภาพชีวิต', short: 'คุณภาพชีวิต' },
  ],
  [
    PromiseTopic.Security,
    { long: 'ความมั่นคง/ปกป้องสถาบันกษัตริย์', short: 'ความมั่นคง' },
  ],
  [PromiseTopic.Foreign, { long: 'ต่างประเทศ', short: 'ต่างประเทศ' }],
  [
    PromiseTopic.Administration,
    { long: 'บริหารจัดการ(ราชการ)', short: 'บริหารจัดการ' },
  ],
  [
    PromiseTopic.Culture,
    { long: 'ศาสนาและวัฒนธรรม', short: 'ศาสนาและวัฒนธรรม' },
  ],
  [PromiseTopic.Economics, { long: 'เศรษฐกิจ', short: 'เศรษฐกิจ' }],
  [PromiseTopic.Environmental, { long: 'สิ่งแวดล้อม', short: 'สิ่งแวดล้อม' }],
]);

export const promiseStatusTextMap = new Map<PromiseStatus, string>([
  [PromiseStatus.NoData, 'ไม่พบข้อมูล'],
  [PromiseStatus.Proposed, 'ถูกเสนอต่อสภา'],
  [PromiseStatus.Paused, 'ถูกระงับ'],
  [PromiseStatus.Working, 'กำลังดำเนินการ'],
  [PromiseStatus.Done, 'สำเร็จ'],
]);
