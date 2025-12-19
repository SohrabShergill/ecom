import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export default function CheckoutPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container>
                    <h1 className={styles.title}>Checkout</h1>

                    <div className={styles.grid}>
                        <div className={styles.forms}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Contact Information</h2>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="you@example.com" required />
                                </div>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Shipping Address</h2>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" required />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" required />
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="city">City</label>
                                        <input type="text" id="city" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="zip">ZIP / Postal Code</label>
                                        <input type="text" id="zip" required />
                                    </div>
                                </div>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Payment</h2>
                                <div className={styles.paymentOptions}>
                                    <label className={styles.paymentOption}>
                                        <input type="radio" name="payment" defaultChecked />
                                        <span>Credit Card</span>
                                    </label>
                                    <label className={styles.paymentOption}>
                                        <input type="radio" name="payment" />
                                        <span>PayPal</span>
                                    </label>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cardNum">Card Number</label>
                                    <input type="text" id="cardNum" placeholder="0000 0000 0000 0000" required />
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="expiry">Expiry Date</label>
                                        <input type="text" id="expiry" placeholder="MM/YY" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="cvc">CVC</label>
                                        <input type="text" id="cvc" placeholder="123" required />
                                    </div>
                                </div>
                            </section>

                            <Button size="lg" fullWidth className={styles.submitButton}>Complete Purchase</Button>
                        </div>

                        <aside className={styles.summary}>
                            <div className={styles.summaryCard}>
                                <h2 className={styles.summaryTitle}>Order Summary</h2>
                                <div className={styles.summaryItems}>
                                    <div className={styles.summaryItem}>
                                        <span>Floral Summer Dress (x1)</span>
                                        <span>$45.00</span>
                                    </div>
                                    <div className={styles.summaryItem}>
                                        <span>Subtotal</span>
                                        <span>$45.00</span>
                                    </div>
                                    <div className={styles.summaryItem}>
                                        <span>Shipping</span>
                                        <span>$5.00</span>
                                    </div>
                                    <div className={`${styles.summaryItem} ${styles.total}`}>
                                        <span>Total</span>
                                        <span>$50.00</span>
                                    </div>
                                </div>
                                <div className={styles.promo}>
                                    <input type="text" placeholder="Promo code" />
                                    <Button variant="outline" size="sm">Apply</Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
