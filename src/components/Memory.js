import React from "react";
import moment from "moment";

import { MdModeEdit } from "react-icons/md";

import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Memory = ({ memory }) => {
  return (
    <Card className="rounded py-3 my-3">
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Subtitle>{moment(memory.created_at).fromNow()}</Card.Subtitle>
      </Card.Body>
      <Card.Footer className="bg-white">
        <LinkContainer
          to={`/update/${memory._id}`}
          style={{ cursor: "pointer" }}
        >
          <MdModeEdit size={25} color="blue" />
        </LinkContainer>
      </Card.Footer>
    </Card>
  );
};

export default Memory;
