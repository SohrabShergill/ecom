'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Petitsamy
                        </Link>
                        <p className={styles.description}>
                            Quality kids style for every adventure. Playful, stylish, and comfortable clothing for your little ones.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>Shop</h4>
                            <Link href="/shop">All Products</Link>
                            <Link href="/shop?category=girls">Girls</Link>
                            <Link href="/shop?category=boys">Boys</Link>
                            <Link href="/shop?category=baby">Baby</Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>Company</h4>
                            <Link href="/about">About Us</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/careers">Careers</Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>Support</h4>
                            <Link href="/shipping">Shipping</Link>
                            <Link href="/returns">Returns</Link>
                            <Link href="/faq">FAQ</Link>
                            <Link href="/privacy">Privacy Policy</Link>
                        </div>
                    </div>

                    <div className={styles.newsletter}>
                        <h4 className={styles.columnTitle}>Join our Newsletter</h4>
                        <p>Get 10% off your first order and stay updated on new arrivals.</p>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className={styles.input}
                                required
                            />
                            <Button type="submit" variant="primary" size="sm">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Petitsamy Kids Clothing. All rights reserved.</p>
                    <div className={styles.paymentIcons}>
                        {/* Placeholder for payment icons */}
                        <span className={styles.paymentIcon}>Visa</span>
                        <span className={styles.paymentIcon}>Mastercard</span>
                        <span className={styles.paymentIcon}>Amex</span>
                        <span className={styles.paymentIcon}>PayPal</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
