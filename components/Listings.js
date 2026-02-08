import styles from './Listings.module.css';
import listingsData from '../data/listings.json';

export default function Listings({ searchQuery = "", locationQuery = "" }) {
    const filteredListings = listingsData.filter((business) => {
        const matchesSearch =
            business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            business.category.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesLocation =
            business.address.toLowerCase().includes(locationQuery.toLowerCase());

        return matchesSearch && matchesLocation;
    });

    return (
        <section id="listings" className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--gap-lg)' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: 'var(--gap-sm)' }}>
                        {searchQuery || locationQuery ? 'Search Results' : 'Featured Automotive Experts'}
                    </h2>
                    <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                        {searchQuery || locationQuery
                            ? `Showing results for "${searchQuery}" in "${locationQuery}"`
                            : 'Hand-picked and verified automotive dealerships in Baton Rouge that meet the Louisiana Proud trust standard.'}
                    </p>
                </div>

                {filteredListings.length > 0 ? (
                    <div className={styles.grid}>
                        {filteredListings.map((business) => (
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
                ) : (
                    <div style={{ textAlign: 'center', padding: 'var(--gap-lg)', background: 'var(--surface)', borderRadius: '24px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                        <h3>No results found</h3>
                        <p style={{ color: 'var(--muted)' }}>Try adjusting your search or location filters.</p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{ marginTop: 'var(--gap-sm)', color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
