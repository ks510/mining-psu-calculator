import { FC } from 'react';
import ArrowDownIcon from '../Icons/arrow-down';

interface Props {
  placeholder?: string;
  options?: Options[];
}

interface Options {
  value: string;
  name: string;
}

const Dropdown: FC<Props> = props => {
  const { placeholder, options } = props;

  return (
    <div className="flex flex-col">
      <label
        htmlFor="gpu-model"
        className="text-primary-orange font-medium small-glow-orange pb-3">
        GPU Model
      </label>

      <div className="flex items-center glass-box-input px-4 py-2">
        <input
          type="text"
          id="gpu-model"
          placeholder={placeholder}
          className="bg-transparent focus:outline-none text-lg"
        />
        <ArrowDownIcon></ArrowDownIcon>
      </div>

      <div></div>
    </div>
  );
};

export default Dropdown;
