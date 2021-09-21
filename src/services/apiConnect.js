import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { getToken } from "./auth";

export const Notify = () => {
  const [connection, setConnection] = useState(null | HubConnection);
  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("https://rokugan.fun/notificationhubservice", {
        accessTokenFactory: () => getToken(),
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    setConnection(connect);
  }, []);

  useEffect(() => {
    const connectionOrders = async () => {
      if (connection) {
        connection
          .start()
          .then(() => {
            enableOrdersNotification();
            console.info("connected!");
          })
          .catch((err) => {
            console.log("Disconnected!");
            if (connection.state === "Disconnected") {
              console.error(err.toString());
              setTimeout(connectionOrders, 3000);
            }
          });
      }
    };
    const enableOrdersNotification = async () => {
      console.log("entrei aqui");
      connection.on('ReportNewPurchaseAsync', (order, title) => {
        console.log(order.id + "  " + title);
      });
    };

    connectionOrders();
  }, [connection]);
};
