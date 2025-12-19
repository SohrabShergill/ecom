import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import styles from "./page.module.css";

// Mock Data
const NEW_ARRIVALS = [
  { id: '1', name: 'Floral Summer Dress', price: 45.00, category: 'Girls', image: '#FFD1DC' },
  { id: '2', name: 'Denim Adventure Overalls', price: 38.00, category: 'Boys', image: '#A0C4E8' },
  { id: '3', name: 'Cozy Knit Cardigan', price: 52.00, category: 'Unisex', image: '#E6DCCF' },
  { id: '4', name: 'Striped Cotton Tee', price: 24.00, category: 'Boys', image: '#C1E1C1' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className={styles.section}>
          <Container>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>New Arrivals</h2>
              <p className={styles.sectionSubtitle}>Fresh styles for the season</p>
            </div>

            <div className={styles.productGrid}>
              {NEW_ARRIVALS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.section} style={{ backgroundColor: 'var(--color-cream)' }}>
          <Container>
            <div className={styles.valueProps}>
              <div className={styles.valueProp}>
                <h3>Quality Materials</h3>
                <p>Soft, durable fabrics designed for play.</p>
              </div>
              <div className={styles.valueProp}>
                <h3>Sustainable</h3>
                <p>Eco-friendly production and packaging.</p>
              </div>
              <div className={styles.valueProp}>
                <h3>Comfort First</h3>
                <p>Designed for movement and all-day wear.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
