import React from "react";
import styled from "styled-components";
import { Card } from "../card/card.component";

const CardListStyles = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardList = props => (
  <CardListStyles>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </CardListStyles>
);
