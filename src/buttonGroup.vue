<template>
  <div class="y-button-group">
      <slot />
  </div>
</template>

<script>
export default {
    mounted () {
        for( let node of this.$el.children ) {
            let name = node.nodeName.toLowerCase()
            if (name !== 'button') {
                console.error(`button-group组件子元素只能是button组件，而现在是${name}`)
            }
        }
    }
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