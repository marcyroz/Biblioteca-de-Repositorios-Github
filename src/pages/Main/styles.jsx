import styled from 'styled-components';



export const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
  /* mudando a cor da fonte de acordo com a propriedade error */
  /* color: ${(props) => (props.error ? 'red' : 'pink')}; */
  font-family: comic sans ms;

  small {
    font-size: 14px;
    color: lightsalmon;
  }
`;
export const Container = styled.div`
max-width: 700px;
background: #fff7f7;border-radius: 4px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
padding: 30px;
/* o auto deixa o elemento sempre centralizado na tela */
margin: 80px auto;

  h1{
    font-size: 19px;
    display: flex;
    flex-direction: row;
    /* deixa os itens dentro do h1 alinhados e na mesma altura */
    align-items: center;

    svg{
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  /* garante que o input e o botão fiuem sempre um ao lado do outro */
  flex-direction: row;

  input{
    /* faz com que ele ocupe todo o espaço possível */
    flex: 1;
    border: 1px solid #eee;
    /* 10px em cima e em baixo e 15 na esquerda e na direita */
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

  }
`;

// colocando o tipo de botão direto no estilo usando attrs(), passado pelo styled-components
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
background: #fd7bbc;
border: 0;
padding: 0 15px;
margin-left: 10px;
border-radius: 5px;

/* essas propriedades garantem que o conteúdo do botão esteja sempre alinhado no centro: */
display:flex;
justify-content: center;
align-items: center;
`; 