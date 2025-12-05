'use client'

import { useState } from 'react';
import css from './FilterIcon.module.css';

interface FilterIconProps {
    filterValue: string;
    onClick?: () => void;
}

const FilterIcon = ({ filterValue, onClick }: FilterIconProps) => {
    const [isActive, setIsActive] = useState(false);

    return(
        <>
            {filterValue === 'AC' && 
            <div onClick={onClick}>
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#wind" />
                    </svg>
                    <p className={css.iconText}>
                        AC
                    </p>
                </button>
            </div>}
            {filterValue === 'automatic' &&
            <div onClick={onClick}>
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#diagram" />
                    </svg>
                    <p className={css.iconText}>
                        Automatic
                    </p>
                </button>
            </div>}
            {filterValue === 'kitchen' &&
            <div onClick={onClick}>
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#cup-hot" />
                    </svg>
                    <p className={css.iconText}>
                        Kitchen
                    </p>
                </button>
            </div>}
            {filterValue === 'TV' &&
            <div onClick={onClick}>
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#tv" />
                    </svg>
                    <p className={css.iconText}>
                        TV
                    </p>
                </button>
            </div>}
            {filterValue === 'bathroom' && 
                <div onClick={onClick}>
                    <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#ph_shower" />
                    </svg>
                    <p className={css.iconText}>
                        Bathroom
                    </p>
                    </button>
                </div>}
            {filterValue === 'Van' && 
            <div onClick={onClick}>
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#bi_grid-1x2" />
                    </svg>
                    <p className={css.iconText}>
                        Van
                    </p>
                    </button>
            </div>}
            {filterValue === 'Fully Integrated' && 
            <div onClick={onClick}>
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#bi_grid" />
                    </svg>
                    <p className={css.iconText}>
                        Fully Integrated
                    </p>
                </button>
            </div>}
            {filterValue === 'Alcove' && 
            <div onClick={onClick}>
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                        <use href="/icons.svg#bi_grid-3x3-gap" />
                    </svg>
                    <p className={css.iconText}>
                        Alcove
                    </p>
                </button>
            </div>}
        </>
    )
}

export default FilterIcon;