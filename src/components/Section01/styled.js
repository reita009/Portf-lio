import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 1400px;
  background-color: #13131f;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 950px;
  }

  .up {
    height: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      height: 600px;
    }

    .left {
      width: 100%;
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

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #13131f;
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 768px) {
      padding-left: 255px;
      padding-right: 255px;
    }

    h1 {
      color: #00d9ff;
      font-size: 40px;
      font-family: sans-serif;
      font-weight: bold;
    }
    p {
      font-size: 20px;
      font-weight: bolder;
      text-align: center;
      margin-top: 15px;
      color: #788282;
    }
  }
`;
