import { CandidateCardStyle } from "./styles";
const CandidateCard = ({
  name,
  yearsOfExperience,
  dob,
  department,
  createdAt,
}) => {
  return (
    <CandidateCardStyle>
      <text>Name: {name}</text>
      <text>Years of Experience: {yearsOfExperience}</text>
      <text>Date of Birth: {dob}</text>
      <text>Department: {department}</text>
      <text>Registered At: {createdAt}</text>
    </CandidateCardStyle>
  );
};

export default CandidateCard;
