import { useClock } from "@web/core";
import { useMemo } from "react";
import { TextAreaTool } from "../../component/input/TextAreaTool";
import { DetailRow } from "../../component/layout/DetailRow";
import { PageStandard } from "../../component/layout/PageStandard";
import { TextCopy } from "../../component/layout/TextCopy";

import styles from "./Component.module.scss";

export function Component() {
  const { now } = useClock();

  const unixTime = useMemo(() => {
    return now.toUnixInteger();
  }, [now]);

  const resolvedOptions = useMemo(() => {
    return JSON.stringify(Intl.DateTimeFormat().resolvedOptions(), null, 2);
  }, []);

  const timeZoneOffset = useMemo(() => {
    return new Date().getTimezoneOffset().toString();
  }, []);

  return (
    <PageStandard title="Time">
      <div className={styles.content}>
        <DetailRow
          title="Unix Time"
          description="The number of non-leap seconds that have elapsed since 00:00:00 UTC on 1 January 1970, the Unix epoch."
        >
          <TextCopy>{ unixTime }</TextCopy>
        </DetailRow>
        <DetailRow
          title="Intl.DateTimeFormat().resolvedOptions()"
        >
          <TextAreaTool
            value={resolvedOptions}
            readOnly
            rows={10}
          />
        </DetailRow>
        <DetailRow
          title="new Date().getTimezoneOffset()"
          description="The difference, in minutes, between the date as evaluated in the UTC time zone and as evaluated in the local time zone. This is positive if the local time zone is behind UTC, and negative if the local time zone is ahead of UTC."
        >
          <TextAreaTool
            value={timeZoneOffset}
            readOnly
          />
        </DetailRow>
      </div>
    </PageStandard>
  );
}
