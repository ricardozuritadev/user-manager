import React from 'react';

type UsersListFiltersProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  activeOnly: boolean;
  setActiveOnly: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy: number;
  setSortBy: React.Dispatch<React.SetStateAction<number>>;
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
    <form className="c-user-list__form">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="c-user-list__checkbox">
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={e => setActiveOnly(e.target.checked)}
        />
        <span>Sólo activos</span>
      </div>
      <select
        className="c-user-list__select"
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
