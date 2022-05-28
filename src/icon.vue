<template>
    <svg class="y-icon" aria-hidden="true">
        <use :xlink:href="`#y-${name}`"></use>
    </svg>
</template>

<script>
import './svg'
export default {
    name: 'y-icon',
    props: {
        name: {
            type: String
        }
    }
}
</script>

<style lang="scss">
    .y-icon {
        width: 1em;
        height: 1em;
        overflow: hidden;
    }
</style>