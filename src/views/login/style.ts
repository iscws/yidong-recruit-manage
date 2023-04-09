import styled from 'styled-components';

// 样式处理
export const LoginWraaper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .container {
    padding: 30px 40px 0;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 8px 1px #eeeeee;
    border-radius: 10px;
    .ant-form-item-required {
      color: #ffff;
    }
    img {
      width: 180px;
    }
    .title {
      text-align: center;
      padding-bottom: 20px;
      font-size: 20px;
    }
  }

  .bgc {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
