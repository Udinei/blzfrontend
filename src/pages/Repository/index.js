import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Container from '../../components/Container';

import { Loading, Owner, IssueList } from './styles';

// import { Container } from './styles';

export default class Repository extends Component {
    // validando propriedades criadas pelo react, todas são requeridas
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            }),
        }).isRequired,
    };

    state = {
        repository: {},
        issues: [],
        loading: true,
    };

    async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        // fazendo duas requisições em paralelo e retornando em um array
        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {    // passado com query params para url - recurso do axios para passar parametros
                    state: 'open',  // itens abertos no issues no github
                    per_page: 5,     // retorna 5 itens por pagina
                }
            })
        ]);

        // ao carregar seta variaveis do state
        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
        });

        console.log(repository);
        console.log(issues);
        // api.github.com/repos/recketseat/unform/issues
    }

    render() {
        const { repository, issues, loading } = this.state;



        if (loading) {
            console.log('teste ' + loading);
            return <Loading>Carregando</Loading>

            //setTimeout(900);
        }


        return <Container>
            <Owner>
                <Link to="/">Voltar aos repositórios</Link>
                <img src={ repository.owner.avatar_url } alt={ repository.owner.login } />
                <h1>{ repository.name }</h1>
                <p>{ repository.description }</p>
            </Owner>
            <IssueList>
                { issues.map(issue => (
                    <li key={ String(issue.id) }> {/** converte id para string */ }
                        <img src={ issue.user.avatar_url } alt={ issue.user.login } />
                        <div>
                            <strong>
                                <a href={ issue.html_url }>{ issue.title }</a>
                                { issue.labels.map(label =>(
                                    <span key={String(label.id)}>{label.name}</span>
                                )) }
                            </strong>
                            <p>{ issue.user.login }</p>
                        </div>
                    </li>
                )) }
            </IssueList>
        </Container>;
    }
}


// dentro da propriedade props esta a propriedade match e dentro dela params
/*function Repository({ match }) {
    return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
export default Repository;*/
