import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";

import imgUgur from "@/assets/img/team/ugur-umutluoglu.jpg";
import imgZeynep from "@/assets/img/team/zeynep-yildiz.jpg";
import imgAnil from "@/assets/img/team/anil-yilmaz.jpg";
import imgAynur from "@/assets/img/team/aynur-katircioglu.jpg";
import imgEmine from "@/assets/img/team/emine-cihan.jpg";
import imgFadil from "@/assets/img/team/fadil-basaran.jpg";
import imgFurkan from "@/assets/img/team/furkan-yuksel.jpg";
import imgAhmet from "@/assets/img/team/ahmet-burak-kucuk.jpg";
import imgMert from "@/assets/img/team/mertbaba-okulmus.jpg";
import imgSeda from "@/assets/img/team/seda-nur-kilinc.jpg";
import imgSongul from "@/assets/img/team/songul-ersoy-koc.jpg";
import imgMelisa from "@/assets/img/team/melisa-nur-kaya.jpg";
import imgBahattin from "@/assets/img/team/bahattin-koc.jpg";
import imgBaris from "@/assets/img/team/baris-yilmaz.jpg";
import imgGamze from "@/assets/img/team/gamze-yapici.jpg";
import imgDilara from "@/assets/img/team/dilara-tekin.jpg";
import imgYusuf from "@/assets/img/team/yusuf-yildiz.jpg";
import imgEda from "@/assets/img/team/eda-kas.jpg";
import imgDicle from "@/assets/img/team/dicle-demir.jpg";
import imgYunus from "@/assets/img/team/yunus-sengun.jpg";
import imgBetul from "@/assets/img/team/betul-sengun.jpg";

export const metadata: Metadata = {
  title: "Organizasyon Ekibi | Devnot",
  description: "Devnot'un arkasındaki tutkulu ekip ile tanışın.",
};

