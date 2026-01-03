"use client"

import Link from "next/link"
import Image from "next/image";
import Slider from "react-slick";
import React, { useRef } from "react";
import "@/assets/css/upcoming-events.css"

// Tek varsayılan resim import'u
import bannerThumb_1 from "@/assets/img/blog/cr_banner_post01.jpg"

interface EventData {
    id: number;
    title: string;
    slug: string;
    description: string;
    date: string;
    location: string;
    website: string;
    imageUrl: string | null;
    eventTypeId: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string | null;
    eventType: {
        id: number;
        name: string;
        isActive: boolean;
    };
}

interface UpcomingEventsProps {
    upcomingEvents?: EventData[];
}

const setting = {
    infinite: false, // Son karta gelince durması mobilde daha iyi bir akış sağlar
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true, // Kullanıcıya kaç tane kart olduğunu gösterir
    arrows: false,
    autoplay: false, // İsteğin üzerine false yapıldı
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                dots: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.15, // PEEK EFEKTİ: Sağdaki kartın %15'i görünür
                centerMode: false,
                dots: true,
                infinite: false,
            }
        }
    ]
}

const mapEventToBannerItem = (event: EventData) => {
    const date = new Date(event.date);
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('tr-TR', dateOptions);
    const tag = event.eventType.name;

    return {
        id: event.id,
        title: event.title,
        thumb: event.imageUrl || bannerThumb_1,
        tag: tag,
        date: formattedDate,
        slug: event.slug,
    };
};

const UpcomingEvents = ({ upcomingEvents = [] }: UpcomingEventsProps) => {
    const sliderRef = useRef<Slider | null>(null);
    const mappedData = upcomingEvents.map(mapEventToBannerItem);

    return (
        <section className="banner-post-area-four pb-10 mt-35">
            <div className="container">
                
                <div className="upcoming-events-wrap">
                    {mappedData.length > 0 ? (
                        <Slider {...setting} ref={sliderRef} className="row banner-post-active events-slider-with-gap">
                            {mappedData.map((item) => (
                                <div key={item.id} className="event-slide-item">
                                    <div className="banner-post-four">
                                        <div className="banner-post-thumb-four">
                                            <Link href={`/events/${item.slug}`}>
                                                <Image
                                                    src={item.thumb}
                                                    alt={item.title}
                                                    width={400}
                                                    height={250}
                                                    priority={item.id === mappedData[0].id}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Link>
                                        </div>
                                        <div className="banner-post-content-four">
                                            <Link href="/blog" className="post-tag">{item.tag}</Link>
                                            <h2 className="post-title bold-underline">
                                                <Link href={`/events/${item.slug}`}>{item.title}</Link>
                                            </h2>
                                            <div className="blog-post-meta">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-calendar"></i>{item.date}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p className="text-center pt-30">Yaklaşan etkinlik bulunmamaktadır.</p>
                    )}
                </div>
            </div>

            <style jsx global>{`
                /* Slider Boşluk ve Peek Ayarları */
                .events-slider-with-gap .slick-list {
                    margin: 0 -10px;
                    overflow: visible; /* Mobilde taşan kartın görünmesini sağlar */
                }
                .event-slide-item {
                    padding: 0 10px;
                    outline: none;
                }

                /* Noktalar (Dots) Tasarımı */
                .events-slider-with-gap .slick-dots {
                    bottom: -40px;
                }
                .events-slider-with-gap .slick-dots li button:before {
                    color: #764ba2;
                    font-size: 10px;
                    opacity: 0.3;
                }
                .events-slider-with-gap .slick-dots li.slick-active button:before {
                    color: #667eea;
                    opacity: 1;
                }

                /* Kart Tasarımı */
                .upcoming-events-wrap .banner-post-four {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    height: 220px;
                    background: #1a1a2e;
                    transition: all 0.3s ease;
                }

                .upcoming-events-wrap .banner-post-thumb-four {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                }

                .upcoming-events-wrap .banner-post-thumb-four::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 100%);
                    z-index: 2;
                }

                .upcoming-events-wrap .banner-post-content-four {
                    position: relative;
                    z-index: 3;
                    padding: 20px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                }

                .upcoming-events-wrap .banner-post-content-four .post-tag {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: #fff;
                    padding: 4px 12px;
                    border-radius: 6px;
                    font-size: 11px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }

                .upcoming-events-wrap .banner-post-content-four .post-title {
                    font-size: 18px;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 6px;
                    line-height: 1.3;
                }

                .upcoming-events-wrap .blog-post-meta ul.list-wrap li {
                    color: #d1d1d1;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                /* Mobil Düzeltme */
                @media (max-width: 767px) {
                    .upcoming-events-wrap .banner-post-four {
                        height: 240px;
                    }
                    .upcoming-events-wrap .banner-post-content-four .post-title {
                        font-size: 19px;
                    }
                    /* Mobilde konteyner dışına taşmayı önlemek için */
                    .upcoming-events-wrap {
                        padding-right: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default UpcomingEvents;