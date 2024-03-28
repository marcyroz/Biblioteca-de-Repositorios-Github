import React from 'react';
import { Title } from './styles';
import { Container, Form, SubmitButton } from './styles';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

export default function Main() {
  return (
    //   <Title error={false}>
    <Container>
      <h1>
        <FaGithubAlt />
        Reposiórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório..." />
        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
