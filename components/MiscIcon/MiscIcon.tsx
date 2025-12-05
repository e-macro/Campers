import css from "./MiscIcon.module.css";

interface FilterIconProps {
    type: string;
    label?: string;
}

const EQUIPMENT_CONFIG: Record<string, { icon: string; label?: string }> = {
    AC: { icon: 'wind', label: 'AC' },
    bathroom: { icon: 'ph_shower', label: 'Bathroom' },
    kitchen: { icon: 'cup-hot', label: 'Kitchen' },
    TV: { icon: 'tv', label: 'TV' },
    refrigerator: { icon: 'solar_fridge-outline', label: 'Refrigerator' },
    microwave: { icon: 'lucide_microwave', label: 'Microwave' },
    gas: { icon: 'hugeicons_gas-stove', label: 'Gas' },
    water: { icon: 'ion_water-outline', label: 'Water' },

    engine: { icon: 'fuel_pump' },
    transmission: { icon: 'diagram' },
};

const MiscIcon = ({type, label}: FilterIconProps) => {
    const config = EQUIPMENT_CONFIG[type];

    if (!config) {
        return null;
    }

    const displayLabel = label ?? config.label;

    if (!displayLabel) {
        return null;
    }

    return(
        <div className={css.icon}>
            <svg width="20" height="20" viewBox="0 0 20 20" className={css.iconSvg}>
                <use href={`/icons.svg#${config.icon}`} />
            </svg>
            <p className={css.iconText}>{displayLabel}</p>
        </div>
    )
}

export default MiscIcon;