import { useState } from 'react';

type UseFilters = {
  search: string;
  activeOnly: boolean;
  sortBy: number;
};

export const useFilters = () => {
  const [filters, setFilters] = useState<UseFilters>({
    search: '',
    activeOnly: false,
    sortBy: 0,
  });

  const setSearch = (search: string) => {
    setFilters({ ...filters, search });
  };

  const setActiveOnly = (activeOnly: boolean) => {
    if (activeOnly && filters.sortBy === 3) {
      setFilters({ ...filters, sortBy: 0, activeOnly });
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
