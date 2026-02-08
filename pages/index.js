import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Listings from "../components/Listings";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedBusinesses from "../components/FeaturedBusinesses";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleSearch = (query, location) => {
    setSearchQuery(query);
    setLocationQuery(location);

    // Scroll to listings section
    const listingsSection = document.getElementById('listings');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category) => {
    setSearchQuery(category);
    setLocationQuery(""); // Clear location for category browsing

    // Scroll to listings
    const listingsSection = document.getElementById('listings');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Louisiana Proud | Most Trusted Local Business Directory</title>
        <meta name="description" content="Find and connect with verified, high-trust local businesses in Louisiana. From HVAC to Roofing, we bridge the gap between reputation and leads." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero onSearch={handleSearch} />

        <Listings searchQuery={searchQuery} locationQuery={locationQuery} />

        {!searchQuery && !locationQuery && (
          <FeaturedBusinesses />
        )}

        <CategoryGrid onCategoryClick={handleCategoryClick} />

        {/* Trust Section */}
        <section className="section-padding">
          <div className="container" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--gap-xl)',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: 'var(--gap-md)' }}>
                Why Choose <span className="text-gradient">Louisiana Proud?</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
                {[
                  { title: 'Rigorous Verification', desc: 'Every business undergoes a multi-step background and reputation check.' },
                  { title: 'Local Accountability', desc: 'We are based right here in Louisiana. We know these businesses personally.' },
                  { title: 'Hassle-Free Leads', desc: 'Get quotes fast without the spam. Your data is protected by our trust network.' }
                ].map((item) => (
                  <div key={item.title}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--secondary)' }}>✓</span> {item.title}
                    </h4>
                    <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: 'var(--primary)',
              borderRadius: '24px',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ color: 'white', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛡️</div>
                <h3>Louisiana Proud Verified</h3>
                <p style={{ opacity: 0.8 }}>The Diamond Standard of Trust</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: 'var(--primary)', color: 'white', padding: 'var(--gap-xl) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--gap-md)' }}>Louisiana Proud</h2>
          <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto var(--gap-lg)' }}>
            Empowering local businesses and protecting consumers through a network of trust, accountability, and results.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--gap-md)', fontSize: '0.9rem', opacity: 0.5 }}>
            © 2026 Louisiana Proud. All Rights Reserved. Built with Pride in Louisiana.
          </div>
        </div>
      </footer>
    </>
  );
}
