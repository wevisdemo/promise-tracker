import fetch from 'node-fetch';

export async function fetchNocoDB(
  resourcePath: string
): Promise<{ [key: string]: any }[]> {
  const apiPath = process.env.NOCODB_API_PATH;
  const apiToken = process.env.NOCODB_API_TOKEN || '';

  const res = await fetch(`${apiPath}${resourcePath}`, {
    headers: {
      'xc-token': apiToken,
    },
  });
  return res.json();
}
