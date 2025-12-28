"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"

// Varsayılan resim
import blogThumb_1 from "@/assets/img/blog/blog_details01.jpg"

// --- INTERFACES ---

interface EventDetail {
    id: number;
    title: string;
    slug: string;
    description: string; // HTML içeriği
    date: string;
    location: string;
    website: string;
    imageUrl: string | null;
    eventTypeId: number;
    isActive: boolean;
    eventType: {
        id: number;
        name: string;
    };
}

interface EventDetailsContentProps {
    featuredEventDetail: EventDetail;
}

// Tarih formatlama yardımcı fonksiyonu
const formatPublishedDate = (dateString: string) => {
    const date = new Date(dateString);
    // Saat/Zamanı da göstermek için düzenledik
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('tr-TR', options);
}

const EventDetailsContent = ({ featuredEventDetail }: EventDetailsContentProps) => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Veri kontrolü
    if (!featuredEventDetail) {
        return <div>Etkinlik detayı bulunamadı.</div>;
    }

    const item = featuredEventDetail;
    const eventType = item.eventType?.name || "Etkinlik";
    const eventDate = formatPublishedDate(item.date);

    // Not: Etkinlik verisinde yazar, yorum sayısı ve etiketler bulunmadığı için kaldırılmıştır/statik bırakılmıştır.

    return (
        <>
            <div className="blog-details-content">
                <div className="blog-details-content-top">
                    {/* Etkinlik Türü Etiketi (Kategori yerine) */}
                    <Link href="/events" className="post-tag">{eventType}</Link>
                    {/* Başlık */}
                    <h2 className="title">{item.title}</h2>
                    <div className="bd-content-inner">
                        <div className="blog-post-meta">
                            <ul className="list-wrap">
                                {/* Konum */}
                                <li><i className="fas fa-map-marker-alt"></i>{item.location}</li>
                                {/* Tarih ve Saat */}
                                <li><i className="flaticon-calendar"></i>{eventDate}</li>
                                {/* Web Sitesi Linki (Okuma Süresi yerine) */}
                                <li><i className="fas fa-link"></i><Link href={item.website} target="_blank">Web Sitesi</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ana Resim */}
                {item.imageUrl !== null ?
                    <div className="blog-details-thumb">
                        <Image
                            // ImageUrl statik resim objesi veya dinamik string olabilir
                            src={item.imageUrl}
                            alt={item.title}
                            width={850}
                            height={300}
                            priority
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div> : <br />
                }

                {/* === ANA İÇERİK (HTML Injection) === */}
                {/* Description alanı HTML içerdiği için dangerouslySetInnerHTML kullanıyoruz */}
                <div
                    className="blog-main-content mt-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                />

                {/* Ek Bilgiler ve Paylaşım Alanı */}
                <div className="blog-details-bottom mt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="post-tags">
                                <h5 className="title">Mekan:</h5>
                                <p className="mb-0">{item.location}</p>
                            </div>
                            <div className="post-tags">
                                <h5 className="title">Tarih:</h5>
                                <p className="mb-0">{eventDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modalı (Gerekiyorsa aktif edilebilir) */}
            <VideoPopup
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="Ml4XCF-JS0k"
            />
        </>
    );
};

export default EventDetailsContent;