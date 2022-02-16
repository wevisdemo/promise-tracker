export enum PromiseCategory {
  Equality = 'equality',
  Security = 'security',
  Foreign = 'foreign',
  Administration = 'administration',
  Culture = 'culture',
  Economics = 'economics',
  Environmental = 'environmental',
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

export enum PromiseStatus {
  Inactive = 'inaction',
  Proposed = 'proposed',
  Paused = 'paused',
  Working = 'working',
  Done = 'done',
}

export const promiseStatusTextMap = new Map<PromiseStatus, string>([
  [PromiseStatus.Inactive, 'ไม่พบข้อมูล'],
  [PromiseStatus.Proposed, 'ถูกเสนอต่อสภา'],
  [PromiseStatus.Paused, 'ถูกระงับ'],
  [PromiseStatus.Working, 'กำลังดำเนินการ'],
  [PromiseStatus.Done, 'สำเร็จ'],
]);
