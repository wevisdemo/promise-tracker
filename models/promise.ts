export enum PromiseCategory {
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
  category: PromiseCategory;
  status: PromiseStatus;
  description: string;
  isNCPO: boolean;
  imageFileName?: string;
  links: PromiseLink[];
  timelines: PromiseTimeline[];
}

export const PromiseCategoryTextMap = new Map<
  PromiseCategory,
  { long: string; short: string }
>([
  [
    PromiseCategory.Equality,
    { long: 'ความเท่าเทียม/คุณภาพชีวิต', short: 'คุณภาพชีวิต' },
  ],
  [
    PromiseCategory.Security,
    { long: 'ความมั่นคง/ปกป้องสถาบันกษัตริย์', short: 'ความมั่นคง' },
  ],
  [PromiseCategory.Foreign, { long: 'ต่างประเทศ', short: 'ต่างประเทศ' }],
  [
    PromiseCategory.Administration,
    { long: 'บริหารจัดการ(ราชการ)', short: 'บริหารจัดการ' },
  ],
  [
    PromiseCategory.Culture,
    { long: 'ศาสนาและวัฒนธรรม', short: 'ศาสนาและวัฒนธรรม' },
  ],
  [PromiseCategory.Economics, { long: 'เศรษฐกิจ', short: 'เศรษฐกิจ' }],
  [
    PromiseCategory.Environmental,
    { long: 'สิ่งแวดล้อม', short: 'สิ่งแวดล้อม' },
  ],
]);

export const promiseStatusTextMap = new Map<PromiseStatus, string>([
  [PromiseStatus.NoData, 'ไม่พบข้อมูล'],
  [PromiseStatus.Proposed, 'ถูกเสนอต่อสภา'],
  [PromiseStatus.Paused, 'ถูกระงับ'],
  [PromiseStatus.Working, 'กำลังดำเนินการ'],
  [PromiseStatus.Done, 'สำเร็จ'],
]);
