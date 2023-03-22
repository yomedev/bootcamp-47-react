import styled from "styled-components";
import { HiStatusOnline } from "react-icons/hi";

const MyButton = styled.button`
  padding: 5px 10px;
  border: 1px solid blue;
  border-radius: 5px;
`;

const MyIcon = styled(HiStatusOnline)`
  color: ${(props) => (props.isOnline ? "green" : "red")};
  
  &:hover {
    color: pink;
  }
`;

export const Button = ({ children }) => {
  const isOnline = true;
  return (
    <MyButton>
      <MyIcon isOnline={isOnline} />
    </MyButton>
  );
};
