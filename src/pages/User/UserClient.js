/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import UserTable from "../../components/UserTable";
import api from "../../services/api";
import { getToken } from "../../services/auth";
import UserTemplate from "./UserTemplate";

export default function UserClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = { Authorization: `Bearer ${getToken()}` };
  useEffect(() => {
    setLoading(true);
    api
      .get("/api/Users", { headers })
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch(() => {
        setLoading(false);
      });

    return () => {
      setUsers([]);
    };
  }, []);
  return (
    <UserTemplate
      content={() =>
       loading ? <Loading /> : <UserTable users={users} name="Cliente" />
      }
    />
  );
}
