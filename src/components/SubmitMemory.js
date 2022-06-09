import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import * as api from "../axios/index.js";

export const SubmitMemory = () => {
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const navigate = useNavigate();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          api.createMemory(memoryData);
          navigate("/");
        }}
      >
        <Form.Group>
          <h1>Bir anı yarat</h1>
        </Form.Group>
        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Anınız</Form.Label>
          <Form.Control
            name="content"
            type="text"
            as="textarea"
            rows="3"
            onChange={(e) =>
              setMemoryData({ ...memoryData, content: e.target.value })
            }
          ></Form.Control>
        </Form.Group>
        <Form.Group className="py-2">
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => {
              setMemoryData({ ...memoryData, image: base64 });
            }}
          />
        </Form.Group>
        <div className="d-grid gap-">
          <Button type="submit" size="lg">
            Gönder
          </Button>
        </div>
      </Form>
    </>
  );
};
