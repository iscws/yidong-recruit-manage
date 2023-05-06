import styled from 'styled-components';

export const EditWrapper = styled.div`
  .items-area {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1;
    width: 100%;
    padding: 20px;
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
      margin-bottom: -15px;
      display: flex;
      justify-content: space-around;
      flex-direction: wrap;
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
