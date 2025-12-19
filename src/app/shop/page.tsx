import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import styles from "./page.module.css";

// Extended Mock Data
const PRODUCTS = [
    { id: '1', name: 'Floral Summer Dress', price: 45.00, category: 'Girls', image: '#FFD1DC' },
    { id: '2', name: 'Denim Adventure Overalls', price: 38.00, category: 'Boys', image: '#A0C4E8' },
    { id: '3', name: 'Cozy Knit Cardigan', price: 52.00, category: 'Unisex', image: '#E6DCCF' },
    { id: '4', name: 'Striped Cotton Tee', price: 24.00, category: 'Boys', image: '#C1E1C1' },
    { id: '5', name: 'Ruffle Sleeve Blouse', price: 32.00, category: 'Girls', image: '#FCE4EC' },
    { id: '6', name: 'Cargo Shorts', price: 28.00, category: 'Boys', image: '#E6DCCF' },
    { id: '7', name: 'Sun Hat', price: 18.00, category: 'Accessories', image: '#FFF9C4' },
    { id: '8', name: 'Canvas Sneakers', price: 35.00, category: 'Shoes', image: '#E0E0E0' },
];

export default function Shop() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Shop All</h1>
                        <p className={styles.subtitle}>{PRODUCTS.length} products</p>
                    </div>

                    <div className={styles.layout}>
                        <aside className={styles.sidebar}>
                            <div className={styles.filterGroup}>
                                <h3 className={styles.filterTitle}>Category</h3>
                                <ul className={styles.filterList}>
                                    <li><label><input type="checkbox" /> Girls</label></li>
                                    <li><label><input type="checkbox" /> Boys</label></li>
                                    <li><label><input type="checkbox" /> Baby</label></li>
                                    <li><label><input type="checkbox" /> Accessories</label></li>
                                </ul>
                            </div>

                            <div className={styles.filterGroup}>
                                <h3 className={styles.filterTitle}>Size</h3>
                                <ul className={styles.filterList}>
                                    <li><label><input type="checkbox" /> 0-6m</label></li>
                                    <li><label><input type="checkbox" /> 6-12m</label></li>
                                    <li><label><input type="checkbox" /> 1-2y</label></li>
                                    <li><label><input type="checkbox" /> 2-4y</label></li>
                                    <li><label><input type="checkbox" /> 4-6y</label></li>
                                </ul>
                            </div>

                            <div className={styles.filterGroup}>
                                <h3 className={styles.filterTitle}>Color</h3>
                                <div className={styles.colorGrid}>
                                    <button className={styles.colorOption} style={{ backgroundColor: '#FFD1DC' }} aria-label="Pink"></button>
                                    <button className={styles.colorOption} style={{ backgroundColor: '#A0C4E8' }} aria-label="Blue"></button>
                                    <button className={styles.colorOption} style={{ backgroundColor: '#C1E1C1' }} aria-label="Green"></button>
                                    <button className={styles.colorOption} style={{ backgroundColor: '#E6DCCF' }} aria-label="Beige"></button>
                                </div>
                            </div>
                        </aside>

                        <div className={styles.grid}>
                            {PRODUCTS.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
