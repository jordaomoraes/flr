import styles from './styles.module.scss'

import Link from 'next/link';
import { useRouter } from 'next/router';


export function Header() {

const { asPath } = useRouter();


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo_novo.png" alt="logo FLR"></img>

        <nav>                    
            <Link href="/Contabilidade"><a className={styles.active}>Contabilidade</a></Link>
            <Link href="/Pericia"><a className={styles.active}>Pericia</a></Link>
            <Link href="/Pericia"><a className={styles.active}>Regularização Obras</a></Link>
            <Link href="/Pericia"><a className={styles.active}>Curso / Mentoria</a></Link>
            <Link href="/Downloads"><a className={styles.active}>Downloads</a></Link>
            <Link href="/Contato"><a className={styles.active}>Contato</a></Link>
            <Link href="/QuemSou"><a className={styles.active}>Quem Sou</a></Link>
        </nav>
      </div>
    </header>
  );
}
