import styled from "styled-components";

import Project01 from "../../assets/Project1.png";

export const Container = styled.section`
  width: 100%;
  padding-bottom: 100px;
  background-color: #13131f;
  display: flex;
  flex-direction: column;

  h1 {
    color: #00d9ff;
    font-size: 40px;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }

  .box-project {
    height: auto;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    .title {
      border-bottom: #00d9ff 3px solid;
      width: 90px;
      h1 {
        font-size: 26px;
        color: white;
      }
    }

    .project {
      margin-top: 35px;
      height: 180px;
      width: 250px;

      background-repeat: no-repeat;
      background-size: 400px;
      background-color: #ccc;
      opacity: 0.7;
      cursor: pointer;
      border-bottom: #00d9ff 3px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: ease-in;
      transition-duration: 0.4s;
      transition-delay: 0s;

      h1 {
        text-shadow: 5px 5px 2px #ccc;
      }

      :hover {
        height: 310px;
      }

      @media (min-width: 768px) {
        height: 310px;
        width: 500px;

        :hover {
          height: 380px;
          width: 560px;
        }
      }
    }
  }
`;
