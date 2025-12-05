'use client'

import { useState } from 'react';
import css from './catalog.module.css';
import { getCampers } from '@/lib/api/api';
import { dehydrate, HydrationBoundary, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import FilterIcon from '@/components/FilterIcon/FilterIcon';
import { FilterOptions } from '@/types/Camper';
import CamperList from '@/components/CamperList/CamperList';
import useFilterStore from '@/lib/store/filters';

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
        _hasHydrated  
    } = useFilterStore();

    const queryClient = useQueryClient()

    const [activeFilters, setActiveFilters] = useState({
        location: location,
        equipment: filters,
        transmission: transmission,
        form: form
    })

    const filterEquipment: FilterOptions['equipment'][] = ['AC', 'bathroom', 'kitchen', 'TV', 'automatic'];
    const filterType: FilterOptions['type'][] = ['panelTruck', 'FullyIntegrated', 'Alcove'];

    const { data,
            fetchNextPage,
            hasNextPage,
            isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['campers', activeFilters],
        queryFn: ({pageParam = 1}) => getCampers(pageParam, activeFilters),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.items.length === 4 ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1,
        enabled: _hasHydrated,      
    })

    const allCampers = data?.pages.flatMap(page => page.items) ?? []

    const handleSearch = () => {
        queryClient.removeQueries({queryKey: ['campers']});
        setActiveFilters({
            location: location,
            equipment: filters,
            transmission: transmission,
            form: form
        });
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
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <CamperList campers={allCampers} />
                    </HydrationBoundary>
                    {hasNextPage && <button 
                    className={css.loadButton} 
                    onClick={() => fetchNextPage()} 
                    disabled={isFetchingNextPage}>
                        {isFetchingNextPage ? 'Loading...' : 'Load more'}
                    </button>}
                </div>
            </div>
    )
}