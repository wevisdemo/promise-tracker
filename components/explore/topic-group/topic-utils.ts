import {
  TrackingPromise,
  PromiseTopic,
  promiseTopicTextMap,
} from '@/models/promise';

export const filteredPromise = (
  promises: TrackingPromise[],
  topic: PromiseTopic
): TrackingPromise[] => {
  return promises.filter((promise: TrackingPromise) => promise.topic === topic);
};

export const getPromisesLength = (promises: TrackingPromise[]): number => {
  return promises.length;
};

export const getTopic = (topic: PromiseTopic): string | undefined => {
  return promiseTopicTextMap.get(topic as PromiseTopic)?.long;
};

export const computedPromisePerPage = (
  promisePerPage: number,
  promiseLength: number
) => {
  if (promisePerPage > 0) {
    return promisePerPage;
  } else {
    return promiseLength;
  }
};

export const pageLength = (promiseLength: number, promisePerPage: number) => {
  if (promisePerPage <= 0) return 0;
  return Math.ceil(promiseLength / promisePerPage);
};

export const pageNumberArray = (pageLength: number, currentPage: number) => {
  if (currentPage > pageLength || pageLength < 0 || currentPage < 0) return [];
  const fullArray = Array.from({ length: pageLength }, (_, index) => index + 1);
  let returnedArray = [];

  if (fullArray.length <= 4) {
    return fullArray;
  }

  if (currentPage <= 2) {
    returnedArray = [1, 2, '...', fullArray.length];
  } else if (currentPage >= 3 && currentPage < fullArray.length - 2) {
    returnedArray = [
      1,
      '...',
      currentPage,
      currentPage + 1,
      '...',
      fullArray.length,
    ];
  } else if (currentPage >= fullArray.length - 2) {
    returnedArray = [
      1,
      '...',
      fullArray.length - 2,
      fullArray.length - 1,
      fullArray.length,
    ];
  } else {
    return [];
  }
  return returnedArray;
};

export const currentPagePromises = (
  promises: TrackingPromise[],
  currentPage: number,
  promisePerPage: number
) => {
  if (currentPage < 1 || promisePerPage < 0) return [];
  const lastItemIndex: number = currentPage * promisePerPage;
  const firstItemIndex: number = lastItemIndex - promisePerPage;
  return promises.slice(firstItemIndex, lastItemIndex);
};
