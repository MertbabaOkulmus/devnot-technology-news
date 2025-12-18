"use client"

import Link from "next/link"
import Image from "next/image";
import Slider from "react-slick";
import React, { useRef } from "react";
import "@/assets/css/upcoming-events.css"

// Tek varsayılan resim import'u
import bannerThumb_1 from "@/assets/img/blog/cr_banner_post01.jpg"

// Gelen Etkinlik verisinin yapısı
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

// Bileşene gelen prop yapısı
interface UpcomingEventsProps {
    upcomingEvents?: EventData[];
}

// SLIDER AYARLARI
const setting = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,         
    centerMode: false,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    swipeToSlide: true,  
    waitForAnimate: false,
    lazyLoad: 'ondemand' as const,
    responsive: [
    ]
}

const mapEventToBannerItem = (event: EventData) => {

    const date = new Date(event.date);
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('tr-TR', dateOptions);

    const thumbPath = bannerThumb_1; // Tek varsayılan resim
    const tag = event.eventType.name;

    return {
        id: event.id,
        title: event.title,
        thumb: thumbPath,
        tag: tag,
        date: formattedDate,
        slug: event.slug,
    };
};


const UpcomingEvents = ({ upcomingEvents = [] }: UpcomingEventsProps) => {

    const sliderRef = useRef<Slider | null>(null);
    const mappedData = upcomingEvents.map(mapEventToBannerItem);

    return (
        <section className="banner-post-area-four pb-30 mt-80">
            <div className="container">
                {/* Slider İçeriği */}
                <div className="upcoming-events-wrap">
                    {mappedData.length > 0 ? (
                        // Boşluk ayarı için benzersiz sınıf eklendi: events-slider-with-gap
                        <Slider {...setting} ref={sliderRef} className="row banner-post-active events-slider-with-gap">
                            {mappedData.map((item) => (
                                <div key={item.id}>
                                    <div className="banner-post-four">
                                        <div className="banner-post-thumb-four">
                                            <Link href={`/events/${item.slug}`}>
                                                <Image
                                                    src={item.thumb}
                                                    alt={item.title}
                                                    width={300}
                                                    height={250}
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
        </section>
    );
};

export default UpcomingEvents;