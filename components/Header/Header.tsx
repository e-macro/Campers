import Link from "next/link";
import css from "./Header.module.css";
const Header = () => {
    return (
        <header className={css.header}>            
            <div className={css.container}>
                <nav className={css.nav}>
                    <svg className={css.logo}>
                        <use href="/logo.svg#logo" />
                    </svg>
                    <ul className={css.navList}>
                        <li className={css.navLink}>
                            <Link href="/">Home</Link>
                            </li>
                        <li className={css.navLink}>
                            <Link href='/catalog'>Catalog</Link>
                        </li>
                    </ul>
                    <></>
                </nav>
            </div>
        </header>
    )
}

export default Header