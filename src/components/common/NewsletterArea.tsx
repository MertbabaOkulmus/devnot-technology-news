"use client";
import React, { useState } from "react";
import { postNewsletter } from "@/services";
import { toast } from "react-toastify";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const newsletters = [
  {
    id: 1,
    category: "YAZILIM",
    title: "Yazılım Gündemi",
    description: "Haftalık teknik derinlikli makaleler ve yazılım dünyasından sıcak gelişmeler.",
    theme: "#ef4444",
    bgLight: "rgba(239, 68, 68, 0.12)",
    apiName: "developer",
  },
  {
    id: 2,
    category: "ETKİNLİK",
    title: "Konferans & Meetup",
    description: "Tüm topluluk buluşmaları ve konferans duyuruları ilk size gelsin.",
    theme: "#8b5cf6",
    bgLight: "rgba(139, 92, 246, 0.12)",
    apiName: "event",
  },
  {
    id: 3,
    category: "STRATEJİ",
    title: "Liderler Gündemi",
    description: "Mühendislik yönetimi ve teknoloji liderliği üzerine özel içerikler.",
    theme: "#3b82f6",
    bgLight: "rgba(59, 130, 246, 0.12)",
    apiName: "leadership",
  },
];

const NewsletterArea = () => {
  const [emailValues, setEmailValues] = useState<{ [key: number]: string }>({});
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const [confirmItem, setConfirmItem] = useState<(typeof newsletters)[0] | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (id: number, value: string) => {
    setEmailValues((prev) => ({ ...prev, [id]: value }));
  };

  const handlePreSubscribe = (item: (typeof newsletters)[0]) => {
    const email = emailValues[item.id];

    if (!email || !email.trim()) {
      toast.warning("Lütfen bir e-posta adresi giriniz.");
      return;
    }

    if (!validateEmail(email)) {
      toast.warning("Lütfen geçerli bir e-posta adresi giriniz. (Örn: ornek@domain.com)");
      return;
    }

    setConfirmItem(item);
  };

  const handleCancel = () => {
    if (confirmItem) {
      setEmailValues((prev) => ({ ...prev, [confirmItem.id]: "" }));
    }
    setConfirmItem(null);
  };

  const handleConfirmSubscribe = async () => {
    if (!confirmItem) return;

    const item = confirmItem;
    const email = emailValues[item.id];

    // Modal kapanış akışını bozmayalım (senin mevcut davranışın)
    setConfirmItem(null);
    setLoadingId(item.id);

    try {
      const payload = {
        email: email,
        newsletterName: item.apiName,
      };

      await postNewsletter(payload);

      toast.success(`${item.title} bültenine başarıyla abone oldunuz!`);
      setEmailValues((prev) => ({ ...prev, [item.id]: "" }));
    } catch (error) {
      console.error("Newsletter error:", error);
      toast.error("Abonelik sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoadingId(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, item: (typeof newsletters)[0]) => {
    if (e.key === "Enter") {
      handlePreSubscribe(item);
    }
  };

  return (
    <>
      <section className="newsletter-wrapper">
        <div className="container">
          <div className="section-title-wrap">
            <h2>Bülten Aboneliği</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="row g-4">
            {newsletters.map((item) => {
              const isCardLoading = loadingId === item.id;

              return (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className={`newsletter-card-custom p-4 rounded-4 shadow-sm ${isCardLoading ? "is-loading" : ""}`}>
                    {/* Shimmer overlay (sadece loading’de görünür) */}
                    <div className="nl-shimmer" aria-hidden="true" />

                    <div className="mb-3">
                      <span className="category-tag" style={{ backgroundColor: item.bgLight, color: item.theme }}>
                        {item.category}
                      </span>
                    </div>

                    <h3 className={`h5 fw-bold mb-3 nl-title ${isCardLoading ? "nl-skeleton-text" : ""}`} style={{ color: "var(--nl-title)" }}>
                      {item.title}
                    </h3>

                    <p
                      className={`mb-4 lh-base nl-desc ${isCardLoading ? "nl-skeleton-text" : ""}`}
                      style={{ fontSize: "13.5px", color: "var(--nl-text)" }}
                    >
                      {item.description}
                    </p>

                    <div className="input-container-modern">
                      <input
                        type="email"
                        className="input-custom"
                        placeholder="E-posta adresiniz"
                        value={emailValues[item.id] || ""}
                        onChange={(e) => handleInputChange(item.id, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, item)}
                        disabled={isCardLoading}
                      />
                      <button
                        className="btn-custom"
                        style={{ backgroundColor: item.theme, opacity: isCardLoading ? 0.7 : 1 }}
                        onClick={() => handlePreSubscribe(item)}
                        disabled={isCardLoading}
                        aria-label="Abone ol"
                      >
                        {isCardLoading ? (
                          <div className="spinner-border spinner-border-sm text-white" role="status">
                            <span className="visually-hidden">...</span>
                          </div>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Modal
        open={!!confirmItem}
        onClose={handleCancel}
        center
        classNames={{
          modal: "custom-modal",
          closeButton: "custom-modal-close",
        }}
      >
        <div className="modal-content-wrapper">
          <h4 className="modal-title">Abonelik Onayı</h4>
          <p className="modal-text">
            <span className="fw-bold">{confirmItem ? emailValues[confirmItem.id] : ""}</span> adresiyle
            <br />
            <span style={{ color: confirmItem?.theme, fontWeight: "bold" }}> {confirmItem?.title} </span>
            bültenine abone olmak istiyor musunuz?
          </p>

          <div className="modal-actions">
            <button className="btn btn-light btn-sm px-4" onClick={()=>setConfirmItem(null)} disabled={!!confirmItem && loadingId === confirmItem.id}>
              Vazgeç
            </button>

            <button
              className="btn btn-primary btn-sm px-4 text-white"
              style={{ backgroundColor: confirmItem?.theme, borderColor: confirmItem?.theme, opacity: confirmItem && loadingId === confirmItem.id ? 0.8 : 1 }}
              onClick={handleConfirmSubscribe}
              disabled={!!confirmItem && loadingId === confirmItem.id}
            >
              {/* Bu akışta modal kapanıyor; yine de küçük bir güvenlik için bıraktım */}
              Onayla
            </button>
          </div>
        </div>
      </Modal>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --nl-bg: #ffffff;
          --nl-card: #ffffff;
          --nl-border: #eeeeee;
          --nl-title: #1a1a1a;
          --nl-text: #666666;
          --nl-input-bg: #f8f9fa;
          --nl-input-border: #dee2e6;
        }

        [tg-theme="dark"] {
          --nl-bg: #0b0e14;
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
          position: relative;
          overflow: hidden;
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
          cursor: pointer;
        }
        .btn-custom:disabled {
          cursor: not-allowed;
        }

        /* --- PREMIUM LOADING (shimmer) --- */
        .newsletter-card-custom .nl-shimmer {
          display: none;
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.10) 45%,
            rgba(255,255,255,0) 85%
          );
          transform: translateX(-100%);
          animation: nl-shimmer 1.2s linear infinite;
          pointer-events: none;
          z-index: 5;
        }

        [tg-theme="dark"] .newsletter-card-custom .nl-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.06) 45%,
            rgba(255,255,255,0) 85%
          );
        }

        @keyframes nl-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .newsletter-card-custom.is-loading .nl-shimmer {
          display: block;
        }

        .newsletter-card-custom.is-loading {
          cursor: progress;
        }

        /* loading'de içerik biraz “iskelet” gibi görünsün */
        .newsletter-card-custom.is-loading .nl-skeleton-text {
          color: transparent !important;
          position: relative;
        }

        .newsletter-card-custom.is-loading .nl-title,
        .newsletter-card-custom.is-loading .nl-desc {
          border-radius: 10px;
          background: rgba(255,255,255,0.10);
        }

        [tg-theme="dark"] .newsletter-card-custom.is-loading .nl-title,
        [tg-theme="dark"] .newsletter-card-custom.is-loading .nl-desc {
          background: rgba(255,255,255,0.07);
        }

        .newsletter-card-custom.is-loading .nl-title {
          height: 24px;
        }

        .newsletter-card-custom.is-loading .nl-desc {
          height: 48px;
        }

        .newsletter-card-custom.is-loading .input-container-modern {
          opacity: 0.75;
        }

        /* Toastify Customization */
        .Toastify__toast-container {
          z-index: 999999 !important;
        }
        .Toastify__toast {
          background-color: #2c3e50 !important;
          color: #ffffff !important;
          border-radius: 8px !important;
        }
        .Toastify__close-button {
          color: #ffffff !important;
          opacity: 0.8;
        }
        .Toastify__progress-bar {
          background: rgba(255,255,255,0.7) !important;
        }

        /* Modal Customization */
        .custom-modal {
          background-color: var(--nl-card) !important;
          color: var(--nl-title) !important;
          border-radius: 16px !important;
          padding: 30px !important;
          border: 1px solid var(--nl-border);
          max-width: 450px !important;
          width: 100%;
        }

        .custom-modal-close {
          fill: var(--nl-text) !important;
        }
        .custom-modal-close:hover {
          fill: var(--nl-title) !important;
        }

        .modal-content-wrapper {
          text-align: center;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--nl-title);
        }

        .modal-text {
          font-size: 15px;
          color: var(--nl-text);
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        @media (max-width: 576px) {
          .custom-modal {
            padding: 20px !important;
            width: 90% !important;
            margin: 0 auto !important;
            border-radius: 12px !important;
          }
          .modal-title {
            font-size: 18px;
          }
          .modal-text {
            font-size: 13.5px;
            margin-bottom: 20px;
          }
        }
      `,
        }}
      />
    </>
  );
};

export default NewsletterArea;