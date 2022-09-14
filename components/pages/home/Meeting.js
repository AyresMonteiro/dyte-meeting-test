import { useEffect } from "react";
import { EnvUtils } from "../../core/EnvUtils";
import { useDyteClient, DyteProvider } from "@dytesdk/react-web-core";
import MeetingUI from "./MeetingUI";

export default function Meeting() {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      roomName: `jcadik-sstbjp`,
      authToken: EnvUtils.get("NEXT_PUBLIC_DYTE_API_KEY"),
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return (
    <DyteProvider value={meeting}>
      <MeetingUI />
    </DyteProvider>
  );
}
