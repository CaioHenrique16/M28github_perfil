import { useState, useEffect } from "react"

const Formulario= () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou');

        return() => {
            console.log('o compenente finalizou')
        }
    }, []);
    
    useEffect(() => {
        console.log('o estado mudou');
    }, [nome]);

    const alterarNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return(
                <p>Olá {nome}, você foi aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return(
        <form>


            <input type="text" placeholder="Seu nome" onChange={alterarNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario