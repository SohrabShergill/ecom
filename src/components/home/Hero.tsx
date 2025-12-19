import Link from 'next/link';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <Container className={styles.container}>
                <div className={`${styles.content} animate-fade-in`}>
                    <h1 className={styles.title}>
                        Playful Style for <br />
                        <span className={styles.highlight}>Little Adventures</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Discover our new collection of comfortable, durable, and stylish clothing for kids of all ages.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/new-arrivals">
                            <Button size="lg">Shop New Arrivals</Button>
                        </Link>
                        <Link href="/collections">
                            <Button variant="outline" size="lg">Explore Collections</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};
