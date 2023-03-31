import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../Button";

export const ArticlesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const [value, setValue] = useState(search);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    setSearchParams({ search: value, page: 1 });
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
