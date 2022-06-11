import React from "react";
import { Container } from "react-bootstrap";
import { UpdateMemory } from "../components/UpdateMemory.js";

import { useParams } from "react-router-dom";

export const UpdateScreen = () => {
  const { id } = useParams()
  return (
    <>
      <Container>
        <UpdateMemory id={id} />
      </Container>
    </>
  );
};
