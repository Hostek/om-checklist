<script lang="ts">
    import { checklistOM } from "$lib/checklist"
    import { bgColors } from "../constants"

    export let id: string
    export let content: string

    $: currentIdx = $checklistOM.findIndex((v) => v.id === id)
    $: bgColor = $checklistOM[currentIdx].bgColor
    $: tabindex = 5 + currentIdx

    function handleClick() {
        console.log("hi from ", id)
        checklistOM.update((curr) => {
            const new_arr = [...curr]
            const curr_bgColor = curr[currentIdx].bgColor
            let bg_idx = bgColors.findIndex((curr) => curr === curr_bgColor) + 1
            if (bg_idx >= bgColors.length) bg_idx = 0
            new_arr[currentIdx].bgColor = bgColors[bg_idx]
            return new_arr
        })
    }
</script>

<div
    {id}
    {tabindex}
    class={`boxy ${bgColor}`}
    role="button"
    on:keydown={handleClick}
    on:click={handleClick}
>
    {content}
</div>

<style lang="scss">
    .boxy {
        border: 1px solid hsl(339, 65%, 54%);
        // color: cadetblue;

        text-align: center;
        min-height: 10vh;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .white {
        // background-color: #242526;
        background-color: white;
    }

    .yellow {
        background-color: yellow;
    }

    .green {
        background-color: green;
    }

    .red {
        background-color: red;
    }
</style>
