'use client'

import { useState } from 'react';
import css from './FilterIcon.module.css';

interface FilterIconProps {
    filterValue: string;
    onClick?: () => void;
    isActive?: boolean;
}

const EQUIPMENT_CONFIG: Record<string, { icon: string; label?: string }> = {
    AC: { icon: 'wind', label: 'AC' },
    bathroom: { icon: 'ph_shower', label: 'Bathroom' },
    kitchen: { icon: 'cup-hot', label: 'Kitchen' },
    TV: { icon: 'tv', label: 'TV' },
    automatic: { icon: 'diagram', label: 'Automatic' },
    panelTruck: { icon: 'bi_grid-1x2', label: 'Van' },
    FullyIntegrated: { icon: 'bi_grid', label: 'Fully Integrated' },
    Alcove: { icon: 'bi_grid-3x3-gap', label: 'Alcove' },

    engine: { icon: 'fuel_pump' },
    transmission: { icon: 'diagram' },
};

const FilterIcon = ({ filterValue, onClick, isActive }: FilterIconProps) => {
    const [isActiveState, setIsActiveState] = useState(false);
        const config = EQUIPMENT_CONFIG[filterValue];

    if (!config) {
        return null;
    }

    const displayLabel = filterValue ?? config.label;

    if (!displayLabel) {
        return null;
    }
    return(
        <div onClick={onClick}>
            <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActiveState(!isActiveState)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href={`/icons.svg#${config.icon}`} />
                </svg>
                <p className={css.iconText}>
                    {config.label}
                </p>
            </button>
        </div>
    )
}

export default FilterIcon;