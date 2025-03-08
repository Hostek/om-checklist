<script lang="ts">
    import { checklistOM } from "$lib/stores/checklist"
    import { theme } from "$lib/stores/theme"
    import { bgColors } from "../constants"

    export let id: string
    export let content: string

    $: currentIdx = $checklistOM.findIndex((v) => v.id === id)
    $: bgColor = $checklistOM[currentIdx].bgColor
    $: tabindex = 5 + currentIdx

    function handleClick() {
        // console.log("hi from ", id)
        checklistOM.update((curr) => {
            const new_arr = [...curr]
            const curr_bgColor = curr[currentIdx].bgColor
            let bg_idx = bgColors.findIndex((curr) => curr === curr_bgColor) + 1
            if (bg_idx >= bgColors.length) bg_idx = 0
            new_arr[currentIdx].bgColor = bgColors[bg_idx]
            return new_arr
        })
    }

    type KeydownEventParam = KeyboardEvent & {
        currentTarget: EventTarget & HTMLDivElement
    }

    function handleKeyDown(e: KeydownEventParam) {
        if (e.key === "Enter" || e.key === " ") {
            handleClick()
        }
    }
</script>

<div
    {id}
    tabindex="0"
    class={`boxy ${bgColor}`}
    role="button"
    data-theme={$theme}
    on:keydown={handleKeyDown}
    on:click={handleClick}
>
    {content}
</div>

<style lang="scss">
    [data-theme="dark"] {
        --font-color: snow;
        --border-color: #807769;
        --yellow: #999900;
        --green: #5d8400;
        --red: #cc3700;
        --neutral: #181a1b;
        --blue: #054d79;
    }
    [data-theme="light"] {
        --font-color: black;
        --border-color: #242526;
        --yellow: yellow;
        --green: greenyellow;
        --red: orangered;
        --neutral: white;
        --blue: lightskyblue;
    }

    .boxy {
        // border: 1px solid hsl(339, 65%, 54%);
        border: 1px solid var(--border-color);

        text-align: center;
        min-height: 10vh;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--font-color);
    }

    .white {
        background-color: var(--neutral);
    }

    .yellow {
        background-color: var(--yellow);
    }

    .green {
        background-color: var(--green);
    }

    .red {
        background-color: var(--red);
    }

    .blue {
        background-color: var(--blue);
    }
</style>