const TeamPage = () => {
  // Statik Ekip Verisi
  const teamMembers = [
    {
      id: 1,
      name: "Uğur Umutluoğlu",
      role: "Kurucu, Organizatör",
      avatarUrl: imgUgur,
      social: { linkedin: "https://linkedin.com/in/ugurumutluoglu/", twitter: "https://x.com/umutluoglu" },
    },
    {
      id: 2,
      name: "Ahmet Burak Küçük",
      role: "Üye",
      avatarUrl: imgAhmet,
      social: { linkedin: "https://www.linkedin.com/in/abkucuk/", twitter: "#" },
    },
    {
      id: 3,
      name: "Anıl Yılmaz",
      role: "Üye",
      avatarUrl: imgAnil,
      social: { linkedin: "https://www.linkedin.com/in/anilyilmazz/", twitter: "#" },
    },
    {
      id: 4,
      name: "Aynur Katırcıoğlu",
      role: "Üye",
      avatarUrl: imgAynur,
      social: { linkedin: "https://www.linkedin.com/in/aynrkatircioglu/", twitter: "#" },
    },
    {
      id: 5,
      name: "Barış Albayrak",
      role: "Üye",
      avatarUrl: imgBaris,
      social: { linkedin: "https://www.linkedin.com/in/baris-albayrak/", twitter: "#" },
    },
    {
      id: 6,
      name: "Emine Cihan",
      role: "Üye",
      avatarUrl: imgEmine,
      social: { linkedin: "https://www.linkedin.com/in/emine-cihan-62541869/", twitter: "#" },
    },
    {
      id: 7,
      name: "Furkan Yüksel",
      role: "Üye",
      avatarUrl: imgFurkan,
      social: { linkedin: "https://www.linkedin.com/in/furkan-y%C3%BCksel-7aa891154/", twitter: "#" },
    },
    {
      id: 8,
      name: "Melisa Nur Kaya",
      role: "Üye, Sunucu",
      avatarUrl: imgMelisa,
      social: { linkedin: "https://www.linkedin.com/in/melisanurkaya/", twitter: "#" },
    },
    {
      id: 9,
      name: "Mertbaba Okulmuş",
      role: "Üye, Web Developer",
      avatarUrl: imgMert,
      social: { linkedin: "https://www.linkedin.com/in/mertbabaokulmus/", twitter: "#" },
    },
    {
      id: 10,
      name: "Gamze Yapıcı",
      role: "Üye",
      avatarUrl: imgGamze,
      social: { linkedin: "https://www.linkedin.com/in/gamzeyapici/", twitter: "#" },
    },
    {
      id: 11,
      name: "Bahattin Koç",
      role: "Üye",
      avatarUrl: imgBahattin,
      social: { linkedin: "https://www.linkedin.com/in/uikit/", twitter: "#" },
    },
    {
      id: 12,
      name: "Fadıl Başaran",
      role: "Üye",
      avatarUrl: imgFadil,
      social: { linkedin: "https://www.linkedin.com/in/fadilbasaran/", twitter: "#" },
    },
    {
      id: 13,
      name: "Seda Nur Kılınç",
      role: "Üye",
      avatarUrl: imgSeda,
      social: { linkedin: "https://www.linkedin.com/in/seda-nur-kilinc/", twitter: "#" },
    },
    {
      id: 14,
      name: "Songül Ersoy Koç",
      role: "Üye",
      avatarUrl: imgSongul,
      social: { linkedin: "https://www.linkedin.com/in/songulersoy/", twitter: "#" },
    },
    {
      id: 15,
      name: "Zeynep Yıldız",
      role: "Üye",
      avatarUrl: imgZeynep,
      social: { linkedin: "https://www.linkedin.com/in/zeynep-yildiz/", twitter: "#" },
    },
    {
      id: 16,
      name: "Dilara Tekin",
      role: "Üye",
      avatarUrl: imgDilara,
      social: { linkedin: "https://www.linkedin.com/in/dilaratekin/", twitter: "#" },
    },
    {
      id: 17,
      name: "Eda Kaş",
      role: "Üye",
      avatarUrl: imgEda,
      social: { linkedin: "#", twitter: "#" },
    },
    {
      id: 18,
      name: "Dicle Demir",
      role: "Üye",
      avatarUrl: imgDicle,
      social: { linkedin: "https://www.linkedin.com/in/dicle-demir/", twitter: "#" },
    },
    {
      id: 19,
      name: "Yunus Şengün",
      role: "Üye",
      avatarUrl: imgYunus,
      social: { linkedin: "https://www.linkedin.com/in/yunussengun/", twitter: "#" },
    },
    {
      id: 20,
      name: "Yusuf Yıldız",
      role: "Üye",
      avatarUrl: imgYusuf,
      social: { linkedin: "https://www.linkedin.com/in/yusuf-yldz/", twitter: "#" },
    },
    {
      id: 21,
      name: "Betül Şengün",
      role: "Üye, Sosyal Medya Sorumlusu",
      avatarUrl: imgBetul,
      social: { linkedin: "https://www.linkedin.com/in/betlkasmcan/", twitter: "#" },
    },
  ];

  const sortedTeamMembers = [...teamMembers].sort((a, b) => {
    // 1. Kural: id'si 1 olan eleman her zaman en üstte kalmalı
    if (a.id === 1) return -1;
    if (b.id === 1) return 1;

    // 2. Kural: Diğer elemanları isimlerine göre (Türkçe karakter duyarlı) sırala
    return a.name.localeCompare(b.name, "tr", { sensitivity: "base" });
  });

  const defaultAvatar = "/assets/img/images/author_img.png";

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderThree />

      <main style={{ backgroundColor: "var(--team-bg)", flex: "1 0 auto" }}>
        {/* --- MİNİMAL BAŞLIK ALANI --- */}
        <section className="pt-80 pb-60">
          <div className="container text-center">

            <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3.5rem', letterSpacing: '-1.5px' }}>
              Organizasyon Ekibi
            </h1>
            <p className="text-muted mx-auto" style={{ fontSize: '1.1rem', maxWidth: '700px', lineHeight: '1.6' }}>
              Devnot, Türkiye yazılım ekosistemini ileriye taşımak için gönüllü ve profesyonel bir ekibin omuzlarında yükseliyor.
            </p>
          </div>
        </section>

        {/* --- EKİP GRİD ALANI --- */}
        <section className="pb-100">
          <div className="container">
            <div className="row justify-content-center g-4">
              {sortedTeamMembers.map((member) => (
                <div key={member.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className="team-card p-4 h-100 text-center"
                    style={{
                      border: "1px solid var(--team-card-border)",
                      borderRadius: "24px",
                      backgroundColor: "var(--team-card-bg)",
                      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    }}
                  >
                    {/* Avatar (Squircle & Tilt Effect) */}
                    <div className="mx-auto mb-4 position-relative" style={{ width: "140px", height: "140px" }}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "40px",
                          overflow: "hidden",
                          transform: "rotate(-3deg)",
                          border: "4px solid var(--team-avatar-border)",
                        }}
                      >
                        <Image
                          src={member.avatarUrl || defaultAvatar}
                          alt={member.name}
                          fill
                          style={{ objectFit: "cover", transform: "rotate(3deg) scale(1.1)" }}
                        />
                      </div>
                    </div>

                    {/* Bilgiler */}
                    <h3 className="mb-1" style={{ fontSize: "22px", fontWeight: "800", color: "var(--team-name)" }}>
                      {member.name}
                    </h3>

                    <p className="text-primary fw-medium mb-3" style={{ fontSize: "15px" }}>
                      {member.role}
                    </p>

                    {/* Sosyal Medya */}
                    <div className="d-flex justify-content-center gap-3 mt-3 pt-3 border-top">
                      <Link href={member.social.linkedin} target="_blank" className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --team-bg: #ffffff;

                --team-title: #1a1a1a;
                --team-name: #1a1a1a;
                --team-muted: #6b7280;

                --team-card-bg: #ffffff;
                --team-card-border: #f0f0f0;
                --team-avatar-border: #f8f9fa;

                --team-social-bg: #f8f9fa;
                --team-social-text: #555555;
                --team-social-hover-bg: #007bff;
                --team-social-hover-text: #ffffff;

                --team-hover-shadow: 0 20px 40px rgba(0,0,0,0.08);
                --team-hover-border: #007bff55;
              }

              [tg-theme="dark"] {
                --team-bg: #0b0e14;

                --team-title: #ffffff;
                --team-name: #ffffff;
                --team-muted: #a1a1aa;

                --team-card-bg: #161b22;
                --team-card-border: #30363d;
                --team-avatar-border: #30363d;

                --team-social-bg: #0d1117;
                --team-social-text: #a1a1aa;
                --team-social-hover-bg: #3b82f6;
                --team-social-hover-text: #ffffff;

                --team-hover-shadow: 0 20px 40px rgba(0,0,0,0.45);
                --team-hover-border: rgba(59, 130, 246, 0.45);
              }

              .team-card:hover {
                transform: translateY(-10px);
                box-shadow: var(--team-hover-shadow);
                border-color: var(--team-hover-border);
              }

              .social-link {
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: var(--team-social-bg);
                color: var(--team-social-text);
                transition: all 0.3s;
              }

              .social-link:hover {
                background-color: var(--team-social-hover-bg);
                color: var(--team-social-hover-text);
              }
            `,
          }}
        />
      </main>

      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default TeamPage;