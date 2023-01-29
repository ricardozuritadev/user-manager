import { ChangeEvent } from 'react';

import SearchIcon from '../icons/search-icon';

type InputSearchProps = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const InputSearch = ({
  placeholder,
  value,
  onChange,
  className,
}: InputSearchProps) => {
  return (
    <div className={`c-input-search__container ${className || ''}`}>
      <SearchIcon className="c-input-search__icon" />
      <input
        className="c-input-search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputSearch;
