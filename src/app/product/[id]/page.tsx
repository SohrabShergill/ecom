import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Heart, Truck, ShieldCheck } from "lucide-react";
import styles from "./page.module.css";

// Mock Data for a single product
const PRODUCT = {
    id: '1',
    name: 'Floral Summer Dress',
    price: 45.00,
    description: 'A beautiful, lightweight summer dress perfect for sunny days. Made from 100% organic cotton for maximum comfort and breathability. Features a delicate floral pattern and adjustable straps.',
    images: ['#FFD1DC', '#FCE4EC', '#F8BBD0', '#F48FB1'],
    sizes: ['2Y', '3Y', '4Y', '5Y', '6Y'],
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container>
                    <div className={styles.grid}>
                        <div className={styles.galleryColumn}>
                            <ProductGallery images={PRODUCT.images} />
                        </div>

                        <div className={styles.infoColumn}>
                            <div className={styles.header}>
                                <h1 className={styles.title}>{PRODUCT.name}</h1>
                                <p className={styles.price}>${PRODUCT.price.toFixed(2)}</p>
                            </div>

                            <div className={styles.description}>
                                <p>{PRODUCT.description}</p>
                            </div>

                            <div className={styles.options}>
                                <h3 className={styles.optionTitle}>Select Size</h3>
                                <div className={styles.sizeGrid}>
                                    {PRODUCT.sizes.map((size) => (
                                        <button key={size} className={styles.sizeButton}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <Button size="lg" fullWidth>Add to Cart</Button>
                                <button className={styles.wishlistButton} aria-label="Add to wishlist">
                                    <Heart size={24} />
                                </button>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <Truck size={20} />
                                    <span>Free shipping on orders over $50</span>
                                </div>
                                <div className={styles.feature}>
                                    <ShieldCheck size={20} />
                                    <span>30-day return policy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
