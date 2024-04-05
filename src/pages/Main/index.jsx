// necesário importar o "Component" do react para poder usar as classes
import React, { Component } from 'react';
import Container from '../../components/Container'
import {Form, SubmitButton, List } from './styles';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  state = {
    // armazenando os dados que o usuário está inserindo
    newRepo: '',
    repositories: [],
    loading: false,
  };

  //carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  //salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    //comparação pra ver se o estado de repositórios mudou do estado atual
    if (prevState.repositories != repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  // handleInputChange vai receber o evento
  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      // o fullname, na api do github, contém tanto o nome do usuário quanto do repositório
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading, repositories } = this.state;

    return (
      //   <Title error={false}>
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório..."
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading ? loading + '' : undefined}>
            {/* conditional rendering com if ternário */}
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map((repository) => (
            // o primeiro elemento que vem depois do map precisa de uma propriedade key
            <li key={repository.name}>
              <span>{repository.name}</span>
              {/* substituimos o a href por link to
              incluímos as chaves para transformar em javascript
              o encondeURIComponent serve para transformar a barra do nome do repositório em um caracter especial para não ser entendido como uma "pasta a mais" */}
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
