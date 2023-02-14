import { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores({ topo: Topo }) {
    const [titulo, setTitulo] = useState('')
    const [lista, setLista] = useState([])

    useEffect(() => {
        const retorno = carregaProdutores()
        setTitulo(retorno.titulo)
        setLista(retorno.lista)


    }, [])

    const topoLista = () => {
        return (
            <>
                <Topo />
                <Text style={estilos.tituloS}> {titulo} </Text>
            </>
        )
    }

    return (
        <FlatList data={lista}
            renderItem={({ item: { nome } }) => <Text> {nome} </Text>}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={topoLista} />

    )
}
const estilos = StyleSheet.create({
    tituloS: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
}) 
