"use client";
import React from "react";
import { getOsTypes } from "@/APIs/apis";

const OSBar = ({ setOsTypes, osTypes, handleOSTypeClick, selectedOS }: any) => {
  React.useEffect(() => {
    getOsTypes().then((data) => {
      setOsTypes(data.osTypes);
    });
  }, []);
  return (
    <div className="py-3 w-full bg-blue-800 text-white px-20 flex gap-2 flex-wrap">
      {osTypes.map((osType: string) => (
        <button
          onClick={() => {
            if (osType !== selectedOS) {
              handleOSTypeClick(osType);
            }
          }}
          key={osType}
          className={`text-white text-xl hover:bg-blue-600 p-2 rounded-lg ${
            selectedOS === osType ? "bg-blue-700" : "bg-blue-800 hover:cursor-pointer"
          }`}
        >
          {osType}
        </button>
      ))}
    </div>
  );
};
export default OSBar;
