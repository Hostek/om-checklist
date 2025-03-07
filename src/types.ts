import type { Themes } from "./constants"

export interface ChecklistElement {
    id: string
    bgColor: string
}

export type Theme = (typeof Themes)[number]
