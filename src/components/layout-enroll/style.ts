import styled from 'styled-components';

export const EnrollWrapper = styled.div`
  text-align: right;
  .area {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* align-items: center; */
    margin-bottom: 10px;
    .search-form {
      display: flex;

      .submit-btn {
        margin-left: 15px;
      }
    }
  }
  .tips {
    display: inline-block;
    margin: 20px 0;
    padding: 10px 10px;
    text-align: left;
    border-radius: 10px;
    color: #fff;
    background-color: rgba(0, 21, 41, 0.7);
    cursor: default;
  }

  .switch {
    margin-top: 10px;
  }
`;
