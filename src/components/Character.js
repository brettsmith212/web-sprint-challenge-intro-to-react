// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div``;

function Character(props) {
  const { data } = props;
  console.log(data);

  const characterArr = data.map((person) => {
    return (
      <CharacterWrapper>
        <p>{person.name}</p>
        <p>{person.height}</p>
        <p>{person.mass}</p>
        <p>{person.hair_color}</p>
      </CharacterWrapper>
    );
  });

  return <div>{characterArr}</div>;
}

export default Character;
