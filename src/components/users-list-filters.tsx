import { ChangeEvent } from 'react';

import InputSearch from './forms/input-search';

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
      <InputSearch
        placeholder="Buscar..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <div className="c-user-list-filters__checkbox">
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setActiveOnly(e.target.checked)
          }
        />
        <span>Sólo activos</span>
      </div>
      <select
        className="c-user-list-filters__select"
        value={sortBy}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSortBy(Number(e.target.value))
        }
      >
        <option value={0}>Por defecto</option>
        <option value={1}>Por nombre</option>
        <option value={2}>Por role</option>
        {!activeOnly && <option value={3}>Por estado</option>}
      </select>
    </form>
  );
};

export default UsersListFilters;
