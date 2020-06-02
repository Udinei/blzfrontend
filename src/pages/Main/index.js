import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';


export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    };

    // carregar os dados do localStorage
    componentDidMount(){
        const repositories = localStorage.getItem('repositories');

        if(repositories){
            this.setState({ repositories: JSON.parse(repositories) }); // parse - converte para objeto
        }
    }

    // salva os dados no localStorage
    componentDidUpdate(_, prevState){
        const { repositories } = this.state;

        // se os dados do state estão diferentes do localStorage, grava dados no localStorage
        if(prevState.repositories !== repositories){
            localStorage.setItem('repositories', JSON.stringify(repositories)); // stringify - converte para string
        }

    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newRepo, repositories } = this.state;

        const response = await api.get(`/repos/${newRepo}`)
        const data = {
            name: response.data.full_name,
        };

        this.setState({
            repositories: [...repositories, data], // copy tudo em repositories e add mais o data
            newRepo: '', // limpando a propriedade do state
            loading: false,
        });
        console.log(response.data);
    }


    render() {
        const { newRepo, repositories, loading } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt /> {/* icone do github */ }
                       Repositórios
                </h1>

                <Form onSubmit={ this.handleSubmit }>
                    <input
                        type="'text"
                        placeholder="Adicionar repositorio"
                        value={ newRepo }
                        onChange={ this.handleInputChange } />

                    <SubmitButton loading={ loading }>
                        { loading ? (
                            <FaSpinner color="#FFF" size={ 14 } />)
                            : (
                                <FaPlus color="#FFF" size={ 14 } />
                            )
                        }
                    </SubmitButton>
                </Form>
                <List>
                    { repositories.map(repository => (
                        <li key={ repository.name }>
                            <span>{ repository.name }</span>
                            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                        </li>
                    )) }
                </List>

            </Container>
        );
    }
}

