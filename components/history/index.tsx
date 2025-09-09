"use client";
import React from "react";

const HisotryComponent = ({
  history,
  selectedCheck,
  handleSelectHistoryCheck,
}: any) => {
    
  return (
    <div className="px-8 py-2 bg-sky-800 flex gap-4 flex-wrap">
      {history.map((item: any, index: number) => (
        <button
          onClick={() => {
            handleSelectHistoryCheck(item);
          }}
          key={index}
          className={`text-sm text-white p-3 hover:bg-sky-700 rounded-lg ${
            selectedCheck && item.timestamp === selectedCheck.timestamp
              ? "bg-sky-600 border-green-400"
              : "bg-sky-800 hover:cursor-pointer "
          }
          `}
        >
          {new Date(item.timestamp).toLocaleString()}
        </button>
      ))}
    </div>
  );
};

export default HisotryComponent;
