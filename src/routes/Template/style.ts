import styled from 'styled-components'

export const TemplateMain = styled.main`
  padding: 15px 5px;

  .arrow {
    width: 35px;
    height: 35px;
    background: #f0f0f0;
    border-radius: 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease-in-out 0s;
  }

  .on {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out 0s;
  }
`
