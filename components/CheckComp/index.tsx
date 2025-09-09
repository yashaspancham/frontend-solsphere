"use client";
import React from "react";
import { timeAgo } from "@/utils";
const CheckComp = ({ selectedCheck }: any) => {
    console.log("Selected Check: ", selectedCheck);
  return (
    <div className="p-10 md:p-2 flex max-md:flex-col gap-5 w-full ">
      <div className="bg-gray-200 h-fit p-4 rounded-lg flex flex-col mr-4">
        {selectedCheck.timestamp && (
          <p>LastChange: {timeAgo(new Date(selectedCheck.timestamp+"Z"))}</p>
        )}
        {selectedCheck.checks.diskEncryption && (
          <p
            className={`p-2 text-white ${
              selectedCheck.checks.diskEncryption.enabled
                ? "bg-green-800 "
                : "bg-red-800 "
            }`}
          >
            diskEncryption:{" "}
            {String(selectedCheck.checks.diskEncryption.enabled)}
          </p>
        )}
        {selectedCheck.checks.osUpdates && (
          <p
            className={`p-2 text-white ${
              !selectedCheck.checks.osUpdates.updatesAvailable
                ? "bg-green-800 "
                : "bg-red-800 "
            }
          `}
          >
            OSupdatesAvailable:{" "}
            {String(selectedCheck.checks.osUpdates.updatesAvailable)}
          </p>
        )}
        {selectedCheck.checks.anitivirus && (
          <p
            className={`p-2 text-white ${
              selectedCheck.checks.anitivirus[0].installed
                ? "bg-green-800 "
                : "bg-red-800 "
            }
          `}
          >
            anitivirusPresnet:{" "}
            {String(selectedCheck.checks.anitivirus[0].installed)}
          </p>
        )}
      </div>
      <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded-lg overflow-x-auto">
        {" "}
        {JSON.stringify(selectedCheck, null, 5)}
      </pre>
    </div>
  );
};

export default CheckComp;
