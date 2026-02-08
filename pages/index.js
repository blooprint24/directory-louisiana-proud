import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
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
        <Hero />

        {/* Category Grid Section */}
        <section className="section-padding" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--gap-lg)' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: 'var(--gap-sm)' }}>
                Browse by Category
              </h2>
              <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                Quickly find the help you need from our pre-vetted network of local experts.
              </p>
            </div>

            {/* Grid Placeholder - To be implemented as a component */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--gap-md)'
            }}>
              {['Home Services', 'Professional Services', 'Automotive', 'Real Estate', 'Health & Wellness', 'Local Retail'].map((cat) => (
                <div key={cat} style={{
                  background: 'white',
                  padding: 'var(--gap-md)',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--surface)',
                    borderRadius: '12px',
                    margin: '0 auto var(--gap-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    🏛️
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{cat}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>150+ Verified Businesses</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
