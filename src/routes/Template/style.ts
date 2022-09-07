import styled from 'styled-components'

export const TemplateMain = styled.main`
  padding: 15px 5px;

  @media screen and (max-width: 450px) {
    padding: 15px 0;
  }

  .arrow {
    width: 35px;
    height: 35px;
    background: #f0f0f0;
    border-radius: 20px;
    position: fixed;
    bottom: 100px;
    right: 20px;
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease-in-out 0s;
  }

  .on {
    opacity: 0;
    visibility: hidden;
  }
`
