import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API__BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getOsTypes = async () => {
    try {
        const res = await axios.get(`${API_BASE}os-types`, {
            headers: {
                "x-api-key": API_KEY,
            },
        });

        return res.data;
    } catch (err) {
        console.error("Error fetching OS types:", err);
        return { osTypes: [] };
    }
};

export const getMachinesByOs = async (osType: string) => {
    try {
        const res = await axios.get(`${API_BASE}machines/${osType}`, {
            headers: {
                "x-api-key": API_KEY,
            },
        });
        return res.data; // { osType: "linux", machineIds: ["host1", "host2"] }
    } catch (err) {
        console.error("Error fetching machine IDs:", err);
        return null;
    }
};


// Get machine history (timestamps + checks)
export const getMachineHistory = async (machineId: string) => {
    try {
        const res = await axios.get(`${API_BASE}reports/${machineId}/history`, {
            headers: {
                "x-api-key": API_KEY,
            },
        });
        return res.data;
    } catch (err) {
        console.error("Error fetching machine history:", err);
        throw err;
    }
};
