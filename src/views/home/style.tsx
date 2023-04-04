import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .logo-area {
    margin: 30px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70%;
    }
  }
  .sliderArea {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
`;
