import React from 'react';

type UsersListFiltersProps = {
  search: string;
  setSearch: (search: string) => void;
  activeOnly: boolean;
  setActiveOnly: (search: boolean) => void;
  sortBy: number;
  setSortBy: (search: number) => void;
};

const UsersListFilters = ({
  search,
  setSearch,
  activeOnly,
  setActiveOnly,
  sortBy,
  setSortBy,
}: UsersListFiltersProps) => {
  return (
    <form className="c-user-list-filters">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="c-user-list-filters__checkbox">
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={e => setActiveOnly(e.target.checked)}
        />
        <span>Sólo activos</span>
      </div>
      <select
        className="c-user-list-filters__select"
        value={sortBy}
        onChange={e => setSortBy(Number(e.target.value))}
      >
        <option value={0}>Por defecto</option>
        <option value={1}>Por nombre</option>
      </select>
    </form>
  );
};

export default UsersListFilters;
