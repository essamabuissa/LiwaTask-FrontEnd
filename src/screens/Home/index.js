import React, { useState } from "react";
import { HomeDiv } from "./styles";
import { useSelector } from "react-redux";
const Home = () => {
  const [name, setName] = useState("");
  const candidates = useSelector((state) => state.candidatesReducer.candidates);
  console.log(candidates, "candi");
  return (
    <HomeDiv>
      <h1>hello</h1>
    </HomeDiv>
  );
};

export default Home;
