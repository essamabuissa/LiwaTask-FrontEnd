import { useState } from "react";
import { SignUpDiv } from "./styles";
import { NavButton } from "../../components/styles";

import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions";
import { useHistory } from "react-router-dom";

import TextField from "../../components/TextField";
const SignUp = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [resume, setResume] = useState("");
  const [department, setDepartment] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const uploadFile = (event) => {
    setResume(event.target.files[0]);
  };

  const options = ["one", "two", "three"];

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();

  today = year + "-" + month + "-" + day;
  const signUpAction = () => {
    let formData = new FormData();
    formData.append("resume", resume);
    let userDetails = {
      username: name,
      date_of_birth: dob,
      years_of_experience: yearsOfExperience,
      resume,
      created_at: today,
      file: formData,
      department,
    };
    dispatch(signUp(userDetails, history));
  };
  return (
    <SignUpDiv>
      <img
        style={{ width: "50%", marginTop: "10px" }}
        src={
          "https://www.affinityteam.com.au/resources/uploads/2018/04/the-benefits-of-using-one-payroll-hr-system.jpg"
        }
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          radius: "5px",
          marginTop: "10px",
        }}>
        <TextField
          onChange={(event) => setName(event.target.value)}
          placeHolder={"Full Name"}
        />
        <TextField
          onChange={(event) => setDob(event.target.value)}
          type="date"
        />
        <TextField
          placeHolder={"Years Of Experience"}
          onChange={(event) => setYearsOfExperience(event.target.value)}
        />
        <div onChange={(event) => setDepartment(event.target.value)}>
          <input type={"radio"} value={"IT"} name={"department"} /> IT
          <input type={"radio"} value={"HR"} name={"department"} /> HR
          <input type={"radio"} value={"Finance"} name={"department"} /> Finance
        </div>
        {/* <TextField
          label={"Upload Resume"}
          onChange={(event) => uploadFile(event)}
          type="file"
        /> */}
      </div>
      <NavButton
        textColor={"white"}
        backgroundColor={"lightblue"}
        onClick={signUpAction}>
        SIGN UP
      </NavButton>
    </SignUpDiv>
  );
};

export default SignUp;
