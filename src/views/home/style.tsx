import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .sliderArea {
    position: fixed;
    top: 0;
    left: 0;
    /* overflow-y: auto; */
    z-index: 99;
    height: 100vh;
  }
  .sliderFake {
    opacity: 0;
    z-index: -1;
  }
`;
