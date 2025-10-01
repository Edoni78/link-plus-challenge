import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const users = useSelector((state) => state.users.list);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mb-3">
      <Form.Control
        type="text"
        placeholder="Search by name or email..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <ul className="list-group mt-2">
          {filtered.map((u) => (
            <li key={u.id} className="list-group-item">
              {u.name} - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
