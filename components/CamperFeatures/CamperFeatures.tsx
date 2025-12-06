'use client'

import { Camper } from "@/types/Camper"
import MiscIcon from "../MiscIcon/MiscIcon";
import css from './CamperFeatures.module.css'

interface FeaturesProps {
    camper: Camper;
}

const CamperFeatures = ({ camper }: FeaturesProps) => {

    const equipmentKeys = ['AC', 'bathroom', 'kitchen', 'TV', 'refrigerator', 'radio', 'microwave', 'gas', 'water'];
    const activeEquipment = equipmentKeys.filter(key => camper[key as keyof Camper]);

    const camperForm = {
        panelTruck: 'Panel truck',
        FullyIntegrated: 'Fully integrated',
        Alcove: 'Alcove'
    }

    return (
        <div className={css.container}>
            <div className={css.equipFeatures}>
                <MiscIcon type='engine' label={camper.engine} />
                <MiscIcon type='transmission' label={camper.transmission} />
                {activeEquipment.map((item) => (
                    <MiscIcon key={item} type={item as keyof Camper} />
                ))}
            </div>
            <div className={css.specsFeatures}>
                <h3 className={css.title}>Vehicle details</h3>
                <hr className={css.stroke}/>
                <div className={css.specs}>
                    <p className={css.spec}><span>Form:</span> {camperForm[camper.form as keyof typeof camperForm]}</p>
                    <p className={css.spec}><span>Length:</span> {camper.length}</p>
                    <p className={css.spec}><span>Width:</span> {camper.width}</p>
                    <p className={css.spec}><span>Height:</span> {camper.height}</p>
                    <p className={css.spec}><span>Tank:</span> {camper.tank}</p>
                    <p className={css.spec}><span>Consumption:</span> {camper.consumption}</p>
                </div>
            </div>
        </div>
    )
}

export default CamperFeatures;