import Link from 'next/link';
import { Heart } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category }) => {
    return (
        <div className={`${styles.card} animate-fade-in`}>
            <div className={styles.imageWrapper}>
                <div className={styles.placeholderImage} style={{ backgroundColor: image }}></div>
                <button className={styles.wishlistButton} aria-label="Add to wishlist">
                    <Heart size={18} />
                </button>
                <div className={styles.quickAdd}>
                    <button className={styles.quickAddButton}>Quick Add</button>
                </div>
            </div>
            <div className={styles.details}>
                <span className={styles.category}>{category}</span>
                <Link href={`/product/${id}`} className={styles.nameLink}>
                    <h3 className={styles.name}>{name}</h3>
                </Link>
                <span className={styles.price}>${price.toFixed(2)}</span>
            </div>
        </div>
    );
};
