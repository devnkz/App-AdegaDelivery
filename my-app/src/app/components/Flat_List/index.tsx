import { useState, useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Card_Produto } from "./Card_Produtos";
import { Button_Menu } from "../button_menu";
import { useRouter } from "expo-router";
import { Button } from "react-native";

export interface produtoProps {
    id: number,
    nome: String,
    tamanho: String,
    tipo: String,
    modelo: String,
    url_image: string,
    preco: number
}

export function ListProdutos() {

    const router = useRouter();
    const [produtos, setProdutos] = useState<produtoProps[]>([])
    const [tipoProduto, setTipoProduto] = useState<string>('Produtos');
    const [cart, setCart] = useState<produtoProps[]>([]);

    const getProdutos = async () => {
        try {
            const response = await fetch(`http://192.168.1.10:3000/${tipoProduto}`);
            const data: produtoProps[] = await response.json();
            setProdutos(data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        getProdutos();
    }, [tipoProduto]);

    const addToCart = (produto: produtoProps) => {
        setCart(prevCart => [...prevCart, produto]);
        alert("Produto adicionado ao carrinho:" + produto.nome);
    };

    const goToBag = () => {
        const cartString = JSON.stringify(cart)
        router.push({
            pathname: '../user',
            params: { cart: cartString },
        })
    }

    return (
        <>
            <View
                className='w-full p-4 flex items-center'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Button_Menu onPress={() => setTipoProduto('Produtos')} label={'Produtos'} activeCategory={tipoProduto} />
                    <Button_Menu onPress={() => setTipoProduto('cervejas')} label={'Cervejas'} activeCategory={tipoProduto} />
                    <Button_Menu onPress={() => setTipoProduto('whisky')} label={'Whisky'} activeCategory={tipoProduto} />
                    <Button_Menu onPress={() => setTipoProduto('refrigerantes')} label={'Refrigerante'} activeCategory={tipoProduto} />
                    <Button_Menu onPress={() => setTipoProduto('sucos')} label={'Suco'} activeCategory={tipoProduto} />
                </ScrollView>
            </View>
            <FlatList
                scrollEnabled={false}
                data={produtos}
                renderItem={({ item }) => (
                    <View>
                        <Button title="ir para sacola" onPress={goToBag}/>
                        <Card_Produto produto={item} addToCart={addToCart} />
                    </View>
                )}
                contentContainerStyle={{ gap: 12 }}
            />
        </>
    )
}