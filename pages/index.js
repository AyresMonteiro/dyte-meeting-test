import { useState } from "react";

import { Button, Input, Link } from "@chakra-ui/react";

export default function Index() {
  const [authToken, setAuthToken] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (event) => setRoomName(event.target.value);
  const handleAuthTokenChange = (event) => setAuthToken(event.target.value);

  return (
    <>
      <Input placeholder="Room Name" onChange={handleRoomNameChange} />
      <Input placeholder="Auth Token" onChange={handleAuthTokenChange} />
      <Link href={encodeURI(`/meeting?roomName=${roomName}&authToken=${authToken}`)}>
        <Button>Go to call</Button>
      </Link>
    </>
  );
}
