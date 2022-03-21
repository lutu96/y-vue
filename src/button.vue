<template>
  <button class="y-button" :class="{[`button-icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="y-icon" aria-hidden="true">
            <use :xlink:href="`#y-${icon}`"></use>
        </svg>
        <div class="content">
            <slot/>
        </div>
  </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator (value) {
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>

<style lang="scss">
    .y-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: var(--button-height);
        padding: 0 1em;
        font-size: inherit;
        vertical-align: middle;
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
    .y-icon {
        width: 1em;
        height: 1em;
        overflow: hidden;

    }
    .button-icon-left {
        .y-icon {
            order: 1;
            margin-right: .4em;
        }
        .content {
            order: 2;
        }
    }

    .button-icon-right {
        .y-icon {
            order: 2;
            margin-left: .4em;
        }
        .content {
            order: 1;
        }
    }
</style>