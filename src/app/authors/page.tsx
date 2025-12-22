import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { fetchAuthorList } from '@/services/homethree.service';
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterOne from "@/layouts/footers/FooterOne";

// Varsayılan Avatar (Projenizdeki path'e göre kontrol edin)
import defaultAvatar from "@/assets/img/images/author_img.png";

// --- TİP TANIMLAMALARI ---
interface AuthorItem {
   id: number;
   name: string;
   avatarUrl: string | null;
}

// --- SEO METADATA ---
export const metadata: Metadata = {
   title: "Yazarlarımız | Devnot",
   description: "Devnot platformuna katkı sağlayan, teknoloji dünyasının deneyimli isimleri ve yazarlarımız.",
   openGraph: {
      title: "Devnot Yazarları",
      description: "Sektörün önde gelen yazılımcılarını ve içerik üreticilerini keşfedin.",
   }
};

// Resim URL Çözümleyici (Helper)
const resolveImageUrl = (path: string | null, base: string = "https://api.devnot.com/uploads/") => {
   if (!path) return null;
   if (path.startsWith("http")) return path;
   return `${base}${path}`;
};

const AuthorsPage = async () => {
   let authors: AuthorItem[] = [];

   try {
      authors = await fetchAuthorList();
   } catch (error) {
      console.error("Yazar listesi çekilirken hata oluştu:", error);
   }

   return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
         {/* Header */}
         <HeaderThree />

         {/* Ana İçerik Alanı - Flex grow ile footer'ı aşağı iter */}
         <main style={{ backgroundColor: '#fcfcfc', flex: '1 0 auto' }}>
            
            {/* Yazarlar Grid Bölümü */}
            <section className="authors-list-area pt-80 pb-80">
               <div className="container">
                  
                  {/* Başlık ve Bilgi */}
                  <div className="row mb-50">
                     <div className="col-lg-8">
                        <h1 className="fw-bold mb-2" style={{ fontSize: '36px', color: '#1a1a1a' }}>Yazarlar</h1>
                        <p className="text-muted">Devnot topluluğuna değer katan içerik üreticilerimiz.</p>
                     </div>
                  </div>

                  {authors.length > 0 ? (
                     <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {authors.map((author) => {
                           const avatarSrc = resolveImageUrl(author.avatarUrl) || defaultAvatar;

                           return (
                              <div key={author.id} className="col">
                                 <Link href={`/author?id=${author.id}`} className="text-decoration-none">
                                    <div className="author-card h-100 text-center p-4 bg-white" style={{
                                       border: '1px solid #edf2f7',
                                       borderRadius: '16px',
                                       transition: 'all 0.3s ease',
                                       position: 'relative',
                                       boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                    }}>
                                       
                                       {/* Avatar */}
                                       <div className="mx-auto mb-3 position-relative" style={{
                                          width: '120px',
                                          height: '120px',
                                          borderRadius: '50%',
                                          overflow: 'hidden',
                                          border: '3px solid #f8f9fa'
                                       }}>
                                          <Image
                                             src={avatarSrc}
                                             alt={author.name}
                                             fill
                                             style={{ objectFit: 'cover' }}
                                             sizes="(max-width: 768px) 120px, 120px"
                                          />
                                       </div>

                                       {/* İsim & Bilgi */}
                                       <h3 className="author-name mb-1" style={{ fontSize: '20px', fontWeight: '700', color: '#2d3748' }}>
                                          {author.name}
                                       </h3>
                                       <span className="d-block text-muted mb-3" style={{ fontSize: '14px' }}>
                                          Devnot Yazarı
                                       </span>

                                       {/* Aksiyon Butonu */}
                                       <div className="mt-auto">
                                          <span className="btn-text" style={{
                                             color: '#007bff',
                                             fontWeight: '600',
                                             fontSize: '14px',
                                             display: 'inline-flex',
                                             alignItems: 'center'
                                          }}>
                                             Profili İncele <i className="fas fa-arrow-right ms-2" style={{ fontSize: '12px' }}></i>
                                          </span>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           );
                        })}
                     </div>
                  ) : (
                     <div className="text-center py-5">
                        <div className="mb-3" style={{ fontSize: '40px', color: '#ccc' }}>
                           <i className="far fa-user"></i>
                        </div>
                        <h3 className="text-muted">Yazar listesi şu an yüklenemedi.</h3>
                     </div>
                  )}

                  {/* CTA / Katılım Alanı */}
                  <div className="row justify-content-center mt-100">
                     <div className="col-lg-10">
                        <div className="cta-box p-5 text-center text-white" style={{
                           background: 'linear-gradient(90deg, #111111 0%, #333333 100%)',
                           borderRadius: '24px'
                        }}>
                           <h2 className="fw-bold mb-3 text-white">Yazar Kadromuza Katılın</h2>
                           <p className="mb-4" style={{ color: '#ccc', fontSize: '18px' }}>
                              Teknik bilgilerinizi paylaşarak Türkiye yazılım ekosistemine katkıda bulunun.
                           </p>
                           <Link href="/contact" className="btn btn-light btn-lg px-5 fw-bold" style={{ borderRadius: '50px' }}>
                              Hemen Başvur
                           </Link>
                        </div>
                     </div>
                  </div>

               </div>
            </section>

            {/* Sayfa içi stiller */}
            <style>{`
               .author-card:hover {
                  transform: translateY(-8px);
                  box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
                  border-color: #007bff !important;
               }
               .author-card:hover .author-name {
                  color: #007bff !important;
               }
            `}</style>
         </main>

         {/* Footer - Main flex:1 sayesinde hep en dipte */}
         <FooterOne style={false} style_2={true} />
      </div>
   );
};

export default AuthorsPage;