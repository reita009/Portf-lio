import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 250px;
  background-color: #13131f;
  border-bottom: 2px solid #00d9ff;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100px;

    padding: 0px 20px 0px 13px;
  }

  .left {
    display: flex;
    width: 50px;
    align-items: center;

    .icon {
      font-size: 50px;
      cursor: pointer;
      color: #00d9ff;
      border-radius: 25px;
      :hover {
        color: #00d9ff;
        box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
        text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
      }
    }
  }

  .mid {
    display: flex;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 30px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    width: 400px;
    justify-content: space-around;
  }
`;
