import fetch from 'node-fetch';

export const LIMIT = 1000;

export async function fetchNocoDB(
  resourcePath: string
): Promise<{ [key: string]: any }[]> {
  const apiPath = process.env.NOCODB_API_PATH;
  const apiToken = process.env.NOCODB_API_TOKEN || '';

  const res = await fetch(`${apiPath}${resourcePath}?limit=${LIMIT}`, {
    headers: {
      'xc-token': apiToken,
    },
  });
  return res.json();
}
