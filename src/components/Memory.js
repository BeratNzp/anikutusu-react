import React from "react";
import moment from "moment";

import { MdModeEdit, MdDelete } from "react-icons/md";

import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { deleteMemory } from "../axios";

const Memory = ({ memory }) => {
  return (
    <Card className="rounded py-3 my-3">
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title style={{ color: 'darkblue' }}>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Subtitle>{moment(memory.created_at).fromNow()}</Card.Subtitle>
      </Card.Body> 
      <Card.Footer style={{display:'flex', justifyContent: 'space-between'}} className="bg-white">
        <LinkContainer
          to={`/update/${memory._id}`}
          style={{ cursor: "pointer" }}
        >
          <MdModeEdit size={25} color="blue" />
        </LinkContainer>
        <MdDelete size={25} onClick={() => deleteMemory(memory._id)} color="red" style={{ cursor: "pointer" }} />
      </Card.Footer>
    </Card>
  );
};

export default Memory;
