import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Owner, IssuesList } from './styles';
import { Link } from 'react-router-dom';

export default function Repository() {
  const { repository } = useParams();
  //array com posições com resultados constantes de tipos diferentes são chamadas tuplas
  const [repositoryData, setRepositoryData] = useState();
  const [issues, setIssues] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositoryData = async () => {
    //trazendo a barra de volta para ser mostrada no nome
    const repoName = decodeURIComponent(repository);
    setLoading(true);

    const [repositoryData, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          //só aceita issues abertas e retorna 5 issues por página
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    setIssues(issues.data);
    setRepositoryData(repositoryData.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRepositoryData();
  }, [repository]);

  if (loading) {
    return <Loading>Carregando</Loading>;
  }
  return (
    <Container>
      <Owner>
      <Link to="/">Voltar aos repositórios</Link>
        <img
          src={repositoryData?.owner?.avatar_url}
          alt={repositoryData?.owner?.login}
        />
        <h1>{repositoryData?.name}</h1>
        <p>{repositoryData?.description}</p>
      </Owner>
      <IssuesList>
        {issues?.map(issue=> (
          <li key={`${issue.id}`}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            {/* criando uma div para aprimorar a estilização no css */}
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue?.labels.map(label =>(
                  <span key={`${label.id}`}>{label.name}</span>
                ))}

              </strong>
              <p>{issue.user.login}</p>

            </div>

          </li>
        ))}
      </IssuesList>
    </Container>
  );
}
