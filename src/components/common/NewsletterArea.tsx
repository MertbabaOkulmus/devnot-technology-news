import React from 'react';

const newsletters = [
  {
    id: 1,
    category: "YAZILIM",
    title: "Yazılım Gündemi",
    description: "Haftalık teknik derinlikli makaleler ve yazılım dünyasından sıcak gelişmeler.",
    theme: "#ef4444", 
    bgLight: "rgba(239, 68, 68, 0.12)"
  },
  {
    id: 2,
    category: "ETKİNLİK",
    title: "Konferans & Meetup",
    description: "Tüm topluluk buluşmaları ve konferans duyuruları ilk size gelsin.",
    theme: "#8b5cf6", 
    bgLight: "rgba(139, 92, 246, 0.12)"
  },
  {
    id: 3,
    category: "STRATEJİ",
    title: "Liderler Gündemi",
    description: "Mühendislik yönetimi ve teknoloji liderliği üzerine özel içerikler.",
    theme: "#3b82f6", 
    bgLight: "rgba(59, 130, 246, 0.12)"
  }
];

const NewsletterArea = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --nl-bg: #ffffff;
          --nl-card: #ffffff;
          --nl-border: #eeeeee;
          --nl-title: #1a1a1a;
          --nl-text: #666666;
          --nl-input-bg: #f8f9fa;
          --nl-input-border: #dee2e6;
        }

        /* Projenin tg-theme yapısına tam uyum */
        [tg-theme="dark"] {
          --nl-bg: #0b0e14; /* Alt kısımdaki koyu alanla aynı renk */
          --nl-card: #161b22;
          --nl-border: #30363d;
          --nl-title: #ffffff;
          --nl-text: #a1a1a1;
          --nl-input-bg: #0d1117;
          --nl-input-border: #30363d;
        }

        .newsletter-wrapper {
          padding: 0;
          background-color: var(--nl-bg) !important;
          transition: background-color 0.3s ease;
        }

        /* Başlık Çizgisi Tasarımı */
        .section-title-wrap {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
          position: relative;
        }
        .section-title-wrap h2 {
          white-space: nowrap;
          font-size: 24px;
          font-weight: 700;
          color: var(--nl-title);
          margin: 0;
        }
        .section-title-line {
          height: 1px;
          background: var(--nl-border);
          width: 100%;
        }

        .newsletter-card-custom {
          background-color: var(--nl-card);
          border: 1px solid var(--nl-border);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .category-tag {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 6px 12px;
          border-radius: 6px;
          display: inline-block;
        }

        .input-container-modern {
          position: relative;
          display: flex;
          align-items: center;
          margin-top: auto;
          background-color: var(--nl-input-bg);
          border: 2px solid var(--nl-input-border);
          border-radius: 12px;
          padding: 4px;
        }

        .input-custom {
          width: 100%;
          padding: 10px 12px;
          border: none;
          background: transparent;
          outline: none;
          font-size: 14px;
          color: var(--nl-title);
        }

        .btn-custom {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}} />

      <section className="newsletter-wrapper">
        <div className="container">
          
          {/* Eklenen Başlık Bölümü */}
          <div className="section-title-wrap">
            <h2>Bülten Aboneliği</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="row g-4">
            {newsletters.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="newsletter-card-custom p-4 rounded-4 shadow-sm">
                  <div className="mb-3">
                    <span 
                      className="category-tag" 
                      style={{ backgroundColor: item.bgLight, color: item.theme }}
                    >
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--nl-title)' }}>
                    {item.title}
                  </h3>
                  
                  <p className="mb-4 lh-base" style={{ fontSize: '13.5px', color: 'var(--nl-text)' }}>
                    {item.description}
                  </p>

                  <div className="input-container-modern">
                    <input 
                      type="email" 
                      className="input-custom" 
                      placeholder="E-posta adresiniz"
                    />
                    <button 
                      className="btn-custom"
                      style={{ backgroundColor: item.theme }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterArea;