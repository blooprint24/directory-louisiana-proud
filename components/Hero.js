import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import listingsData from '../data/listings.json';

const ALL_CATEGORIES = [
    'Home Services',
    'Professional Services',
    'Automotive',
    'Real Estate',
    'Health & Wellness',
    'Local Retail'
];

const LA_LOCATIONS = [
    'Baton Rouge', 'New Orleans', 'Shreveport', 'Lafayette', 'Lake Charles',
    'Kenner', 'Bossier City', 'Monroe', 'Alexandria', 'Houma',
    'New Iberia', 'Slidell', 'Ruston', 'Hammond', 'Sulphur',
    'Natchitoches', 'Mandeville', 'Gretna', 'Opelousas', 'Zachary',
    'Thibodaux', 'Covington', 'Baker', 'Crowley', 'Minden',
    'Bastrop', 'Morgan City', 'Pineville', 'West Monroe', 'Denham Springs',
    'Bogalusa', 'DeRidder', 'Abbeville', 'St. Gabriel', 'Eunice',
    'Jennings', 'Scott', 'Rayne', 'Harahan', 'Destrehan',
    'Franklin', 'Gonzales', 'Donaldsonville', 'Port Allen', 'Walker',
    'Ponchatoula'
].map(city => ({ type: 'City/Parish', value: city }));

export default function Hero({ onSearch }) {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
    const dropdownRef = useRef(null);
    const locationDropdownRef = useRef(null);

    // Get all unique suggestion candidates
    const suggestionCandidates = [
        ...ALL_CATEGORIES.map(cat => ({ type: 'Category', value: cat })),
        ...listingsData.map(biz => ({ type: 'Business', value: biz.name }))
    ];

    useEffect(() => {
        if (query.length >= 1) {
            const filtered = suggestionCandidates.filter(item =>
                item.value.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 6); // Limit to top 6 suggestions
            setSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [query]);

    useEffect(() => {
        if (location.length >= 1) {
            const filtered = LA_LOCATIONS.filter(item =>
                item.value.toLowerCase().includes(location.toLowerCase())
            ).slice(0, 6);
            setLocationSuggestions(filtered);
            setShowLocationSuggestions(filtered.length > 0);
        } else {
            setLocationSuggestions([]);
            setShowLocationSuggestions(false);
        }
    }, [location]);

    // Close dropdowns on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
            if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target)) {
                setShowLocationSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(query, location);
            setShowSuggestions(false);
            setShowLocationSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.value);
        setShowSuggestions(false);
        if (onSearch) {
            onSearch(suggestion.value, location);
        }
    };

    const handleLocationSuggestionClick = (suggestion) => {
        setLocation(suggestion.value);
        setShowLocationSuggestions(false);
        if (onSearch) {
            onSearch(query, suggestion.value);
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
                    <div className={styles.searchInputGroup} ref={dropdownRef}>
                        <input
                            type="text"
                            placeholder="What are you looking for? (e.g. Plumber, HVAC)"
                            className={styles.input}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => query.length >= 1 && setShowSuggestions(true)}
                        />
                        {showSuggestions && (
                            <div className={styles.dropdown}>
                                {suggestions.map((s, i) => (
                                    <div
                                        key={i}
                                        className={styles.suggestionItem}
                                        onClick={() => handleSuggestionClick(s)}
                                    >
                                        <div className={styles.suggestionText}>{s.value}</div>
                                        <div className={styles.suggestionTag}>{s.type}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.searchInputGroup} ref={locationDropdownRef}>
                        <input
                            type="text"
                            placeholder="City or Parish"
                            className={styles.input}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onFocus={() => location.length >= 1 && setShowLocationSuggestions(true)}
                        />
                        {showLocationSuggestions && (
                            <div className={styles.dropdown}>
                                {locationSuggestions.map((s, i) => (
                                    <div
                                        key={i}
                                        className={styles.suggestionItem}
                                        onClick={() => handleLocationSuggestionClick(s)}
                                    >
                                        <div className={styles.suggestionText}>{s.value}</div>
                                        <div className={styles.suggestionTag}>{s.type}</div>
                                    </div>
                                ))}
                            </div>
                        )}
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
