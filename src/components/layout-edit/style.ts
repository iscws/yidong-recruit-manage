import styled from 'styled-components';

export const EditWrapper = styled.div`
  .items-area {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .items-header {
    display: flex;
    align-items: center;
    margin: 0 25px 0 20px;
    padding: 10px 10px;
    background-color: #fff;
    border-radius: 10px;
    .timeForm {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
    }
  }

  .emptyArea {
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    background-color: #fff;
    .button {
      width: 100px;
      margin-top: 15px;
    }
  }
`;
