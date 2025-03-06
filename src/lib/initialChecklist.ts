import { LAST_OM } from "../constants"
import type { ChecklistElement } from "../types"

export const initialChecklist = () => {
    const InitialChecklist: ChecklistElement[] = []

    for (let i = LAST_OM; i >= 1; i--) {
        for (let j = 1; j <= 3; j++) {
            const v = j === 1 ? (i === 1 ? 4 : 12) : 6
            for (let k = 1; k <= v; k++) {
                InitialChecklist.push({
                    id: `${i}.${j}.${k}`,
                    bgColor: "white",
                })
            }
        }
    }

    return InitialChecklist
}
