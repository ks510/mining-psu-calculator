import { FC } from 'react';
import Dropdown from '@components/dropdown';
import { GPU } from '../types/GPU';

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

      <Dropdown placeholder="Find your GPU model..." options={gpuList} />
    </form>
  );
};

export default Calculator;
