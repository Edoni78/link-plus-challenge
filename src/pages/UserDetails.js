import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.list.find((u) => u.id === parseInt(id))
  );

  if (!user) return <p className="text-danger text-center mt-4">User not found</p>;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0 rounded-3">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                <h2>{user.name}</h2>
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Email:</strong> {user.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phone:</strong> {user.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Website:</strong> 
                  <a href={`https://${user.website}`} target="_blank" rel="noreferrer"> {user.website}</a>
                </ListGroup.Item>
                {user.address && (
                  <ListGroup.Item>
                    <strong>Address:</strong> {user.address.street}, {user.address.city}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
