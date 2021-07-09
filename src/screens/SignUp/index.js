import { useState } from "react";
import { SignUpDiv } from "./styles";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions";
import TextField from "../../components/TextField";
const SignUp = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [yearsOfExperienve, setYearsOfExperience] = useState("");
  const dispatch = useDispatch();

  const signUpAction = () => {
    console.log("enterd");
    let userDetails = {
      username: name,
      date_of_birth: dob,
      years_of_experience: yearsOfExperienve,
    };
    dispatch(signUp(userDetails));
  };
  return (
    <SignUpDiv>
      <TextField
        onChange={(event) => setName(event.target.value)}
        label={"Name"}
      />
      <TextField
        onChange={(event) => setDob(event.target.value)}
        label={"DOB"}
      />
      <TextField
        onChange={(event) => setYearsOfExperience(event.target.value)}
        label={"Years Of Experience"}
      />
      <button onClick={signUpAction}>SIGN UP</button>
    </SignUpDiv>
  );
};

export default SignUp;
