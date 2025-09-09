import { dummyMachines } from "@/dummydata";

const MachineBar = ({
  machineList,
  selectedMachine,
  handleSelectedMachine,
}: any) => {
  return (
    <div className="py-3 w-full bg-indigo-800 text-white px-10 flex gap-2 flex-wrap ">
      {machineList.length === 0 ? (
        <div className="">No machines</div>
      ) : (
        machineList.map((machine: string) => (
          <button
            onClick={() => {
              if (selectedMachine !== machine) handleSelectedMachine(machine);
            }}
            key={machine}
            className={`hover:bg-indigo-600 p-2 rounded-lg text-white text-lg p-2
            ${
              selectedMachine === machine
                ? "bg-indigo-700"
                : "bg-indigo-800 hover:cursor-pointer"
            }
                `}
          >
            {machine}
          </button>
        ))
      )}
    </div>
  );
};

export default MachineBar;
