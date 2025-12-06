'use client'

import CamperFeatures from '@/components/CamperFeatures/CamperFeatures';
import css from './CatalogItem.module.css'
import { useParams } from 'next/navigation';

type Props = {
    params: Promise<{ id: string }>;
}

const CamperPage = ({params}: Props) => {
    const { id } = useParams<{ id: string }>();
    return (
        <div className={css.container}>
            <CamperFeatures id={id} />
        </div>
    )
}

export default CamperPage;