import styled from '@emotion/styled';

export const Container = styled.div`
  width: 500px;
  margin: 50px auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 25px;
  border: 1px solid #cfd1d4;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
`;

export const Item = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #cfd1d4;

  &:last-child {
    margin-bottom: 0;
  }
`;
