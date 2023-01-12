import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: #13131f;
  border-bottom: 2px solid #00d9ff;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: #00d9ff solid 3px;

  h1 {
    color: #00d9ff;
    font-size: 40px;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      margin-left: 100px;
    }
  }

  .top-footer {
    margin-top: 40px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .left {
      width: 100%;
      display: flex;
    }

    .right {
      margin-top: 30px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;

      img {
        height: 50px;
        border-radius: 60%;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;

        :hover {
          border: 4px solid #00d9ff;
          color: #00d9ff;
          box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
          text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
        }
      }
    }
  }
`;
