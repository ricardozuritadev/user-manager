import { ChangeEvent } from 'react';

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
    <form className="c-user-list-filters">
      <InputSearch
        placeholder="Buscar..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <div className="c-user-list-filters__checkbox">
        <InputCheckbox
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setActiveOnly(e.target.checked)
          }
        />
        <p>Sólo activos</p>
      </div>
      <Select
        value={sortBy}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSortBy(Number(e.target.value))
        }
      />
    </form>
  );
};

export default UsersListFilters;
