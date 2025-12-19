'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./page.module.css";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Contact Us</h1>
                        <p className={styles.subtitle}>We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>hello@petitsamy.com</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Studio</h3>
                                    <p>123 Playful Lane, Suite 100<br />Creative City, NY 10001</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formWrapper}>
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" placeholder="Your name" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="Your email" required />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" placeholder="How can we help?" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={6} placeholder="Your message..." required></textarea>
                                </div>
                                <Button type="submit" size="lg">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
