import { useState, useEffect } from 'react';
import styles from './Listings.module.css'; // Reusing styles for consistency
import listingsData from '../data/listings.json';

export default function FeaturedBusinesses() {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        // Pick 3 random businesses
        const shuffled = [...listingsData].sort(() => 0.5 - Math.random());
        setFeatured(shuffled.slice(0, 3));
    }, []);

    return (
        <section className="section-padding" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--gap-lg)' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'var(--secondary)',
                        color: 'var(--primary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '1rem'
                    }}>
                        Spotlight
                    </div>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: 'var(--gap-sm)' }}>
                        Louisiana Proud <span className="text-gradient">Highlights</span>
                    </h2>
                    <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Discover exceptional local businesses hand-picked for their reputation and service quality.
                    </p>
                </div>

                <div className={styles.grid}>
                    {featured.map((business) => (
                        <div key={business.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.icon}>{business.image}</div>
                                <div className={styles.verifiedBadge}>
                                    <span className={styles.check}>✓</span> Verified
                                </div>
                            </div>

                            <h3 className={styles.name}>{business.name}</h3>
                            <p className={styles.category}>{business.category}</p>
                            <p className={styles.address}>{business.address}</p>

                            <div className={styles.ratingSection}>
                                <div className={styles.stars}>
                                    {'★'.repeat(Math.floor(business.rating))}
                                    {'☆'.repeat(5 - Math.floor(business.rating))}
                                </div>
                                <span className={styles.ratingText}>
                                    <strong>{business.rating}</strong> ({business.reviews} reviews)
                                </span>
                            </div>

                            <button className={styles.contactButton}>
                                Visit Website
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
