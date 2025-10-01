import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Name and Email required!");
    onAdd(form);
    setForm({ name: "", email: "" });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Add User</Button>
    </Form>
  );
};

export default UserForm;
