'use client';

import { useState } from 'react';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
    images: string[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className={styles.gallery}>
            <div className={styles.mainImageWrapper}>
                <div
                    className={styles.mainImage}
                    style={{ backgroundColor: images[activeImage] }}
                ></div>
            </div>
            <div className={styles.thumbnails}>
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={`${styles.thumbnail} ${activeImage === index ? styles.active : ''}`}
                        onClick={() => setActiveImage(index)}
                        style={{ backgroundColor: img }}
                        aria-label={`View image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
