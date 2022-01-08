import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { getToken } from "./auth";





export const Notify = () => {
  const [connection, setConnection] = useState(null | HubConnection);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    const newConection = new HubConnectionBuilder()
      .withUrl("https://rokugan.fun/notificationhubservice", {
        accessTokenFactory: () =>getToken(),
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    setConnection(newConection);
  }, []);

  useEffect(() => {
    const connectionOrders = async () => {
      if (connection) {
        connection
          .start()
          .then(() => {
            enableOrdersNotification();
            console.info("Connected!");
          })
          .catch((err) => {
            console.log("Disconnected!");
            if (connection.state === "Disconnected") {
              console.warn(err.toString());
              setTimeout(connectionOrders, 3000);
            }
          });
      }
    };
    const enableOrdersNotification = () => {
      connection.on("reportNewPurchaseAsync", (order, title) => {
        setNotify(!notify);
      });
    };

    connectionOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection]);
  return notify;
};
