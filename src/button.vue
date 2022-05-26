<template>
  <button class="y-button" :class="{[`button-icon-${iconPosition}`]: true}" @click="$emit('click')">
        <y-icon v-if="icon && !loading" class="icon" :name="icon"></y-icon>
        <y-icon v-if="loading" class="loading icon" name="loading"></y-icon>
        <div class="content">
            <slot/>
        </div>
  </button>
</template>

<script>
import Icon from './icon.vue'
export default {
    props: {
        icon: {
            type: String
        },
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator (value) {
                return value === 'left' || value === 'right'
            }
        }
    },
    components: {
        'y-icon': Icon
    }
}
</script>

<style lang="scss">
    @keyframes loading {
        0% {
            transform: rotate(0deg);;
        }
        100% {
            transform: rotate(360deg);
        }
    }
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
    .button-icon-left {
        .icon {
            order: 1;
            margin-right: .4em;
        }
        .content {
            order: 2;
        }
    }

    .button-icon-right {
        .icon {
            order: 2;
            margin-left: .4em;
        }
        .content {
            order: 1;
        }
    }
    .loading {
        animation: loading 2s infinite linear;
    }
</style>