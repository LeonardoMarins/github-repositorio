import { useEffect, useState } from "react";

const Formulario = () => {

    let [materiaA,setMateriaA] = useState(0);
    let [materiaB,setMateriaB] = useState(0);
    let [materiaC,setMateriaC] = useState(0);

    useEffect(() => {
        console.log("o estado mudou");
    }, [materiaA]); // vou executar o console.log apenas quando o nome for alterado

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        }else {
            return (
                <p>Você nao foi aprovado</p>
            )
        }
    }


    return(
        <form action="">
            <ul>
                {[1,2,3,4,5,].map(item => (
                <li key={item}>{item}</li>
            ))}
            </ul>
            <input type="number" placeholder="matera A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="matera B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="matera C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;