import { FC } from 'react';
import Dropdown from '@components/dropdown';

const Calculator: FC = () => {
  // 1. Dropdown input box
  // 2. Dropdown menu options
  // 3. Open/close menu icon
  // 4. Handle selecting menu option
  // 5. Searchable dropdown.tsx select

  return (
    <form className="absolute top-0 left-0 z-10 px-10 py-10">
      <h1 className="text-2xl font-semibold text-primary-orange small-glow-orange">
        Your GPUs
      </h1>

      <Dropdown />
    </form>
  );
};

export default Calculator;
