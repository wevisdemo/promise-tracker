import { writeFile } from 'fs/promises';
import { getRawPromises } from './extracts/promise';
import { getRawPromiseTimelines } from './extracts/timeline';
import { getRawParties } from './extracts/party';
import { transformToTrackingPromises } from './transforms/promise';
import { transformToParties } from './transforms/party';

const PROMISE_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3gvBNOgZnyEn75Emq-poR6laZrZ362qDLXmhlbYqniW4qQQk9LS8X76SNlNrGI5tSIjHCdYGXA16k/pub?gid=137904384&single=true&output=csv';
const PROMISE_TIMELINE_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3gvBNOgZnyEn75Emq-poR6laZrZ362qDLXmhlbYqniW4qQQk9LS8X76SNlNrGI5tSIjHCdYGXA16k/pub?gid=27679393&single=true&output=csv';
const PARTY_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3gvBNOgZnyEn75Emq-poR6laZrZ362qDLXmhlbYqniW4qQQk9LS8X76SNlNrGI5tSIjHCdYGXA16k/pub?gid=1404897803&single=true&output=csv';

async function fetchData() {
  const promises = await transformToTrackingPromises(
    await getRawPromises(PROMISE_CSV),
    await getRawPromiseTimelines(PROMISE_TIMELINE_CSV)
  );
  const parties = await transformToParties(await getRawParties(PARTY_CSV));
  await writeFile('./data/promises.json', JSON.stringify(promises, null, 2));
  await writeFile('./data/parties.json', JSON.stringify(parties, null, 2));
}

fetchData();
