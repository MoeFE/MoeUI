<template>
    <button :disabled="disabled" :class="classes">
        <slot></slot>
        <star id="moe-svg-star" :class="'moe-btn-svg moe-btn-svg-'+type" v-if="icon==='star'"></star>
        <heart id="moe-svg-heart" :class="'moe-btn-svg moe-btn-svg-'+type" v-if="icon==='heart'"></heart>
    </button>
</template>

<script>
import SVG from 'svg.js'
import Star from '../svgs/star.vue';
import Heart from '../svgs/heart.vue';
const prefix = 'moe-btn';

export default {
    name: 'MoeButton',
    components: { Star, Heart },
    props: ['icon', 'type', 'size', 'disabled'],
    computed: {
        classes() {
            return [
                `${prefix}`,
                {
                    [`${prefix}-${this.type}`]: !!this.type,
                    [`${prefix}-long`]: this.long,
                    [`${prefix}-${this.shape}`]: !!this.shape,
                    [`${prefix}-${this.size}`]: !!this.size,
                }
            ];
        }
    },
    mounted: function () {
        const icon = this.icon;
        let s;
        if (icon === 'star') {
            s = SVG("moe-svg-star");
        } else if (icon === 'heart') {
            s = SVG("moe-svg-heart");
        } else {
            return;
        }
        s.rotate(30,0,0);
    }

}
</script>