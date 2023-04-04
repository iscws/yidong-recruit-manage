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
    /* height: 100vh; */
    margin-left: 20px;
    /* background-color: #fff;
    box-shadow: 0 0 8px 1px #eeeeee; */
    border-radius: 10px;
    .asses-box {
      margin-top: 20px;
      background-color: #fff;
      .title {
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 56px;
        margin-bottom: -1px;
        padding: 0 24px;
        color: rgba(0, 0, 0, 0.88);
        font-weight: 600;
        font-size: 16px;
        border-bottom: 1px solid #f0f0f0;
      }
      .assess-area {
        padding: 20px;
        position: relative;
        .ant-form-item {
        }
      }
    }
    .assess-area {
      height: 100%;
      position: relative;
    }
  }
`;
