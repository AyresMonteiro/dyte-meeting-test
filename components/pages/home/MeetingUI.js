import { useEffect } from "react";
import { DyteMeeting } from "dyte-client";
import { useDyteMeeting } from "@dytesdk/react-web-core";
import { EnvUtils } from "../../core/EnvUtils";

export default function MeetingUI() {
  const { meeting } = useDyteMeeting();

  useEffect(() => {
    meeting.joinRoom();
  }, [meeting]);

  return (
    <div style={{ height: "480px" }}>
      <DyteMeeting
        mode="fill"
        meeting={meeting}
        clientId={EnvUtils.get("NEXT_PUBLIC_DYTE_ORGANIZATION_ID")}
      />
    </div>
  );
}
