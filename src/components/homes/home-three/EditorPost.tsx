"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import React, { useMemo, useRef } from "react";
import { NewsArticle } from "@/services";

// Varsayılan resim import'u
import defaultEditorThumb from "@/assets/img/blog/t_banner_post01.jpg";

const setting = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false } },
    { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
  ],
};

const mapArticleToEditorItem = (article: NewsArticle) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(article.publishedAt);
  const formattedDate = date.toLocaleDateString("tr-TR", dateOptions).replace(/\.$/, "");

  const thumbPath = article.imageUrl || defaultEditorThumb;
  const tag = article.category?.name || article.articleTags?.[0]?.tag?.name || "Gündem";

  return {
    id: article.id,
    title: article.title,
    thumb: thumbPath,
    tag: tag,
    date: formattedDate,
    slug: article.slug,
  };
};

type EditorPostProps = {
  featuredLatest?: NewsArticle[];
  isLoading?: boolean;
};

const SKELETON_COUNT = 6;

const EditorPost = ({ featuredLatest = [], isLoading = false }: EditorPostProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const mappedData = useMemo(() => featuredLatest.map(mapArticleToEditorItem), [featuredLatest]);

  const handlePrevClick = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };
  const handleNextClick = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const showSkeleton = isLoading;
  const showEmpty = !isLoading && mappedData.length === 0;

  return (
    <section className="editor-post-area pt-50 pb-40">
      <div className="container">
        {/* Başlık ve Navigasyon Bölümü */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap mb-30">
              <div className="section-title">
                <h2 className="title">Diğer Haberler</h2>
              </div>
              <div className="editor-nav">
                <button onClick={handlePrevClick} type="button" className="slick-prev-btn slick-arrow" disabled={showSkeleton}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button onClick={handleNextClick} type="button" className="slick-next-btn slick-arrow" disabled={showSkeleton}>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              <div className="section-title-line"></div>
            </div>
          </div>
        </div>

        <div className="editor-post-wrap">
          {showSkeleton ? (
            <Slider {...setting} ref={sliderRef} className="row editor-post-active">
              {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                <div key={`sk-${idx}`} className="col-lg-4">
                  <div
                    className="editor-post-item custom-editor-card skeleton-card"
                    style={{ width: "410px", height: "160px", display: "flex", alignItems: "center", margin: "0 10px" }}
                    aria-busy="true"
                    aria-label="Yükleniyor"
                  >
                    {/* Resim skeleton */}
                    <div
                      className="editor-post-thumb custom-editor-thumb skeleton-media"
                      style={{ width: "160px", height: "160px", flexShrink: 0 }}
                    />

                    {/* İçerik skeleton */}
                    <div
                      className="editor-post-content custom-editor-content"
                      style={{
                        flexGrow: 1,
                        height: "100%",
                        padding: "10px 15px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <div className="skeleton-line skeleton-tag" />
                      <div className="skeleton-block">
                        <div className="skeleton-line skeleton-title-1" />
                        <div className="skeleton-line skeleton-title-2" />
                        <div className="skeleton-line skeleton-title-3" />
                      </div>
                      <div className="skeleton-line skeleton-date" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : showEmpty ? (
            <p className="text-center pt-50 pb-50">Düzenleyenlerin Seçimi makalesi bulunmamaktadır.</p>
          ) : (
            <Slider {...setting} ref={sliderRef} className="row editor-post-active">
              {mappedData.map((item) => (
                <div key={item.id} className="col-lg-4">
                  <div
                    className="editor-post-item custom-editor-card"
                    style={{ width: "410px", height: "160px", display: "flex", alignItems: "center", margin: "0 10px" }}
                  >
                    {/* RESİM KISMI */}
                    <div className="editor-post-thumb custom-editor-thumb" style={{ width: "160px", height: "160px", flexShrink: 0 }}>
                      <Link href={`/haber/${item.slug}`}>
                        <Image
                          src={item.thumb}
                          alt={item.title}
                          width={160}
                          height={160}
                          style={{ objectFit: "cover" }}
                        />
                      </Link>
                    </div>

                    {/* İÇERİK/YAZI KISMI */}
                    <div
                      className="editor-post-content custom-editor-content"
                      style={{
                        flexGrow: 1,
                        height: "100%",
                        padding: "10px 15px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <Link href="/haber" className="post-tag-two">
                        {item.tag}
                      </Link>

                      <h2 className="post-title" style={{ margin: "5px 0" }}>
                        <Link
                          href={`/haber/${item.slug}`}
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "1.2em",
                            maxHeight: "3.6em",
                          }}
                        >
                          {item.title}
                        </Link>
                      </h2>

                      <div className="blog-post-meta">
                        <ul className="list-wrap">
                          <li>
                            <i className="flaticon-calendar"></i>
                            {item.date}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>

      {/* Skeleton CSS */}
      <style jsx global>{`
        .skeleton-card {
          position: relative;
          overflow: hidden;
        }

        .skeleton-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.10) 45%,
            rgba(255, 255, 255, 0) 85%
          );
          transform: translateX(-100%);
          animation: skeleton-shimmer 1.2s infinite linear;
          pointer-events: none;
        }

        @keyframes skeleton-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .skeleton-media {
          background: rgba(255, 255, 255, 0.10);
        }

        .skeleton-line {
          width: 100%;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
        }

        .skeleton-tag {
          width: 90px;
          height: 18px;
        }

        .skeleton-block {
          width: 100%;
        }

        .skeleton-title-1 { height: 14px; width: 92%; margin-top: 6px; }
        .skeleton-title-2 { height: 14px; width: 88%; margin-top: 8px; }
        .skeleton-title-3 { height: 14px; width: 70%; margin-top: 8px; }

        .skeleton-date {
          width: 55%;
          height: 14px;
        }
      `}</style>
    </section>
  );
};

export default EditorPost;