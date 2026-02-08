import { useState } from 'react';
import styles from './Hero.module.css';

export default function Hero({ onSearch }) {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(query, location);
        }
    };

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot}></span>
                    The Official Louisiana Trust Network
                </div>
                <h1 className={styles.title}>
                    Find & Connect with <br />
                    <span className="text-gradient">Louisiana's Most Trusted</span> <br />
                    Local Businesses
                </h1>
                <p className={styles.subtitle}>
                    The directory where reputation meets results. We verify, you connect.
                    Built by Louisianians, for Louisianians.
                </p>

                <div className={styles.searchContainer}>
                    <div className={styles.searchInputGroup}>
                        <input
                            type="text"
                            placeholder="What are you looking for? (e.g. Plumber, HVAC)"
                            className={styles.input}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <div className={styles.searchInputGroup}>
                        <input
                            type="text"
                            placeholder="City or Parish"
                            className={styles.input}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <button className={styles.searchButton} onClick={handleSearchClick}>
                        Search Directory
                    </button>
                </div>

                <div className={styles.trustSignals}>
                    <div className={styles.signal}>
                        <strong>500+</strong> Verified Businesses
                    </div>
                    <div className={styles.signal}>
                        <strong>100%</strong> Background Checked
                    </div>
                    <div className={styles.signal}>
                        <strong>24h</strong> Quote Guarantee
                    </div>
                </div>
            </div>
        </section>
    );
}
