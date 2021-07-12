import React, { useState } from "react";
import { HomeDiv, ListStyle } from "./styles";
import { useSelector } from "react-redux";
import CandidateCard from "../../components/CandidateCard";
import TextField from "../../components/TextField";

const Home = () => {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");

  const candidates = useSelector(
    (state) => state?.candidatesReducer?.candidates
  );
  const candidateList = candidates
    ?.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    .filter((candidate) => candidate.username.toLowerCase().includes(query))
    .map((candidate) => (
      <CandidateCard
        name={candidate.username}
        yearsOfExperience={candidate.years_of_experience}
        dob={candidate.date_of_birth}
        department={candidate.department}
        createdAt={candidate.created_at}
      />
    ));

  return (
    <HomeDiv>
      <img
        style={{ width: "50%", marginTop: "10px" }}
        src={
          "https://www.affinityteam.com.au/resources/uploads/2018/04/the-benefits-of-using-one-payroll-hr-system.jpg"
        }
      />
      <TextField
        onChange={(event) => setQuery(event.target.value)}
        placeHolder="search"
      />
      <ListStyle>{candidateList}</ListStyle>
    </HomeDiv>
  );
};

export default Home;
