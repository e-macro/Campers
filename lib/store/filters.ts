import { create } from "zustand";
import { persist } from "zustand/middleware";


interface FilterProps {
    filters: string[];
    toggleFilter: (value: string) => void;
    location: string;
    setLocation: (value: string) => void;
    form: string;
    setForm: (value: string) => void;
    transmission: string;
    setTransmission: (value: string) => void;
    resetFilters: () => void;
    _hasHydrated?: boolean;
}

const useFilterStore = create<FilterProps>()(persist(
    (set) => ({
        filters: [],
        location: '',
        form: '',
        transmission: '',
        _hasHydrated: false,
        toggleFilter: (value) => set((state) => ({
            filters: state.filters.includes(value)
                ? state.filters.filter((item) => item !== value)
                : [...state.filters, value],
        })),
        setLocation: (value) => set({ location: value }),
        setForm: (value) => set((state) => ({ 
            form: state.form === value ? '' : value  // toggle
        })),
        setTransmission: (value) => set((state) => ({ 
            transmission: state.transmission === value ? '' : value 
        })),
        resetFilters: () => set({ 
            filters: [], 
            location: '', 
            form: '', 
            transmission: '' 
        }),
    }),
    { name: 'filter-storage',
        onRehydrateStorage: (state) => {
            state._hasHydrated = true;
        },
        partialize: (state) => ({ 
            filters: state.filters,
            form: state.form,
            transmission: state.transmission,
            location: state.location
        })
    }
));

export default useFilterStore;