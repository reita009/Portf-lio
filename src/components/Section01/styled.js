import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 900px;
  background-color: #13131f;
  display: flex;

  .up {
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .left {
      width: 100%;
      height: 100%;
      display: flex;
      margin-left: auto;
      margin-right: auto;

      .mySelf {
        height: 300px;
        width: 400px;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: 768px) {
          margin-left: 130px;
          margin-top: 180px;
        }

        h1 {
          font-size: 44px;
          font-family: sans-serif;
          font-weight: bold;
          color: white;
          span {
            color: #00d9ff;
          }
        }
        p {
          font-size: 27px;
          color: #ccc;
        }
        .btn-group {
          width: 350px;
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }
      }
    }

    .right {
      height: 100%;
      width: 100%;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      .avatar {
        width: 400px;
        height: 400px;
        background-color: #00d9ff;
        margin-left: auto;
        margin-right: auto;
        margin-top: 80px;
        border-radius: 65% 35% 70% 30% / 29% 30% 70% 71%;
        display: flex;

        img {
          width: 350px;
          height: 400px;
          border-radius: 65% 35% 70% 30% / 29% 30% 70% 71%;
          margin-top: auto;
          margin-left: 10px;
          object-fit: cover;
        }
      }
    }
  }
`;
