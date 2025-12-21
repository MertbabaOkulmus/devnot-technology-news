import Link from "next/link";
import { Metadata } from "next";
import HeaderThree from "@/layouts/headers/HeaderThree"

export const metadata: Metadata = {
    title: "Reklam ve Sponsorluk | Devnot",
    description: "Devnot platformunda markanızı binlerce yazılımcı ve teknoloji profesyoneli ile buluşturun. Sponsorluk modellerimiz hakkında bilgi alın.",
};

const AdvertisingPage = () => {
    return (
        <main>
            <HeaderThree />

            {/* Ana İçerik */}
            <section className="advertising-details pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">

                            {/* İstatistikler / Neden Devnot? */}
                            <div className="row mb-80 text-center">
                                <div className="col-md-4 mb-30">
                                    <h2 className="fw-bold text-primary">50K+</h2>
                                    <p className="fw-medium">Aylık Tekil Ziyaretçi</p>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <h2 className="fw-bold text-primary">20K+</h2>
                                    <p className="fw-medium">E-Bülten Abonesi</p>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <h2 className="fw-bold text-primary">%100</h2>
                                    <p className="fw-medium">Teknoloji Odaklı Kitle</p>
                                </div>
                            </div>

                            {/* İş Birliği Modelleri */}
                            <section className="mb-80">
                                <h2 className="mb-40 fw-bold text-center">İş Birliği Modellerimiz</h2>
                                <div className="row">
                                    {[
                                        {
                                            title: "İçerik Sponsorluğu",
                                            desc: "Teknoloji ürününüzü veya markanızı tanıtan profesyonel inceleme yazıları ve teknik içerikler.",
                                            icon: "📝"
                                        },
                                        {
                                            title: "Newsletter Reklamları",
                                            desc: "Her hafta binlerce yazılımcının gelen kutusuna düşen e-bültenlerimizde yerinizi alın.",
                                            icon: "📧"
                                        },
                                        {
                                            title: "Banner & Display",
                                            desc: "Portalımızdaki stratejik noktalarda görsel reklamlarınızla görünürlüğünüzü artırın.",
                                            icon: "🖼️"
                                        },
                                        {
                                            title: "Etkinlik Sponsorluğu",
                                            desc: "Düzenlediğimiz webinar ve fiziksel etkinliklerde markanızla topluluk önünde olun.",
                                            icon: "🎙️"
                                        }
                                    ].map((model, idx) => (
                                        <div key={idx} className="col-md-6 mb-30">
                                            <div className="p-4 h-100" style={{ border: '1px solid #eee', borderRadius: '15px', transition: 'all 0.3s ease' }}>
                                                <div style={{ fontSize: '32px' }} className="mb-3">{model.icon}</div>
                                                <h4 className="fw-bold mb-2">{model.title}</h4>
                                                <p className="mb-0" style={{ color: '#666' }}>{model.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Kurumsal Bilgi */}
                            <section className="mb-60 p-5" style={{ backgroundColor: '#111', color: '#fff', borderRadius: '20px' }}>
                                <h3 className="mb-20 text-white">Neden Bizi Tercih Etmelisiniz?</h3>
                                <p className="mb-20" style={{ color: '#ccc', lineHeight: '1.8' }}>
                                    Devnot kitlesi; yazılım mimarları, kıdemli geliştiriciler ve teknoloji karar vericilerinden oluşur.
                                    Reklamlarınız sadece "görüntülenmez", hedeflediğiniz doğru profesyonellere ulaşır.
                                    Sektörel güvenilirliğimiz, markanızın imajına değer katar.
                                </p>
                            </section>

                            {/* İletişim CTA */}
                            <div className="text-center mt-60">
                                <div className="p-5" style={{ border: '2px dashed #007bff', borderRadius: '25px' }}>
                                    <h3 className="mb-15">Medya Kitimizi Talep Edin</h3>
                                    <p className="mb-35">Detaylı istatistikler ve fiyatlandırma seçenekleri için bizimle iletişime geçin.</p>
                                    <Link href="mailto:reklam@devnot.com" className="btn btn-primary btn-lg px-5" style={{ borderRadius: '50px' }}>
                                        Teklif Alın: reklam@devnot.com
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdvertisingPage;