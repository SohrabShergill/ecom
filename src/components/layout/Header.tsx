import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Container } from '../ui/Container';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="Petitsamy Logo"
                            width={140}
                            height={70}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/shop" className={styles.link}>Shop</Link>
                    <Link href="/new-arrivals" className={styles.link}>New Arrivals</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.iconButton} aria-label="Search">
                        <Search size={20} />
                    </button>
                    <Link href="/account" className={styles.iconButton} aria-label="Account">
                        <User size={20} />
                    </Link>
                    <button className={styles.iconButton} aria-label="Cart">
                        <ShoppingBag size={20} />
                        <span className={styles.badge}>0</span>
                    </button>
                </div>
            </Container>
        </header>
    );
};
