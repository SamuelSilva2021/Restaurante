import cardapio from '../../../data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props{
    busca:string,
    filtro: number |null,
    ordenador: string
}
    
export default function Itens(props:Props){
  const [lista, setLista] = useState(cardapio);
  const {busca, filtro, ordenador} = props;

  // Função para testar a busca e não deixar case sensitive, assim o usuário pode pesquisar maiusculo ou minusculo
  function testeBusca(title:string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }
  // Criar uma função pra testar o filtro
  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id;
    return true;
  }
  function ordenar(novaLista: typeof cardapio){
    switch(ordenador){
    case 'porcao':
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista;
    }
  }

  // function tipoOrdenador(lista: typeof cardapio, descricao: 'porcao'|'qtd_pessoas'|'preco'){
  //     return lista.sort((a, b) => a[descricao] > b[descricao] ? 1 : -1)
  // }

  useEffect(()=>{
    const novaLista = cardapio.filter(item => testeBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return(
    <div className={styles.itens}>
      {lista.map(item => (
        <Item 
          key={item.id}
          {...item}              
        />
      ))}
    </div>
  );
}