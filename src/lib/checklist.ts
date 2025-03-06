import { initialChecklist } from "./initialChecklist"
import { localStorageStore } from "./localStorage"

export const checklistOM = localStorageStore("checklist-om", initialChecklist())
