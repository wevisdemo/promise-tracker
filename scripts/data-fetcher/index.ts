import { writeFile } from 'fs/promises';
import { getRawPromises } from './extracts/promise';
import { getRawPromiseTimelines } from './extracts/timeline';
import { getRawParties } from './extracts/party';
import { transformToTrackingPromises } from './transforms/promise';
import { transformToParties } from './transforms/party';

async function fetchData() {
  const promises = await transformToTrackingPromises(
    await getRawPromises(),
    await getRawPromiseTimelines()
  );
  const parties = await transformToParties(await getRawParties());
  await writeFile('./data/promises.json', JSON.stringify(promises, null, 2));
  await writeFile('./data/parties.json', JSON.stringify(parties, null, 2));
}

fetchData();
