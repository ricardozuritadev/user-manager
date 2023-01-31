import { ChangeEvent, ReactNode } from 'react';
import ArrowDownIcon from '../icons/arrow-down-icon';

type SortProps = {
  value: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
};

const Select = ({ value, onChange, children }: SortProps) => {
  return (
    <div className="c-select">
      <select className="c-select__options" onChange={onChange}>
        {children}
      </select>
      <ArrowDownIcon className="c-select__arrow" />
    </div>
  );
};

export default Select;
