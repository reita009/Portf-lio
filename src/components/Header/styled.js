import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
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

  .desktop {
    display: none;
    align-items: center;
    width: 400px;
    flex-direction: column;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      .btn-whrap {
        width: 150px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
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

      @media (min-width: 768px) {
        display: none;
      }
    }

    .react-icon {
      height: 50px;
      margin-left: 30px;
      cursor: pointer;
      color: #00d9ff;
      border-radius: 25px;
      :hover {
        color: #00d9ff;
        box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
        text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
      }
      @media (max-width: 768px) {
        display: none;
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
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
    .btn-whrap {
      width: 100%;
      margin-top: 4px;
      @media (min-width: 768px) {
        width: 150px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
`;
