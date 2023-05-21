import styled from 'styled-components';

const Button = styled.button`
  width:100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #4171b9;
  color: white;
  background: #4171b9;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  @media (min-width: 768px) {
    width: auto;
    background:#84ce71;
  }
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #5085d5;
    border-color: #5085d5;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
