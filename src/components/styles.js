import styled from "styled-components";

export const TextFieldStyle = styled.input`
  width: 222px;
  height: 30px;
  margin: 2px;
  border-radius: 2.5px;
  padding-left: 8px;
  border-width: 0.5px 0.5px;
  border-color: lightblue;
  margin-top: 10px;
`;

export const CandidateCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  margin: 2px;
  border-radius: 5px;
  text {
    font-weight: bold;
    margin: 5px;
    color: black;
  }
  margin: 5px;
  border-width: 10px 10px;
  border-color: black;
`;

export const NavBarStyle = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: lightblue;
`;

export const NavButton = styled.button`
  font-weight: bold;
  font-size: 15px;
  margin: 7px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  border-radius: 7px;
  background-color: ${(props) => props.backgroundColor};
  border-width: 0px 0px;
  color: ${(props) => props.textColor};
`;
