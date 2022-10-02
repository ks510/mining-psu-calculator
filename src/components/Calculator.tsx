import { FC, useState, MouseEvent, useEffect } from 'react';
import Dropdown from '@components/Dropdown';
import { GPU } from '../types/GPU';
import QuantityInput from '@components/QuantityInput';
import TrashIcon from '../Icons/TrashIcon';
import AddCircleIcon from '../Icons/AddCircleIcon';

interface Props {
  gpuList: GPU[];
  setTotalGPUPower: (power: number) => void;
}

const Calculator: FC<Props> = props => {
  const { gpuList, setTotalGPUPower } = props;
  const [GPUInputFields, setGPUInputFields] = useState([
    { gpu: '', quantity: 1 }
  ]);

  useEffect(() => {
    const totalGPUPower = GPUInputFields.map(gpuInput => {
      const gpu = gpuList.find(({ model }) => model === gpuInput.gpu);
      if (gpu) {
        return gpu.tdp * gpuInput.quantity;
      }
      return 0;
    }).reduce((total, value) => total + value, 0);

    setTotalGPUPower(totalGPUPower);
    console.log('Total GPU Power ' + totalGPUPower);
  }, [GPUInputFields, gpuList, setTotalGPUPower]);

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

  const removeGPUField = (index: number, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let currentGPUs = [...GPUInputFields];
    currentGPUs.splice(index, 1);
    setGPUInputFields(currentGPUs);
    // consider adding check to prevent deleting the last input field
  };

  return (
    <form className="relative px-10 py-10">
      <h1 className="text-2xl font-semibold text-primary-orange small-glow-orange mb-4">
        Your GPUs
      </h1>

      {GPUInputFields.map((input, index) => {
        return (
          <div key={index} className="flex gap-4">
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
            <button
              className="w-[45px] h-[45px] grid place-items-center self-end"
              onClick={e => {
                removeGPUField(index, e);
              }}>
              <TrashIcon size={24} />
            </button>
          </div>
        );
      })}

      <button
        onClick={e => addGPUField(e)}
        className="flex gap-2 px-2 py-2 mt-2 items-center">
        <AddCircleIcon size={24} />
        <span className="text-primary-orange hover:small-glow-orange transition-all">
          Add another GPU model
        </span>
      </button>
    </form>
  );
};

export default Calculator;
