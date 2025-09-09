"use client";
import MachineBar from "@/components/machineBar";
import OSBar from "@/components/OSBar";
import React from "react";
import HisotryComponent from "@/components/history";
import { getMachineHistory, getMachinesByOs } from "@/APIs/apis";
import CheckComp from "@/components/CheckComp";
const DashboardPage = () => {
  const [osTypes, setOsTypes] = React.useState<string[]>([]);
  const [selectedOS, setSelectedOS] = React.useState<string | null>(null);
  const [machineList, setMachineList] = React.useState<string[]>([]);
  const [selectedMachine, setSelectedMachine] = React.useState<string | null>(
    null
  );
  const [history, setHistory] = React.useState<any[]>([]);
  const [selectedCheck, setSelectedCheck] = React.useState<any>(null);
  const handleOSTypeClick = (osType: string) => {
    setSelectedOS(osType);
    getMachinesByOs(osType).then((data) => {
      setMachineList(data.machineIds);
    });
  };
  const handleSelectedMachine = (machineId: string) => {
    setSelectedMachine(machineId);
    getMachineHistory(machineId).then((data) => {
      setHistory(data.history);
    });
  };
  const handleSelectHistoryCheck = (historyCheck: any) => {
    setSelectedCheck(historyCheck);
  }
  return (
    <div className="h-[100vh] w-full">
      <OSBar
        setOsTypes={setOsTypes}
        osTypes={osTypes}
        handleOSTypeClick={handleOSTypeClick}
        selectedOS={selectedOS}
      />
      <MachineBar
        machineList={machineList}
        selectedMachine={selectedMachine}
        handleSelectedMachine={handleSelectedMachine}
      />
      <HisotryComponent history={history} selectedCheck={selectedCheck}
      handleSelectHistoryCheck={handleSelectHistoryCheck}
      />
      {selectedCheck !==null &&<CheckComp selectedCheck={selectedCheck}/>}
      {selectedOS === null ? <div className="p-20">Select a OS</div> : <></>}
    </div>
  );
};

export default DashboardPage;
