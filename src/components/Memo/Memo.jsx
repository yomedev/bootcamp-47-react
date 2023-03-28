import React from "react";
import { Button } from "../Button";

const cache = {
  // "{a: 2, b: 3}": 5
};

const sum = (a, b) => {
  const key = JSON.stringify({ a, b });

  if (cache[key]) {
    console.log("from cache", cache[key]);
    return cache[key];
  }

  const result = a + b;
  cache[key] = result;
  console.log("calculation", result);
  return result;
};

export const Memo = () => {
  return (
    <div className="mb-4">
      <Button onClick={() => sum(2, 2)} className="btn-primary me-2">
        2 + 2
      </Button>
      <Button onClick={() => sum(2, 3)} className="btn-primary me-2">
        2 + 3
      </Button>
      <Button onClick={() => sum(2, 4)}>2 + 4</Button>
    </div>
  );
};
