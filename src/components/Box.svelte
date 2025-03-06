<script lang="ts">
    export let id: string
    export let content: string
    export let bgColor: string
</script>

<div {id} class={`boxy ${bgColor}`}>{content}</div>

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
