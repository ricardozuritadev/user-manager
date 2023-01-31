import { useState } from 'react';

import { SORT_OPTIONS } from '../constants/sort-options';

type UseFilters = {
  search: string;
  activeOnly: boolean;
  sortBy: number;
};

export const useFilters = () => {
  const [filters, setFilters] = useState<UseFilters>({
    search: '',
    activeOnly: false,
    sortBy: SORT_OPTIONS.DEFAULT,
  });

  const setSearch = (search: string) => {
    setFilters({ ...filters, search });
  };

  const setActiveOnly = (activeOnly: boolean) => {
    if (activeOnly && filters.sortBy === SORT_OPTIONS.ACTIVE) {
      setFilters({ ...filters, sortBy: SORT_OPTIONS.DEFAULT, activeOnly });
    } else {
      setFilters({ ...filters, activeOnly });
    }
  };

  const setSortBy = (sortBy: number) => {
    setFilters({ ...filters, sortBy });
  };

  return {
    ...filters,
    setSearch,
    setActiveOnly,
    setSortBy,
  };
};
