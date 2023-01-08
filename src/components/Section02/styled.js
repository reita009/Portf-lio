import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: calc(100vh + 300px);
  background-color: #13131f;
  display: flex;
  flex-direction: column;

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

      p {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 3px;
      }

      .icon {
        font-size: 70px;
        align-items: center;
      }
    }
  }
`;
