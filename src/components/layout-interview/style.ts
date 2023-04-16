import styled from 'styled-components';

export const InterviewWrapper = styled.div`
  .btnbox::after {
    display: table;
    clear: both;
    content: '';
  }
  .select-time {
    margin-bottom: 20px;
    font-weight: 700;
  }
  .next-btn {
    margin: 10px 10px 10px 0;
    width: 100px;
    float: right;
  }
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #968f8f;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    margin: 10px 0;
    user-select: none;
    border-radius: 5px;
  }
`;
