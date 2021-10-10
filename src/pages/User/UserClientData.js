import React from "react";

import Profile from "../../components/Profile";
import UserTemplate from "./UserTemplate";

export default function UserClientData() {
  return <UserTemplate content={() => <Profile />} />;
}
