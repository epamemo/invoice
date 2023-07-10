import { atom } from "recoil";

export const HistoryInvoice = atom({
    key: "HistoryInvoice", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});

export const textState = atom({
    key: "textState", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});

export const CustomerSearch = atom({
    key: "CustomerSearch", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});

export const DashboardSearch = atom({
    key: "DashboardSearch", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});
