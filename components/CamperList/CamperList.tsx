import { Camper } from '@/types/Camper';
import css from './CamperList.module.css';
import Image from 'next/image';

interface CamperProps {
    campers: Camper[];
}

const CamperList = ({campers}: CamperProps) => {
    return(<div>
        {campers.map((camper) => (
            <div key={camper.id} className={css.camperCard}>
                <Image src={camper.gallery[0].thumb} alt={camper.name} width={200} height={150} />
            </div>
        ))}
        
    </div>);
}

export default CamperList;