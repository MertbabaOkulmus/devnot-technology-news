"use client";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import React, { useMemo, useRef } from "react";
import "@/assets/css/upcoming-events.css";

// Tek varsayılan resim import'u
import bannerThumb_1 from "@/assets/img/blog/cr_banner_post01.jpg";

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
  isLoading?: boolean;
}

const setting = {
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.15, // PEEK
        centerMode: false,
        dots: true,
        infinite: false,
      },
    },
  ],
};

const mapEventToBannerItem = (event: EventData) => {
  const date = new Date(event.date);
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("tr-TR", dateOptions);
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

// Skeleton item sayısı (slider dolu görünsün)
const SKELETON_COUNT = 6;

const UpcomingEvents = ({ upcomingEvents = [], isLoading = false }: UpcomingEventsProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const mappedData = useMemo(() => upcomingEvents.map(mapEventToBannerItem), [upcomingEvents]);

  const showSkeleton = isLoading;
  const showEmpty = !isLoading && mappedData.length === 0;

  return (
    <section className="banner-post-area-four pb-10 mt-35">
      <div className="container">
        <div className="upcoming-events-wrap">
          {showSkeleton ? (
            <Slider {...setting} ref={sliderRef} className="row banner-post-active events-slider-with-gap">
              {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                <div key={`skeleton-${idx}`} className="event-slide-item">
                  <div className="banner-post-four skeleton-card" aria-busy="true" aria-label="Yükleniyor">
                    <div className="banner-post-thumb-four skeleton-media" />
                    <div className="banner-post-content-four">
                      <div className="skeleton-line skeleton-tag" />
                      <div className="skeleton-line skeleton-title" />
                      <div className="skeleton-line skeleton-date" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : showEmpty ? (
            <p className="text-center pt-30">Yaklaşan etkinlik bulunmamaktadır.</p>
          ) : (
            <Slider {...setting} ref={sliderRef} className="row banner-post-active events-slider-with-gap">
              {mappedData.map((item) => (
                <div key={item.id} className="event-slide-item">
                  <div className="banner-post-four">
                    <div className="banner-post-thumb-four">
                        <Image
                          src={item.thumb}
                          alt={item.title}
                          width={400}
                          height={250}
                          priority={item.id === mappedData[0].id}
                          style={{ objectFit: "cover" }}
                        />
                    </div>
                    <Link href={`/events/${item.slug}`} className="banner-post-content-four">
                      <div className="post-tag">
                        {item.tag}
                      </div>
                      <h2 className="post-title bold-underline">
                        <Link href={`/events/${item.slug}`}>{item.title}</Link>
                      </h2>
                      <div className="blog-post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar"></i>
                            {item.date}
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>

      <style jsx global>{`
        /* Slider Boşluk ve Peek Ayarları */
        .events-slider-with-gap .slick-list {
          margin: 0 -10px;
          overflow: visible;
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
  box-shadow: none !important; /* gölgeyi kaldır */
  height: 220px;
  background: #1a1a2e;
  transition: none; /* istersen kalsın ama gölge yoksa animasyon da gereksiz */
}
        .upcoming-events-wrap .banner-post-thumb-four {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .upcoming-events-wrap .banner-post-thumb-four::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.4) 40%,
            rgba(0, 0, 0, 0.9) 100%
          );
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

        /* --------- SKELETON (Instagram/YouTube gibi) --------- */
        .skeleton-card {
          background: #121224;
        }

        /* Görsel alanı placeholder */
        .skeleton-media {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: #1b1b33;
        }

        /* Shimmer overlay */
        .skeleton-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.08) 40%,
            rgba(255, 255, 255, 0) 80%
          );
          transform: translateX(-100%);
          animation: skeleton-shimmer 1.25s infinite linear;
          z-index: 4;
          pointer-events: none;
        }

        @keyframes skeleton-shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .skeleton-line {
          width: 100%;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.12);
          margin-bottom: 10px;
        }

        .skeleton-tag {
          width: 90px;
          height: 18px;
        }

        .skeleton-title {
          width: 90%;
          height: 20px;
        }

        .skeleton-date {
          width: 55%;
          height: 14px;
          margin-bottom: 0;
        }

        /* Mobil Düzeltme */
        @media (max-width: 767px) {
          .upcoming-events-wrap .banner-post-four {
            height: 240px;
          }
          .upcoming-events-wrap .banner-post-content-four .post-title {
            font-size: 19px;
          }
          .upcoming-events-wrap {
            padding-right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default UpcomingEvents;
