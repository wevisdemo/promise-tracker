export type MockFetch = {
  text: jest.Mock<any, any>;
};

export function createMockFetch(): MockFetch {
  const mockFetch = {
    text: jest.fn().mockResolvedValue(''),
  };
  global.fetch = jest.fn().mockResolvedValue(mockFetch) as jest.Mock;
  return mockFetch;
}
