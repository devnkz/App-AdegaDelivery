import { useState, createContext, useContext } from "react";
import { produtoProps } from "../Flat_List";
import { useRouter } from "expo-router";

interface CartContextType {
    cart: produtoProps[],
    addToCart: (product: produtoProps) => void;
    goToBag: (router: any) => void;
}

const BagContext = createContext<CartContextType | undefined>(undefined);

export const BagProvider = ({ children }) => {

    const router = useRouter();

    const [cart, setCart] = useState<produtoProps[]>([]);

    const addToCart = (produto: produtoProps) => {
        const produtoInCart = cart.some(item => item.id === produto.id);
        if (!produtoInCart) {
            setCart(prevCart => [...prevCart, produto]);
            alert("Produto adicionado ao carrinho:" + produto.nome);
        }
        else {
            alert('produto ja adicionado');
        }
    };

    const goToBag = () => {
        const cartString = JSON.stringify(cart)
        router.push({
            pathname: '../user',
            params: { cart: cartString },
        })
    };

    return (
        <BagContext.Provider value={{ cart, addToCart, goToBag }}>
            {children}
        </BagContext.Provider>
    );
};

export const useBag = () => useContext(BagContext);