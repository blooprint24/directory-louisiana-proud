import styles from './CategoryGrid.module.css';

const categories = [
    { name: 'Home Services', icon: '🏠' },
    { name: 'Professional Services', icon: '⚖️' },
    { name: 'Automotive', icon: '🚗' },
    { name: 'Real Estate', icon: '🏢' },
    { name: 'Health & Wellness', icon: '🏥' },
    { name: 'Local Retail', icon: '🛍️' }
];

export default function CategoryGrid({ onCategoryClick }) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Browse by Category</h2>
                    <p className={styles.subtitle}>Click a category to find local experts instantly</p>
                </div>

                <div className={styles.grid}>
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            className={styles.card}
                            onClick={() => onCategoryClick(cat.name)}
                        >
                            <div className={styles.icon}>{cat.icon}</div>
                            <h3 className={styles.name}>{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
