import fetch from 'node-fetch';

export function transformBoolean(value: string): boolean {
  if (value === 'TRUE') return true;
  return false;
}

export function guardEmptiness(value: string): string | null {
  if (value === '-' || value === '') return null;
  return value;
}

export async function fetchNocoDB<T>(resourcePath: string): Promise<T> {
  const apiPath = process.env.NOCODB_API_PATH;
  const apiToken = process.env.NOCODB_API_TOKEN || '';

  const res = await fetch(`${apiPath}${resourcePath}`, {
    headers: {
      'xc-token': apiToken,
    },
  });
  return res.json();
}
