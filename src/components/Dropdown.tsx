import { ChangeEvent, FC, useState } from 'react';
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
  // 5. Searchable Dropdown.tsx select ✅
  // 6. Clicking outside of input options closes menu
  // 7. Key up and down navigates through dropdown options
  // 8. Autofocus on current select option when opening dropdown options

  const { placeholder, options, selectedGPU, updateSelectedGPU, index } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showAllOptions, setShowAllOptions] = useState(true);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setShowAllOptions(false);
  };

  const getOptions = () => {
    if (!searchValue || showAllOptions) {
      return options;
    }

    return options.filter(option => {
      return option.model.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
    });
  };

  const onSelectGPU = (index: number, GPUModel: string) => {
    updateSelectedGPU(index, GPUModel);
    setSearchValue(GPUModel);
    setShowMenu(!showMenu);
    setShowAllOptions(true);
    console.log('Search value: ' + searchValue);
    console.log('Selected GPU:' + selectedGPU);
  };

  return (
    <div className="flex flex-col">
      {index === 0 && (
        <label
          htmlFor="gpu-model"
          className="text-primary-orange font-medium small-glow-orange">
          GPU Model
        </label>
      )}

      <div className="flex mt-4">
        <div className="relative">
          <div
            className="flex items-center glass-box-input px-4 py-2"
            onClick={() => setShowMenu(!showMenu)}>
            <input
              type="text"
              id="gpu-model"
              placeholder={placeholder}
              value={searchValue}
              onChange={onSearch}
              className="bg-transparent focus:outline-none text-lg w-[400px]"
            />
            <ArrowDownIcon></ArrowDownIcon>
          </div>

          {showMenu && (
            <div className="absolute top-[46px] left-0 z-10 w-full glass-box-dropdown-menu mt-1 px-2 py-2 h-[198px] overflow-y-auto dropdown-scrollbar">
              {getOptions().map(option => (
                <div
                  key={option.model}
                  className="px-2 py-1.5 hover:bg-cyan/20 rounded-lg"
                  onClick={() => onSelectGPU(index, option.model)}>
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
