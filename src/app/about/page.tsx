import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import styles from "./page.module.css";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <Container>
                        <h1 className={styles.title}>Our Story</h1>
                        <p className={styles.subtitle}>Crafting childhood memories through playful design.</p>
                    </Container>
                </section>

                <section className={styles.content}>
                    <Container>
                        <div className={styles.grid}>
                            <div className={styles.textBlock}>
                                <h2>The Petitsamy Philosophy</h2>
                                <p>
                                    Founded in 2023, Petitsamy was born out of a simple desire: to create children's clothing that is as durable as it is beautiful. We believe that childhood is a grand adventure, and every outfit should be ready for the journey.
                                </p>
                                <p>
                                    Our designs are inspired by the boundless creativity of children. We use soft, organic fabrics and thoughtful details to ensure that every piece feels as good as it looks.
                                </p>
                            </div>
                            <div className={styles.imagePlaceholder} style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.2 }}>
                                {/* Image of kids playing */}
                            </div>
                        </div>

                        <div className={styles.values}>
                            <div className={styles.value}>
                                <h3>Quality First</h3>
                                <p>We source only the finest materials to ensure our clothes stand the test of time and play.</p>
                            </div>
                            <div className={styles.value}>
                                <h3>Ethically Made</h3>
                                <p>We partner with manufacturers who share our commitment to fair labor and sustainable practices.</p>
                            </div>
                            <div className={styles.value}>
                                <h3>Playful Spirit</h3>
                                <p>Our designs celebrate the joy and wonder of childhood with vibrant colors and fun patterns.</p>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
