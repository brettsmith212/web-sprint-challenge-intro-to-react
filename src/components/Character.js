// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div``;

function Character(props) {
  const { data } = props;
  console.log(data);

  const characterArr = data.map((person, idx) => {
    return (
      <CharacterWrapper key={idx}>
        <h2>{person.name}</h2>
        <p>Birth Year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
      </CharacterWrapper>
    );
  });

  return <div>{characterArr}</div>;
}

export default Character;
