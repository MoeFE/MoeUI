<template>
    <label class="moe-radio-wrapper">
        <input type="radio" class="moe-radio moe-radio-hide">
        <star :class="'moe-radio-svg'" v-if="icon === 'star'"></star>
        <star :class="'moe-radio-svg-shadow'" v-if="icon === 'star'"></star>
        <heart :class="'moe-radio-svg'" v-if="icon === 'heart'"></heart>
        <heart :class="'moe-radio-svg-shadow'" v-if="icon === 'heart'"></heart>
        <slot></slot>
    </label>
</template>

<script>
import Star from '../svgs/star.vue';
import Heart from '../svgs/heart.vue';
const prefix = 'moe-radio';
export default {
    name: 'MoeRadio',
    components: { Star, Heart },
    props: {
        'icon': String
    }
}
</script>