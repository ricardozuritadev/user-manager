import { ChangeEvent } from 'react';
import { SORT_OPTIONS } from '../constants/sort-options';

import InputCheckbox from './forms/input-checkbox';
import InputSearch from './forms/input-search';
import Select from './forms/select';

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
    <div className="c-user-list-filters">
      <div className="c-user-list-filters__container">
        <InputSearch
          placeholder="Buscar..."
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <Select
          value={sortBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSortBy(Number(e.target.value))
          }
        >
          <option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
          <option value={SORT_OPTIONS.NAME}>Por nombre</option>
          <option value={SORT_OPTIONS.ROLE}>Por rol</option>
          {!activeOnly && (
            <option value={SORT_OPTIONS.ACTIVE}>Por estado</option>
          )}
        </Select>
      </div>

      <div className="c-user-list-filters__container">
        <div className="c-user-list-filters__checkbox">
          <InputCheckbox
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setActiveOnly(e.target.checked)
            }
          />
          <p>Mostrar sólo activos</p>
        </div>
      </div>
    </div>
  );
};

export default UsersListFilters;
