import { useMemo, useReducer, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Estrelas from '../../../componentes/Estrelas'


const distanciaMetros = (distancia) => {
    console.log(distanciaMetros)
    return `${distancia}m`
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    //const [selecionado, setSelecionado] = useState(false)

    const [selecionado, inverterSelecao] = useReducer(
        (selecionado) => !selecionado, false
    )

    const distanciaTexto = useMemo(() =>
     distanciaMetros(distancia),[distancia])

    return (
        <TouchableOpacity style={estilos.cartao}
            onPress={inverterSelecao}>
            <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
            <View style={estilos.info}>
                <View>
                    <Text style={estilos.nome}> {nome} </Text>
                    <Estrelas
                        quantidade={estrelas}
                        editavel={selecionado}
                        grande={selecionado}
                    />
                </View>
                <Text style={estilos.distancia} > {distanciaTexto} </Text>
            </View>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        mareginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        //android
        elevation: 4,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16

    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
})




