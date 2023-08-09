import { useEffect, useState } from "react";

import styles from './Reposlist.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setCarregando(true);
        setDeuErro(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Erro na solicitação');
                }
            })
            .then(resJson => {
                setTimeout(() => {
                    setCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(error => {
                setCarregando(false);
                setDeuErro(true);
            });
    }, [nomeUsuario]);

    return (
        <div className='container'>
            {carregando ? (
                <h1>Carregando...</h1>
            ) : (
                <div>
                    {deuErro ? (
                        <p>Esse usuário não existe, por favor confirmar</p>
                    ) : (
                        <ul className={styles.list}>
                            {repos.map(repositorio => (
                                <li className={styles.listItem} key={repositorio.id}>
                                    <div className={styles.itemName}>
                                        <b>Nome:</b> {repositorio.name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem:</b> {repositorio.language}
                                    </div>
                                    <a className={styles.itemLink} target="_blank" rel="noopener noreferrer" href={repositorio.html_url}>Visitar no GitHub</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default ReposList;
