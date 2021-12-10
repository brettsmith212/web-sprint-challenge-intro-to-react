// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterContainer = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterWrapper = styled.div`
  width: 15rem;
  border: 1px solid yellow;
  padding: 2rem;
  margin: 2rem 0;

  h2 {
    margin-bottom: 1rem;
  }
`;

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

  return <CharacterContainer>{characterArr}</CharacterContainer>;
}

export default Character;
