"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import tabThumb_1 from "@/assets/img/blog/cr_latest_post01.jpg"
import tabThumb_2 from "@/assets/img/blog/cr_latest_post02.jpg"
import tabThumb_3 from "@/assets/img/blog/cr_latest_post03.jpg"
import tabThumb_4 from "@/assets/img/blog/cr_latest_post04.jpg"
import Link from "next/link";

const tab_title: string[] = ["Latest News", "Featured",];

interface DataType {
  id: number;
  tab_data: {
    thumb: StaticImageData,
    title: string;
    tag: string;
    date: string;
  }[]
}[];

const recent_data: DataType[] = [
  {
    id: 1,
    tab_data: [
      {
        thumb: tabThumb_1,
        tag: "CRYPTO",
        title: "Communication For Everyday Meetings",
        date: "27 AUGUST, 2024",
      },
      {
        thumb: tabThumb_2,
        tag: "ECONOMY",
        title: "Phone Numbers For Web Designers",
        date: "27 AUGUST, 2024",
      },
      {
        thumb: tabThumb_3,
        tag: "MARKET",
        title: "The Butter Chocolate Cookies Daily",
        date: "27 AUGUST, 2024",
      },
      {
        thumb: tabThumb_4,
        tag: "NEWS",
        title: "Building Your Security Strategy",
        date: "27 AUGUST, 2024",
      },
    ],
  },
  {
    id: 2,
    tab_data: [
      {
        thumb: tabThumb_3,
        tag: "MARKET",
        title: "The Butter Chocolate Cookies Daily",
        date: "27 AUGUST, 2024",
      },
      {
        thumb: tabThumb_4,
        tag: "NEWS",
        title: "Building Your Security Strategy",
        date: "27 AUGUST, 2024",
      },
      {
        thumb: tabThumb_1,
        tag: "CRYPTO",
        title: "Communication For Everyday Meetings",
        date: "27 AUGUST, 2024",
      },
      {
        thumb: tabThumb_2,
        tag: "ECONOMY",
        title: "Phone Numbers For Web Designers",
        date: "27 AUGUST, 2024",
      },
    ],
  },
]

const RecentSidebar = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (

    <div className="col-30">
      <div className="sidebar-wrap no-sticky">
        <div className="sidebar-tab">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {tab_title.map((tab, index) => (
              <li key={index} className="nav-item" role="presentation">
                <button onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`} id="featured-tab">{tab}</button>
              </li>
            ))}
          </ul>

          <div className="tab-content" id="myTabContent">
            {recent_data.map((tab, index) => (
              <div key={tab.id} className={`tab-pane show ${activeTab === index ? "active" : ""}`} id="latest-tab-pane">
                <div className="sidebar-widget sidebar-widget-two">
                  {tab.tab_data.map((item, i) => (
                    <div key={i} className="popular-post popular-post-two">
                      <div className="thumb">
                        <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                      </div>
                      <div className="content">
                        <Link href="/haber" className="post-tag-two">{item.tag}</Link>
                        <h2 className="post-title"><Link href="/blog-details">{item.title}</Link></h2>
                        <div className="blog-post-meta">
                          <ul className="list-wrap">
                            <li><i className="flaticon-calendar"></i>{item.date}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentSidebar
