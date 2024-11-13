// page.js
import React from "react";
import Body from "./components/Body/page";
import Texts from "./components/text/page";

function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Body />
      <Texts />
    </div>
  );
}

export default Page;
