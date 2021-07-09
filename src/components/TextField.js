import { TextFieldStyle, SignUpDiv } from "../screens/SignUp/styles";
const TextField = ({ onChange, label }) => {
  return (
    <div
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}>
      <text style={{ fontSize: "10px" }}>{label}</text>
      <TextFieldStyle onChange={onChange} label="hello" />
    </div>
  );
};
export default TextField;
