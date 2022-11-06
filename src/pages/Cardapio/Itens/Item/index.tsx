import styles from './Item.module.scss';
import cardapio from '../../../../data/cardapio.json';
import classNames from 'classnames';

type Props = typeof cardapio[0];

export default function Item(props: Props){
  const {title, description, photo, size, serving, price, id, category} = props;
  return(
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo}></img>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]:true,
            [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
          })}>{category.label}
          </div>
          <div className={styles.item__porcao}>
            {size}
          </div>
          <div className={styles.item__qtdpessoas}>
            {serving}
          </div>
          <div className={styles.item__valor}>
                       R$ {price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}