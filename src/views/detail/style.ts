import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 1200px;
  min-height: 400px;
  max-height: 2000px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  /* background-color: #fff; */
  display: flex;
  .basic-info {
    width: 40%;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 0 8px 1px #eeeeee;
    border-radius: 10px;
  }
  .edit-info {
    position: relative;
    width: 45%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* height: 100vh; */
    margin-left: 20px;
    border-radius: 10px;
    .status {
      margin-bottom: 15px;
      height: 140px;
    }
    .step-area {
      /* height: 10vh; */
      display: flex;
      align-items: center;
      margin-bottom: 24px;
    }
  }

  /* 对基本信息的内置样式进行修改 */
  .ant-descriptions-item-label {
    width: 120px;
    text-align: center !important;
  }
`;
