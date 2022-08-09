import styled from "styled-components";

export const Container = styled.section`
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchBox = styled.input`
  height: 50px;
  width: 710px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background-color: #ffffff77;
  color: #6AA2D1;
  font-size: 20px;
  text-indent: 15px;

  :focus {
    outline:0;
  }

  ::placeholder {
    color: #6AA2D1;
    font-size: 20px;
  }
`