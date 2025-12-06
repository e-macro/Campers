'use client'

import CamperFeatures from '@/components/CamperFeatures/CamperFeatures';
import css from './CatalogItem.module.css'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Camper } from '@/types/Camper';
import { getCamperById } from '@/lib/api/api';
import Image from 'next/image';
import BookForm from '@/components/BookForm/BookForm';
import Review from '@/components/Review/Review';

const CamperPage = () => {
    const { id } = useParams<{ id: string }>();
    const [camper, setCamper] = useState<Camper | null>(null);
    const [isFeaturesSelected, setIsFeaturesSelected] = useState(true);
    const [isReviewsSelected, setIsReviewsSelected] = useState(false);
    useEffect(() => {
        getCamperById(Number(id)).then((data) => {
            setCamper(data);
        });
    }, [id]);
    const avgRating = (camper: Camper) => {
        const total = camper.reviews.reduce((sum, review) => sum + review.reviewer_rating, 0);
        return (total / camper.reviews.length).toFixed(1);
    }

    const handleFeaturesClick = () => {
        if(isFeaturesSelected) return;
        {setIsFeaturesSelected(true);
        setIsReviewsSelected(false);}
    }

    const handleReviewsClick = () => {
        if (isReviewsSelected) return;
        setIsFeaturesSelected(false);
        setIsReviewsSelected(true);
    }

    if (!camper) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.container}>
            <div className={css.top}>
                <div className={css.head}>
                    <h2 className={css.title}>{camper.name}</h2>
                    <div className={css.numbers}>
                        <div className={css.numbersWrapper}>
                            <p className={css.numberInfo}>
                                <svg width={16} height={16} viewBox='0 0 16 16' className={css.ratingIcon}>
                                    <use href='/icons.svg#rating' />
                                </svg>
                                <u>{avgRating(camper)}({camper.reviews.length} reviews)</u>
                            </p>
                            <p className={css.numberInfo}>
                                <svg width={16} height={16} viewBox='0 0 16 16' className={css.locationIcon}>
                                    <use href='/icons.svg#map' />
                                </svg>
                            {camper.location}</p>
                        </div>
                        <h2 className={css.price}>&euro;{camper.price}.00</h2>
                    </div>
                </div>
                <div className={css.images}>
                    {camper.gallery.map((image, index) => (
                        <div key={index} className={css.imageWrapper}>
                            <Image src={image.original} alt={camper.name} className={css.image} width={292} height={312} />
                        </div>
                    ))}
                </div>
                <p className={css.text}>{camper.description}</p>
            </div>
            <div className={css.bottom}>
                    <div className={css.tabs}>
                        <h3 className={`${css.features} ${isFeaturesSelected && css.active}`} onClick={handleFeaturesClick}>Features</h3>
                        <h3 className={`${css.reviews} ${isReviewsSelected && css.active}`} onClick={handleReviewsClick}>Reviews</h3>
                    </div>
                <div className={css.details}>
                    {isFeaturesSelected && 
                        <CamperFeatures camper={camper} />
                    }
                    {isReviewsSelected && 
                    <div className={css.reviewsWrapper}>
                        {camper.reviews.map((review, index) => (
                            <Review key={index} review={review} />
                        ))}
                    </div>}
                        <BookForm />
                </div>
            </div>
        </div>
    )
}

export default CamperPage;