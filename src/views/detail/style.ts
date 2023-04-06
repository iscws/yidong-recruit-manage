import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  /* background-color: #fff; */
  display: flex;
  .basic-info {
    width: 35%;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 0 8px 1px #eeeeee;
    border-radius: 10px;
  }
  .edit-info {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: 100vh; */
    margin-left: 20px;
    border-radius: 10px;
    .status {
      margin-bottom: 15px;
    }
    .step-area {
      /* height: 10vh; */
      display: flex;
      align-items: center;
    }
  }
`;
