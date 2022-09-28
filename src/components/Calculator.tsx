import { FC, useState, MouseEvent } from 'react';
import Dropdown from '@components/Dropdown';
import { GPU } from '../types/GPU';
import QuantityInput from '@components/QuantityInput';

interface Props {
  gpuList: GPU[];
}

const Calculator: FC<Props> = props => {
  const { gpuList } = props;
  const [GPUInputFields, setGPUInputFields] = useState([
    { gpu: '', quantity: 1 }
  ]);

  const updateSelectedGPU = (index: number, gpu: string) => {
    let selectedGPUs = [...GPUInputFields];
    selectedGPUs[index]['gpu'] = gpu;
    setGPUInputFields(selectedGPUs);
  };

  const updateGPUQuantity = (index: number, quantity: number) => {
    let selectedGPUs = [...GPUInputFields];
    selectedGPUs[index]['quantity'] = quantity;
    setGPUInputFields(selectedGPUs);
  };

  const addGPUField = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let newGPUInput = { gpu: '', quantity: 1 };
    setGPUInputFields([...GPUInputFields, newGPUInput]);
  };

  return (
    <form className="relative px-10 py-10">
      <h1 className="text-2xl font-semibold text-primary-orange small-glow-orange mb-4">
        Your GPUs
      </h1>

      {GPUInputFields.map((input, index) => {
        return (
          <div key={index} className="flex gap-5">
            <Dropdown
              placeholder="Find your GPU model..."
              options={gpuList}
              index={index}
              selectedGPU={GPUInputFields[index]['gpu']}
              updateSelectedGPU={updateSelectedGPU}
            />
            <QuantityInput
              index={index}
              quantity={GPUInputFields[index]['quantity']}
              updateQuantity={updateGPUQuantity}
            />
          </div>
        );
      })}

      <button onClick={e => addGPUField(e)}>Add</button>
    </form>
  );
};

export default Calculator;
