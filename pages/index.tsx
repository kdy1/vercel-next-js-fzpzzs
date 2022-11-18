import { DateTime } from 'luxon';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  // This will work in Stackblitz but the build emitted by `next run build` will return just the timezone offset
  return <code>{DateTime.now().toISO()}</code>;
}
