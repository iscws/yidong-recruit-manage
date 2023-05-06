import styled from 'styled-components';
// interface itemStyleType {
//   width: number;
// }
export const ItemWrapper = styled.div`
  /* width: 33%; */
  margin-bottom: 15px;
  min-width: 300px;
  .inner {
    position: relative;
    padding: 20px;
    background-color: #fff;
    > div {
      margin-bottom: 10px;
    }
    .tips {
      position: absolute;
      left: 0px;
      color: red;
      font-size: 8px;
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

    .btnArea {
      display: flex;
      justify-content: space-between;
    }
  }
`;
