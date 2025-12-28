import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";

import imgZeynep from "@/assets/img/team/zeynep-yildiz.jpg";
import imgAnil from "@/assets/img/team/anil-yilmaz.jpg";
import imgAynur from "@/assets/img/team/aynur-katircioglu.jpg";
import imgEmine from "@/assets/img/team/emine-cihan.jpg";
import imgFadil from "@/assets/img/team/fadil-basaran.jpg";
import imgAhmet from "@/assets/img/team/ahmet-burak-kucuk.jpg";
import imgMert from "@/assets/img/team/mertbaba-okulmus.jpg";
import imgSeda from "@/assets/img/team/seda-nur-kilinc.jpg";
import imgSongul from "@/assets/img/team/songul-ersoy-koc.jpg";
import imgMelisa from "@/assets/img/team/melisa-nur-kaya.jpg";
import imgBahattin from "@/assets/img/team/bahattin-koc.jpg";
import imgBaris from "@/assets/img/team/baris-yilmaz.jpg";

export const metadata: Metadata = {
  title: "Ekibimiz | Devnot",
  description: "Devnot'un arkasındaki tutkulu ekip ile tanışın.",
};

const TeamPage = () => {
  // Statik Ekip Verisi
  const teamMembers = [
    {
      id: 1,
      name: "Uğur Umutluoğlu",
      role: "Kurucu, Organizatör",
      avatarUrl: imgAhmet,
      social: { linkedin: "https://linkedin.com/in/ugurumutluoglu/", twitter: "https://x.com/umutluoglu" }
    },
    {
      id: 2,
      name: "Ahmet Burak Küçük",
      role: "Yardımcı Organizatör",
      avatarUrl: imgAhmet,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "Anıl Yılmaz",
      role: "Yardımcı Organizatör",
      avatarUrl: imgAnil,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Mertbaba Okulmuş",
      role: "Yardımcı Organizatör",
      avatarUrl: imgMert,
      social: { linkedin: "#", twitter: "#" }
    },
        { 
      id: 5,
      name: "Barış Yılmaz",
      role: "Yardımcı Organizatör",
      avatarUrl: imgBaris,
      social: { linkedin: "#", twitter: "#" }
    } ,
    {
      id: 6,
      name: "Zeynep Yıldız", 
      role: "Yardımcı Organizatör",
      avatarUrl: imgZeynep,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 7,
      name: "Aynur Katırcıoğlu",  
      role: "Yardımcı Organizatör",
      avatarUrl: imgAynur,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 8,  
      name: "Emine Cihan",
      role: "Yardımcı Organizatör",
      avatarUrl: imgEmine,  
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 9,
      name: "Fadıl Başaran",
      role: "Yardımcı Organizatör",
      avatarUrl: imgFadil,
      social: { linkedin: "#", twitter: "#" }
    }, 
    {
      id: 10,
      name: "Seda Nur Kılınç",  
      role: "Yardımcı Organizatör",
      avatarUrl: imgSeda,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 11,
      name: "Songül Ersoy Koç",  
      role: "Yardımcı Organizatör",
      avatarUrl: imgSongul,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      id: 12,
      name: "Melisa Nur Kaya",  
      role: "Yardımcı Organizatör",
      avatarUrl: imgMelisa,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      id: 13,
      name: "Bahattin Koç",
      role: "Yardımcı Organizatör",
      avatarUrl: imgBahattin,
      social: { linkedin: "#", twitter: "#" }
    },

  ];

  const defaultAvatar = "/assets/img/images/author_img.png";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderThree />

      {/* flex: '1 0 auto' ile ana içeriği footer'dan ayırıyoruz */}
      <main style={{ backgroundColor: '#ffffff', flex: '1 0 auto' }}>

        {/* --- MİNİMAL BAŞLIK ALANI --- */}
        <section className="pt-80 pb-60">
          <div className="container text-center">
            <span className="d-block text-primary fw-bold mb-2" style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Biz Kimiz?
            </span>
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
              {teamMembers.map((member) => (
                <div key={member.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="team-card p-4 h-100 text-center" style={{
                    border: '1px solid #f0f0f0',
                    borderRadius: '24px',
                    backgroundColor: '#fff',
                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                  }}>
                    {/* Avatar (Squircle & Tilt Effect) */}
                    <div className="mx-auto mb-4 position-relative" style={{ width: '140px', height: '140px' }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '40px',
                        overflow: 'hidden',
                        transform: 'rotate(-3deg)',
                        border: '4px solid #f8f9fa'
                      }}>
                        <Image
                          src={member.avatarUrl || defaultAvatar}
                          alt={member.name}
                          fill
                          style={{ objectFit: 'cover', transform: 'rotate(3deg) scale(1.1)' }}
                        />
                      </div>
                    </div>

                    {/* Bilgiler */}
                    <h3 className="mb-1" style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a' }}>
                      {member.name}
                    </h3>
                    <p className="text-primary fw-medium mb-3" style={{ fontSize: '15px' }}>
                      {member.role}
                    </p>

                    {/* Sosyal Medya */}
                    <div className="d-flex justify-content-center gap-3 mt-3 pt-3 border-top">
                      <Link href={member.social.linkedin} target="_blank" className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href={member.social.twitter} target="_blank" className="social-link">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          .team-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border-color: #007bff55;
          }
          .social-link {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #f8f9fa;
            color: #555;
            transition: all 0.3s;
          }
          .social-link:hover {
            background-color: #007bff;
            color: #fff;
          }
        `}</style>
      </main>

      {/* Footer artık her durumda tabana yapışık olacak */}
      <FooterOne style={false} style_2={true} />
    </div>
  );
};

export default TeamPage;