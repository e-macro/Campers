'use client'

import { useState } from 'react';
import css from './catalog.module.css';
import { getCampers } from '@/lib/api/api';
import { useQuery } from '@tanstack/react-query';
import FilterIcon from '@/components/FilterIcon/FilterIcon';
import { FilterOptions } from '@/types/Camper';

export default function Catalog() {
    const [pageNum, setPageNum] = useState(1);
    const [location, setLocation] = useState('');
    const [filter, setFilter] = useState('');

    const filterEquipment: FilterOptions['equipment'][] = ['AC', 'Bathroom', 'Kitchen', 'TV', 'Automatic'];
    const filterType: FilterOptions['type'][] = ['Van', 'Fully Integrated', 'Alcove'];

    const { data } = useQuery({
        queryKey: ['campers', pageNum, location, filter],
        queryFn: () => getCampers(pageNum, location, filter),
        
    })
    console.log(data);

    return (
            <div className={css.container}>
                <div className={css.filters}>
                    <div className={css.locationFilter}>
                        <p className={css.label}>Location</p>
                        <div className={css.inputWrapper}>
                            <input 
                            type="text" 
                            placeholder='City' 
                            className={css.locationInput} 
                            onChange={(e) => setLocation(e.target.value)}
                            />
                            <svg width="20" height="20" viewBox="0 0 20 20" className={`${css.inputIcon} ${location && css.iconActive }`}>
                                <use href="/icons.svg#map" />
                            </svg>
                        </div>
                    </div>
                    <p className={css.label}>Filters</p>
                    <div className={css.filterButtons}>
                        <div className={css.filter}>
                            <h3 className={css.title}>Vehicle equipment</h3>
                            <hr className={css.stroke}/>
                            <div className={css.equipmentFilters}>
                                {filterEquipment.map((filter) => (
                                    <FilterIcon key={filter} filterValue={filter} onClick={() => setFilter(filter)} />
                                ))}
                            </div>
                        </div>
                        <div className={css.filter}>
                            <h3 className={css.title}>Vehicle type</h3>
                            <hr className={css.stroke}/>
                            <div className={css.typeFilters}>
                                {filterType.map((filter) => (
                                    <FilterIcon key={filter} filterValue={filter} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className={css.button}>
                        Search
                    </button>
                </div>
                <div className={css.camperList}>
                </div>
            </div>
    )
}