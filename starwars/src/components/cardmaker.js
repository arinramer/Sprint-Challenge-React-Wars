import React from 'react';
import Mycard from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';
import styled from 'styled-components';

const Flexbox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

const Box = styled.div`
    margin: 20px;
`

const Cardmaker = props => {
    return (
        <Flexbox className="container">
        {props.characters.map((item, index) => (
            <Box key={index}><Mycard name={item.name} gender={item.gender} eyecolor={item.eye_color} haircolor={item.hair_color} homeworld={item.homeworld} height={item.height} mass={item.mass}/></Box>
          ))}
        </Flexbox>
    );
}

export default Cardmaker;