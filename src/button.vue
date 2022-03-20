<template>
  <button class="y-button">设置</button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .y-button {
        height: var(--button-height);
        padding: 0 1em;
        font-size: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover {
            border-color: var(--border-color-hover)
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>