import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'

import { Card } from '../../layout/sections/works/card/Card';

import ImageCard1 from '../../assets/images/arts/image1.webp'
import ImageCard2 from '../../assets/images/arts/image2.webp'
import ImageCard3 from '../../assets/images/arts/image3.webp'
import ImageCard4 from '../../assets/images/arts/image4.webp'
import ImageCard5 from '../../assets/images/arts/image5.webp'
import ImageCard6 from '../../assets/images/arts/image6.webp'
import ImageCard7 from '../../assets/images/arts/image7.webp'


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <Card src={ImageCard4} title={'Mad Dog Jones'} price={590} />,
    <Card src={ImageCard1} title={'Cyberpunk Cocomo'} price={490} />,
    <Card src={ImageCard6} title={'Qi tiao yu'} price={320} />,
	<Card src={ImageCard7} title={'Omoki X'} price={370} />,
    <Card src={ImageCard2} title={'Sukoversum '} price={540} />,
	<Card src={ImageCard3} title={'VaynerX'} price={410} />,
	<Card src={ImageCard5} title={'Josh Rife'} price={430} />,
];

export const Slider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        keyboardNavigation={false}
    />
);