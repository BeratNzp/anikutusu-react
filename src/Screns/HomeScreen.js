import React, { useState, useEffect } from "react";
import { fetchMemories } from "../axios";

import Memory from "../components/Memory"

import { Spinner, Row, Col } from "react-bootstrap";

export const HomeScreen = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getMemories = async () => {
      const { data } = await fetchMemories();
      setMemories(data);
    };
    getMemories();
  }, []);

  return (
    <>
      <h1>En güncel anılar</h1>
      {!memories.length ? (
      <Spinner animation="border" />
      ) : (
      <Row>
          {memories.map((memory) => (
                  <Col
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className="m-auto"
                  key={memory._id}
                  >
                      <Memory memory={memory} />
                  </Col>
              ))}
      </Row>
      )}
    </>
  );
};
