import { FC, useState } from 'react';
import ArrowDownIcon from '../Icons/ArrowDownIcon';
import { GPU } from '../types/GPU';
import InfoIcon from '../Icons/InfoIcon';

interface Props {
  placeholder?: string;
  options: GPU[];
  index: number;
  selectedGPU: string;
  updateSelectedGPU: (index: number, gpu: string) => void;
}

const Dropdown: FC<Props> = props => {
  // 1. Dropdown input box ✅
  // 2. Dropdown menu options ✅
  // 3. Open/close menu icon ✅
  // 4. Handle selecting menu option ✅
  // 5. Searchable Dropdown.tsx select
  // 6. Clicking outside of input options closes menu

  const { placeholder, options, selectedGPU, updateSelectedGPU, index } = props;
  const [showMenu, setShowMenu] = useState(false);

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

      <div className="flex">
        <div>
          <div
            className="flex items-center glass-box-input px-4 py-2"
            onClick={() => setShowMenu(!showMenu)}>
            <input
              type="text"
              id="gpu-model"
              placeholder={placeholder}
              value={selectedGPU}
              onChange={() => {}}
              className="bg-transparent focus:outline-none text-lg w-[400px]"
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
                    updateSelectedGPU(index, option.model);
                    setShowMenu(!showMenu);
                  }}>
                  {option.model}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-[45px] w-[45px] grid place-items-center">
          <InfoIcon size={24} />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
