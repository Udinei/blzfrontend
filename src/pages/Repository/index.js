import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default class Repository extends Component {

    state = {
        repository: {},
        issues: [],
        loading: true,
    };

    async componentDidMount(){
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        // fazendo duas requisições em paralelo e retornando em um array
        const [ repository, issues] = await Promise.all([
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

    render(){
       // const { repository, issues, loading } = this.state;
        return <h1>Repository</h1>;
    }
}


// dentro da propriedade props esta a propriedade match e dentro dela params
/*function Repository({ match }) {
    return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
export default Repository;*/
