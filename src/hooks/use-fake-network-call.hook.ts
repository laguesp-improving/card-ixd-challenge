import { useCallback, useEffect, useState } from "react";

import type { NetworkStatus } from "../types/network.types";

export const useFakeNetworkCall = (
  ms?: number,
  errorRate?: number
) => {
  const [status, setStatus] = useState<NetworkStatus>(
    "idle"
  );

  const triggerNetworkCall = useCallback(() => {
    setStatus("loading");

    const promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > (errorRate ?? 0.7)) {
          reject();
        } else {
          resolve();
        }
      }, ms ?? Math.floor(Math.random() * 1000));
    });

    promise
      .then(() => {
        setStatus("resolved");
      })
      .catch(() => {
        setStatus("rejected");
      });
  }, [ms, errorRate]);

  useEffect(() => {
    return () => {
      setStatus("idle");
    };
  }, [triggerNetworkCall]);

  return {
    networkStatus: status,
    triggerNetworkCall
  };
};

export default useFakeNetworkCall;
