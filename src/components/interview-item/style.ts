import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 33%;
  padding: 15px;
  .inner {
    position: relative;
    padding: 20px;
    background-color: #fff;
    > div {
      margin-bottom: 10px;
    }
    .delete {
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 5px;
      border-radius: 3px;
      transition: all ease 0.2s;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
