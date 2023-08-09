import { useEffect, useState } from "react";

import styles from './Reposlist.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [carregando,setCarregando] = useState(true);

    useEffect(() => {
        setCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setCarregando(false);
                    setRepos(resJson);
                },3000)
            })
    }, [nomeUsuario]);

    return (
        <div className='container'>
            {carregando ? (
                <h1>Carregando...</h1>
            ): (
                <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {repositorio.language}
                        </div>
                        <a className={styles.itemLink} target="_black" href={repositorio.html_url}>Visitar no github</a>
                    </li>
                ))}
                <li>Repositorio</li>
            </ul>
            )}
        </div>
    )
}

export default ReposList;