import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff7f7;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  /* o auto deixa o elemento sempre centralizado na tela */
  margin: 80px auto;

  h1 {
    font-size: 19px;
    display: flex;
    flex-direction: row;
    /* deixa os itens dentro do h1 alinhados e na mesma altura */
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;