import { FC } from 'react';
import Dropdown from '@components/Dropdown';
import { GPU } from '../types/GPU';
import InfoIcon from '../Icons/InfoIcon';
import QuantityInput from '@components/QuantityInput';

interface Props {
  gpuList: GPU[];
}

const Calculator: FC<Props> = props => {
  const { gpuList } = props;

  return (
    <form className="absolute top-0 left-0 z-10 px-10 py-10">
      <h1 className="text-2xl font-semibold text-primary-orange small-glow-orange mb-4">
        Your GPUs
      </h1>

      <div className="flex gap-5">
        <Dropdown placeholder="Find your GPU model..." options={gpuList} />
        <QuantityInput />
      </div>
    </form>
  );
};

export default Calculator;
