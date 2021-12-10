// Write your Character component here
import React from "react";
import styled from "styled-components";

function Character(props) {
  const { data } = props;
  console.log(data);
  data.map((person) => {
    return person.name;
  });
  return (
    <div>
      <h2>data</h2>
    </div>
  );
}

export default Character;
