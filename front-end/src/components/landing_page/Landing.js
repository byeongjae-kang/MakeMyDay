import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import VideoSection from "./VideoSection";

export default function Landing() {
  const [trigger, setTrigger] = useState(false);
  return (
    <div>
      <Navbar setTrigger={setTrigger} trigger={trigger} />
      <VideoSection trigger={trigger} setTrigger={setTrigger} />
    </div>
  );
}
