import { ChangeEvent } from 'react';

type InputSearchProps = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch = ({ placeholder, value, onChange }: InputSearchProps) => {
  return (
    <input
      className="c-input-search"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputSearch;
