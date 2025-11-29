"use client"
import Image, { StaticImageData } from "next/image"
import Slider from "react-slick";

import img_1 from "@/assets/img/icon/coin_icon01.svg";
import img_2 from "@/assets/img/icon/coin_icon02.svg";
import img_3 from "@/assets/img/icon/coin_icon03.svg";
import img_4 from "@/assets/img/icon/coin_icon04.svg";
import img_5 from "@/assets/img/icon/coin_icon05.svg";
import img_6 from "@/assets/img/icon/coin_icon06.svg";
import img_7 from "@/assets/img/icon/coin_icon07.svg";

const setting = {
   infinite: true,
   speed: 1000,
   slidesToShow: 7,
   slidesToScroll: 2,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 2,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
}

interface DataType {
   id: number;
   icon: StaticImageData;
   title: JSX.Element;
   price: string;
}[];

const coin_data: DataType[] = [
   {
      id: 1,
      icon: img_1,
      title: (<>Bitcoin <span>(BTC)</span></>),
      price: "$ 28,636.00",
   },
   {
      id: 2,
      icon: img_2,
      title: (<>Ethereum <span>(ETH)</span></>),
      price: "$ 25,636.00",
   },
   {
      id: 3,
      icon: img_3,
      title: (<>Tether <span>(USDT)</span></>),
      price: "$ 34,636.00",
   },
   {
      id: 4,
      icon: img_4,
      title: (<>USD Coin <span>(USDC)</span></>),
      price: "$ 20,636.00",
   },
   {
      id: 5,
      icon: img_5,
      title: (<>BNB <span>(BNB)</span></>),
      price: "$ 26,636.00",
   },
   {
      id: 6,
      icon: img_6,
      title: (<>Cardano <span>(ADA)</span></>),
      price: "$ 29,636.00",
   },
   {
      id: 7,
      icon: img_7,
      title: (<>Dogecoin <span>(DOGE)</span></>),
      price: "$ 36,456.00",
   },
   {
      id: 8,
      icon: img_3,
      title: (<>Tether <span>(USDT)</span></>),
      price: "$ 34,636.00",
   },
]

const CoinArea = () => {
   return (
      <section className="coin-area">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="coin-item-wrap">
                     <Slider {...setting} className="row coin-active">
                        {coin_data.map((item) => (
                           <div key={item.id} className="col">
                              <div className="coin-item">
                                 <div className="icon">
                                    <Image src={item.icon} alt="" />
                                 </div>
                                 <div className="content">
                                    <h5 className="title">{item.title}</h5>
                                    <span>{item.price}</span>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CoinArea
