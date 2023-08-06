import { writable } from "svelte/store";

export const currentStep = writable(0);
export const stepsData = writable({});
export const userData = writable({});
