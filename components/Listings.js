import styles from './Listings.module.css';
import listingsData from '../data/listings.json';

export default function Listings() {
    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--gap-lg)' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: 'var(--gap-sm)' }}>
                        Featured <span className="text-gradient">Automotive Experts</span>
                    </h2>
                    <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Hand-picked and verified automotive dealerships in Baton Rouge that meet the Louisiana Proud trust standard.
                    </p>
                </div>

                <div className={styles.grid}>
                    {listingsData.map((business) => (
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
