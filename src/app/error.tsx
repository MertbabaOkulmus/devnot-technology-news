"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("APP ERROR:", error);
  }, [error]);

  return (
    <div style={{ padding: 24 }}>
      <h2>Something went wrong!</h2>
      <p>
        Digest: <b>{error.digest}</b>
      </p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
