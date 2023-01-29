import { ChangeEvent } from 'react';

import CheckIcon from '../icons/check-icon';

type InputCheckboxProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputCheckbox = ({ onChange }: InputCheckboxProps) => (
  <label className="c-input-checkbox">
    <input
      type="checkbox"
      className="c-input-checkbox__input"
      onChange={onChange}
    />
    <CheckIcon className="c-input-checkbox__check" />
  </label>
);

export default InputCheckbox;
