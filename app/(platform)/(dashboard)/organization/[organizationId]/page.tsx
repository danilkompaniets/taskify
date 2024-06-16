import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { userId, orgId } = auth();
  return <h1>page</h1>;
};

export default page;
