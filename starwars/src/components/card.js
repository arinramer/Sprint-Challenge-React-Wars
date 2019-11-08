import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';

const Mycard = props => {
    
    return (
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{"Gender: " + props.gender}</CardSubtitle>
          <CardSubtitle>{"Eye color: " + props.eyecolor}</CardSubtitle>
          <CardSubtitle>{"Hair color: " + props.haircolor}</CardSubtitle>
          <CardSubtitle>{"Height: " + props.height}</CardSubtitle>
          <CardSubtitle>{"Mass: " + props.mass}</CardSubtitle>
        </CardBody>
      </Card>
    );
    
}

export default Mycard;