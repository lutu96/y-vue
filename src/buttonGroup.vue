<template>
  <div class="y-button-group">
      <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .y-button-group {
        display: inline-flex;
        vertical-align: middle;
        .y-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            &:last-child {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
            &:hover {
                position: relative;
                index: 1;
            }
        }
    }
</style>