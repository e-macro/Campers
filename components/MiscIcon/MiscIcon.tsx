import { Equipment } from "@/types/Camper";
import css from "./MiscIcon.module.css";

interface FilterIconProps {
    type: Equipment;
    engine?: Equipment;
    transmission?: Equipment;
}

const FilterIcon = ({type, engine, transmission}: FilterIconProps) => {
    return(
        <>
            {type.type === 'AC' && <div className={css.icon}>AC</div>}
            {type.type === 'Bathroom' && <div className={css.icon}>Bathroom</div>}
            {type.type === 'Kitchen' && <div className={css.icon}>Kitchen</div>}
            {type.type === 'TV' && <div className={css.icon}>TV</div>}
            {type.type === 'Radio' && <div className={css.icon}>Radio</div>}
            {type.type === 'Refrigerator' && <div className={css.icon}>Refrigerator</div>}
            {type.type === 'Microwave' && <div className={css.icon}>Microwave</div>}
            {type.type === 'Gas' && <div className={css.icon}>Gas</div>}
            {type.type === 'Water' && <div className={css.icon}>Water</div>}
            {engine && <div className={css.icon}>{type.engine}</div>}
            {transmission && <div className={css.icon}>{type.transmission}</div>}
        </>
    )
}

export default FilterIcon;