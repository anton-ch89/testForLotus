import React from "react";
import styled from "styled-components";

class CardCharacter extends React.Component {
  render() {
    const { character } = this.props;
    return (
      <CardWrapper>
        <h3>{character.name}</h3>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
      </CardWrapper>
    );
  }
}

export default CardCharacter;

const CardWrapper = styled.div`
  background-color: #111;
  color: #ffe81f;
  border: 1px solid #ffe81f;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
