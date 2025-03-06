<script lang="ts">
    export let id: string
    export let content: string
</script>

<div {id} class="boxy white">{content}</div>

<style lang="scss">
    .boxy {
        border: 1px solid hsl(339, 65%, 54%);
    }

    .white {
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
