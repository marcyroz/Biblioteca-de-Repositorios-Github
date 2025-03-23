import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../../components/Container';
import { Loading, Owner, IssuesList } from './styles';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer SEU_TOKEN_AQUI`,
  },
});

export default function Repository() {
  const { repository } = useParams();
  const [repositoryData, setRepositoryData] = useState(null);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositoryData = async () => {
      const repoName = decodeURIComponent(repository);

      try {
        const [repoResponse, issuesResponse] = await Promise.all([
          api.get(`/repos/${repoName}`),
          api.get(`/repos/${repoName}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
            },
          }),
        ]);

        setRepositoryData(repoResponse.data);
        setIssues(issuesResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados do repositório:', error);
      } finally {
        setLoading(false);
      }
    };

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
          src={repositoryData.owner.avatar_url}
          alt={repositoryData.owner.login}
        />
        <h1>{repositoryData.name}</h1>
        <p>{repositoryData.description}</p>
      </Owner>
      <IssuesList>
        {issues.map((issue) => (
          <li key={issue.id}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map((label) => (
                  <span key={label.id}>{label.name}</span>
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
