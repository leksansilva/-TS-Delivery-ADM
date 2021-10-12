import React, { useEffect, useState } from "react";
import api from "./api";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import {
  logout,
  getToken,
  expiration,
  refreshToken,
  expirationRefreshToken,
  login,
  setExpiration,
  setRefreshToken,
  setExpirationRefreshToken,
} from "./auth";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "../components/styles/template";

export default function Wauth({ component: Component, ...rest }) {
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState({
    token: getToken(),
    expirationToken: expiration(),
    refreshToken: refreshToken(),
    expirationRefreshToken: expirationRefreshToken(),
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function verify() {
    const headers = { Authorization: `Bearer ${getToken()}` };
    const dateNowUtc = new Date().getTime() + 300000;
    const expToken = new Date(token.expirationToken).getTime();
    const expRefreshToken = new Date(token.expirationRefreshToken).getTime();
    await api
      .get("/api/Auth", { headers: headers })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setRedirect(false);

          if (expToken <= dateNowUtc) {
            if (expRefreshToken > dateNowUtc) {
              api
                .post("api/Auth/Renew", token, { headers: headers })
                .then((response) => {
                  if (response.status === 200) {
                    login(response.data.token);
                    setExpiration(response.data.expiration);
                    setRefreshToken(response.data.refreshToken);
                    setExpirationRefreshToken(
                      response.data.expirationRefreshToken
                    );
                    setToken({
                      token: getToken(),
                      expirationToken: expiration(),
                      refreshToken: refreshToken(),
                      expirationRefreshToken: expirationRefreshToken(),
                    });
                  }
                });
            } else {
              logout();
              setLoading(false);
              setRedirect(true);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        logout();
        setLoading(false);
        setRedirect(true);
      });
  }
  useEffect(() => {
    verify();
    return 0;
  }, [loading, redirect, verify]);
  return loading ? (
    <ThemeProvider theme={theme}>
      <Loading />
    </ThemeProvider>
  ) : (
    <Route
      {...rest}
      render={(props) =>
        !redirect ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/Login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
