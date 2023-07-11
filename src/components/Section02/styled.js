import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #13131f;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    height: 100%;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    h1 {
      color: #00d9ff;
      font-size: 40px;
      font-family: sans-serif;
      font-weight: bold;
    }
  }

  .container-icons {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      justify-content: center;
    }

    .skill {
      margin: 15px;
      width: 130px;
      height: 150px;
      background-color: #212121;
      border-radius: 20px 0px 0px 0px;
      border-bottom: 3px solid #00d9ff;
      color: #00d9ff;
      display: flex;
      padding: 5px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: ease-in;
      transition-duration: 0.4s;
      transition-delay: 0s;

      :hover {
        height: 160px;
        width: 140px;
        margin: 0;
        border: 4px solid #00d9ff;
        color: #00d9ff;
        box-shadow: 0px 0px 35px #00d9ff, 0px 0px 15px #00d9ffc0 inset;
        text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
      }

      p {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 3px;
      }
      img {
        height: 70px;
      }

      .icon {
        align-items: center;
      }
    }
  }
`;
