import styled from "styled-components";

export const BtnNeon = styled.button`
  height: 50px;
  cursor: pointer;
  outline: none;
  font-size: 19px;
  padding: 20px 28px;
  border-radius: 18px;
  background: none;
  transition: box-shadow 0.1s;
  color: #ccc;
  border: 4px solid #ccc;
  display: flex;
  align-items: center;

  :hover {
    border: 4px solid #00d9ff;
    color: #00d9ff;
    box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }
`;
