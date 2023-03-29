import React, { useState } from "react";
import { Button } from "../Button";

export const ArticlesSearch = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    onSubmit(value);
  };

  return (
    <div className="input-group mb-3">
      <input
        onChange={handleChange}
        type="text"
        value={value}
        className="form-control"
        placeholder="Type to search..."
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};
