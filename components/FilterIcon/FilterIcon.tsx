'use client'

import { useState } from 'react';
import css from './FilterIcon.module.css';

interface FilterIconProps {
    filterValue: string | undefined;
}

const FilterIcon = ({ filterValue }: FilterIconProps) => {
    const [isActive, setIsActive] = useState(false);

    return(
        <>
            {filterValue === 'AC' && 
            <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#wind" />
                </svg>
                <p className={css.iconText}>
                    AC
                </p>
            </button>}
            {filterValue === 'Automatic' &&
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#diagram" />
                </svg>
                <p className={css.iconText}>
                    Automatic
                </p>
                </button>}
            {filterValue === 'Kitchen' &&
            <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#cup-hot" />
                </svg>
                <p className={css.iconText}>
                    Kitchen
                </p>
            </button>}
            {filterValue === 'TV' &&
            <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#tv" />
                </svg>
                <p className={css.iconText}>
                    TV
                </p>
                </button>}
            {filterValue === 'Bathroom' && 
                <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#ph_shower" />
                </svg>
                <p className={css.iconText}>
                    Bathroom
                </p>
                </button>}
            {filterValue === 'Van' && 
            <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#bi_grid-1x2" />
                </svg>
                <p className={css.iconText}>
                    Van
                </p>
                </button>}
            {filterValue === 'Fully Integrated' && 
            <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#bi_grid" />
                </svg>
                <p className={css.iconText}>
                    Fully Integrated
                </p>
            </button>}
            {filterValue === 'Alcove' && 
            <button className={`${css.icon} ${isActive && css.iconActive}` } onClick={() => setIsActive(!isActive)}>
                <svg width="32" height="32" viewBox="0 0 32 32" className={css.iconSvg}>
                    <use href="/icons.svg#bi_grid-3x3-gap" />
                </svg>
                <p className={css.iconText}>
                    Alcove
                </p>
            </button>}
        </>
    )
}

export default FilterIcon;