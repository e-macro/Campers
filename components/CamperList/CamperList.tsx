'use client'

import { Camper } from '@/types/Camper';
import css from './CamperList.module.css';
import Image from 'next/image';
import { useState } from 'react';
import MiscIcon from '../MiscIcon/MiscIcon';
import Link from 'next/link';

interface CamperProps {
    campers: Camper[];
}

const CamperList = ({campers}: CamperProps) => {
    const [isActive, setIsActive] = useState(false);

    const avgRating = (camper: Camper) => {
        const total = camper.reviews.reduce((sum, review) => sum + review.reviewer_rating, 0);
        return (total / camper.reviews.length).toFixed(1);
    }

    const equipmentKeys = ['AC', 'bathroom', 'kitchen', 'TV', 'refrigerator'];

    return(<>
        {campers.map((camper) =>{ 
            const activeEquipment = equipmentKeys.filter(key => camper[key as keyof Camper]);
            return(
            <div key={camper.id} className={css.camperCard}>
                <div className={css.camperImage}>
                    <Image src={camper.gallery[0].thumb} alt={camper.name} width={200} height={150} />
                </div>
                <div className={css.camperInfo}>
                    <div className={css.infoTop}>
                        <div className={css.topInfoMain}>
                            <h2>{camper.name}</h2>
                            <div className={css.infoTopLeft}>
                                <h2>&euro;{camper.price}.00</h2>
                                <button className={css.heartButton} onClick={() => setIsActive(!isActive)}>
                                    <svg width={26} height={24} viewBox='0 0 26 24' className={`${css.heartIcon} ${isActive && css.iconActive }`}>
                                        <use href='/icons.svg#heart' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className={css.numbers}>
                        <p className={css.numberInfo}>
                            <svg width={16} height={16} viewBox='0 0 16 16' className={css.ratingIcon}>
                                <use href='/icons.svg#rating' />
                            </svg>
                            {avgRating(camper)}({camper.reviews.length} reviews)
                        </p>
                        <p className={css.numberInfo}>
                            <svg width={16} height={16} viewBox='0 0 16 16' className={css.locationIcon}>
                                <use href='/icons.svg#map' />
                            </svg>
                            {camper.location}</p>
                        </div>
                    </div>
                    <p className={css.text}>{camper.description}</p>
                    <div className={css.infoTags}>
                        <MiscIcon type='engine' label={camper.engine} />
                        <MiscIcon type='transmission' label={camper.transmission} />
                        {activeEquipment.map((key) => (
                            camper[key as keyof Camper] && <MiscIcon key={key} type={key} />
                        ))}
                    </div>
                    <Link href={`/catalog/${camper.id}`} className={css.viewButton}>
                        Show More
                    </Link>
                </div>
            </div>
        )
        })}
        
    </>);
}

export default CamperList;