'use client'

import css from './catalog.module.css';
import { getCampers } from '@/lib/api/api';
import FilterIcon from '@/components/FilterIcon/FilterIcon';
import { FilterOptions } from '@/types/Camper';
import CamperList from '@/components/CamperList/CamperList';
import useFilterStore from '@/lib/store/filters';
import useCamperStore from '@/lib/store/campers';
import { useEffect } from 'react';


export default function Catalog() { 

    const { 
        filters, 
        toggleFilter, 
        location, 
        setLocation, 
        form, 
        setForm,
        transmission,
        setTransmission, 
        _hasHydrated,
        activeFilters,
        applyFilters
    } = useFilterStore();
    const { campers, currentPage, hasMore, setCampers, addCampers, clearCampers, setHasMore }= useCamperStore()

    const filterEquipment: FilterOptions['equipment'][] = ['AC', 'bathroom', 'kitchen', 'TV', 'automatic'];
    const filterType: FilterOptions['type'][] = ['panelTruck', 'FullyIntegrated', 'Alcove'];

    // const { data,
    // } = useQuery({
    //     queryKey: ['campers', activeFilters, currentPage],
    //     queryFn: () => getCampers(currentPage, activeFilters),    
    // })

    useEffect(() => {
        if(_hasHydrated && campers.length === 0) {
            getCampers(1, activeFilters).then((res) => {
                setCampers(res.items);
                setHasMore(res.items.length === 4);
            })
        }
    }, [_hasHydrated, activeFilters, campers.length, setCampers, setHasMore]);

    const handleLoadMore = async () => {
        const nextPage = currentPage + 1;
        const res = await getCampers(nextPage, activeFilters);
        addCampers(res.items);
        setHasMore(res.items.length === 4);
    }

    const handleSearch = () => {
        clearCampers()
        applyFilters();
    }

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
                            value={location}
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
                                    <FilterIcon 
                                    key={filter} 
                                    filterValue={filter} 
                                    onClick={() => {
                                    if (filter === 'automatic') {
                                        setTransmission('automatic');
                                    } else {
                                        toggleFilter(filter);
                                    }
                                    }}
                                    isActive={filter === 'automatic' ? transmission === 'automatic' : filters.includes(filter)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={css.filter}>
                            <h3 className={css.title}>Vehicle type</h3>
                            <hr className={css.stroke}/>
                            <div className={css.typeFilters}>
                                {filterType.map((filter) => (
                                    <FilterIcon 
                                    key={filter} 
                                    filterValue={filter} 
                                    onClick={() => setForm(filter)}
                                    isActive={form === filter} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className={css.button} onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <div className={css.camperList}>
                        <CamperList campers={campers} />
                    {hasMore && <button 
                    className={css.loadButton} 
                    onClick={handleLoadMore} >
                        Load More
                    </button>}
                </div>
            </div>
    )
}