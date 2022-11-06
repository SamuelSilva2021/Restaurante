import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];
export default function Sobre(){
    return (
        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>
            <div className={styles.sobreNos}>
                <img src={casa} alt='Casa do Samuca'/>
                <div className={styles.sobreNos__texto}>
                    <p>
                        Oferecemos a vocês queridos clientes o que há de melhor na culinária internacional.
                    </p>
                    <p>
                        Pratos diferenciados com um toque de amor e carinho para os nossos clientes.
                    </p>
                    <p>
                        Contamos com profissionais dedicados, que estudam os melhores sabores e combinações para te surpreender.
                    </p>
                </div>
            </div>
            <div className={styles.imagens}>
                    {imagens.map((imagem, index) => (
                        <div key={index} className={styles.imagens__imagem}>
                            <img src={imagem} alt="Imagem massa" />
                        </div>
                    ))}
                </div>
        </section>
    );
}