import { ChangeEvent } from 'react';
import ArrowDownIcon from '../icons/arrow-down-icon';

type SortProps = {
  value: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange }: SortProps) => {
  return (
    <div className="c-select">
      <select className="c-select__options" onChange={onChange}>
        {' '}
        <option value={0}>Por defecto</option>
        <option value={1}>Por nombre</option>
        <option value={2}>Por rol</option>
        {/* {!activeOnly && <option value={3}>Por estado</option>} */}
      </select>
      <ArrowDownIcon className="c-select__arrow" />
    </div>
  );
};

export default Select;
