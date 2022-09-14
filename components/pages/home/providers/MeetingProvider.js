import { createContext } from "react";

const meetingContext = createContext({ meeting: null });

export function MeetingProvider(props) {
  const value = {
    meeting,
  };

  return (
    <meetingContext.Provider value={value}>
      {props.children}
    </meetingContext.Provider>
  );
}
