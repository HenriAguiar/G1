import { useState, useContext, useEffect, createContext } from 'react';
const AppContext = createContext();

export function AppProvider({
    children,
    onAdicionarProduto,
    onRemoverProduto,
    onEditarProduto,
    onSelecionarProduto,
}){

    const produtos = [{ Id: 1, Titulo: 'Memoria ram ddr5 16gb', Valor: 'R$ 400,00', Descricao: 'uma memoria muito boa, compre' },
    { Id: 2, Titulo: 'Ssd nvme gen 4 m2 1tb', Valor: 'R$ 500,00', Descricao: 'seria um otimo presente de aniversário' }];
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0)
    useEffect(() => {
        obterSoma();
    }, [carrinho]);
    const adicionarProduto = (id) => {
        const produto = produtos.find((produto) => produto.Id===id);
        if (produto){
        const lista = [...carrinho, produto];
        setCarrinho(lista);
    }
    };
    const removerProduto = (id) => {
        const index = carrinho.findIndex(produto => produto.Id === id);
        
        if (index !== -1) {
            const novoCarrinho = [...carrinho];
            novoCarrinho.splice(index, 1);
            setCarrinho(novoCarrinho);
            
        }
    };
    const obterSoma = () => {
        let total = 0;
        for (let item of carrinho) {
            const valorLimpo = parseFloat(item.Valor.replace('R$ ', '').replace(',', '.'));
            total += valorLimpo;
        }
        setTotal(total)
    };

    return (
        <AppContext.Provider
          value={{
            produtos,
            adicionarProduto,
            removerProduto,
            obterSoma,
            total,
            carrinho
          }}>
          {children}
        </AppContext.Provider>
      );
}
export const useAppContext = () => useContext(AppContext);