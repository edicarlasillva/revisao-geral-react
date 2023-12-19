import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const InputStyle = styled.input`
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.colors.inputColor};
  padding: 1rem;
  margin-bottom: 10px;
  width: 800px;

  color: ${({ theme }) => theme.colors.textColor};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.225px;
`

export const ButtonStyle = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border: none;
  cursor: pointer;
  width: 800px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18.75px;
  letter-spacing: 0.5px;

  &:disabled {
    opacity: 0.5;
  }
`
