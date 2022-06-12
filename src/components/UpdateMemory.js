import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { updateMemory, fetchMemory } from "../axios/index.js";

export const UpdateMemory = ({ id }) => {
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    const getMemo = async () => {
      const { data } = await fetchMemory(id)
      setMemoryData(data)
    }

    getMemo()
  }, [id])

  const navigate = useNavigate();

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          updateMemory(id, memoryData)
          navigate("/")
        }}
      >
        <Form.Group>
          <h1>Düzenle</h1>
        </Form.Group>
        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={(e) =>
              setMemoryData({ ...memoryData, title: e.target.value })
            }
            value={memoryData.title}
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
            value={memoryData.content}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="py-2">
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => {
              setMemoryData({ ...memoryData, image: base64 });
            }}
            value={memoryData.image}
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
