import { TextFieldStyle, SignUpDiv } from "./styles";
const TextField = ({ onChange, label, type, placeHolder }) => {
  return (
    <div
      style={{
        alignItems: "flex-start",
        flexDirection: "column",
        display: "flex",
      }}>
      <text style={{ fontSize: "10px", fontWeight: "bold" }}>{label}</text>
      <TextFieldStyle
        placeholder={placeHolder}
        type={type}
        onChange={onChange}
        label="hello"
      />
    </div>
  );
};
export default TextField;
