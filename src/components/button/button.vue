<template>
    <button :disabled="disabled" @click="handleClick" :class="classes">
        <slot></slot>
        <star :class="'moe-btn-svg moe-btn-svg-'+type" v-if="icon==='star'"></star>
        <heart :class="'moe-btn-svg moe-btn-svg-'+type" v-if="icon==='heart'"></heart>
    </button>
</template>

<script>
import Star from '../svgs/star.vue';
import Heart from '../svgs/heart.vue';
const prefix = 'moe-btn';

export default {
    name: 'MoeButton',
    components: { Star, Heart },
    props: {
        icon: String,
        type: String,
        disabled: Boolean
    },
    computed: {
        classes() {
            return [
                `${prefix}`,
                {
                    [`${prefix}-${this.type}`]: !!this.type,
                }
            ];
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    },

}
</script>