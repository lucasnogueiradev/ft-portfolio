import styled from "styled-components";

// // Styles Input text
export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  font-size: 2rem;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  background: #e4e4e4;
  &::placeholder {
    color: #b1b1b1;
    font-size: 1.7rem;
  }
  &:focus {
    border-color: none;
    outline: none;
  }
`;
export const Label = styled.label`
  justify-content: start;
  color: #fff;
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
`;
export const Adornment = styled.span`
  font-size: 2rem;

  align-items: center;
  margin: auto;
`;
export const ContainerInput = styled.div`
  background: #e4e4e4;
  border-radius: 10px;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  &:focus-within {
    border-color: #007bff;
    outline: 1px solid rgb(51, 136, 228);
    ${Adornment} {
    }
    color: #007bff;
  }
`;

export const StartAdornment = styled(Adornment)`
  font-size: 1.7rem;
  margin-right: 0.5rem;
  &:focus-within {
    border-color: #007bff;
    outline: 1px solid rgb(51, 136, 228);
  }
`;
