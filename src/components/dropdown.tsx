import { FC, useState } from 'react';
import ArrowDownIcon from '../Icons/arrow-down';
import { GPU } from '../types/GPU';

interface Props {
  placeholder?: string;
  options: GPU[];
}

const Dropdown: FC<Props> = props => {
  // 1. Dropdown input box
  // 2. Dropdown menu options
  // 3. Open/close menu icon
  // 4. Handle selecting menu option
  // 5. Searchable dropdown.tsx select

  const { placeholder, options } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedGPU, setSelectedGPU] = useState('');

  /*  Method for handling typing in input
      const handleChange = event => {
      setSelectedGPU(event.target.value);

      console.log('value is:', event.target.value);
    };*/

  return (
    <div className="flex flex-col">
      <label
        htmlFor="gpu-model"
        className="text-primary-orange font-medium small-glow-orange pb-3">
        GPU Model
      </label>

      <div
        className="flex items-center glass-box-input px-4 py-2"
        onClick={() => setShowMenu(!showMenu)}>
        <input
          type="text"
          id="gpu-model"
          placeholder={placeholder}
          value={selectedGPU}
          className="bg-transparent focus:outline-none text-lg"
        />
        <ArrowDownIcon></ArrowDownIcon>
      </div>

      {showMenu && (
        <div className="w-full glass-box-input mt-1 px-2 py-2 h-[198px] overflow-y-auto dropdown-scrollbar">
          {options.map(option => (
            <div
              key={option.model}
              className="px-2 py-1.5 hover:bg-cyan/20 rounded-lg"
              onClick={() => {
                setSelectedGPU(option.model);
                setShowMenu(!showMenu);
              }}>
              {option.model}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
