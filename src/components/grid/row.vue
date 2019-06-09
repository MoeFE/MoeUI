<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
const prefix = 'moe-row';
export default {
    name: 'MoeRow',
    props: {
        gutter: Number,
        type: String,
        justify: String,
        align: String
    },
    computed: {
        classes() {
            return [
                {
                    [`${prefix}`]: !this.type,
                    [`${prefix}-${this.type}`]: !!this.type,
                    [`${prefix}-${this.type}-align-${this.align}`]: !!this.align,
                    [`${prefix}-${this.type}-justify-${this.justify}`]: !!this.justify,
                }
            ];
        },
        styles() {
            let style = {};
            if (this.gutter !== 0) {
                style = {
                    marginLeft: this.gutter / -2 + 'px',
                    marginRight: this.gutter / -2 + 'px'
                };
            }
            return style;
        }
    },
    methods: {
        updateGutter(val) {
            this.$children.forEach((child) => {
                if (val !== 0) {
                    child.gutter = val;
                }
            });
        }
    },
    watch: {
        gutter(val) {
            this.updateGutter(val);
        }
    },
    mounted() {
        if (this.gutter) {
            this.$children.forEach((child) => {
                child.gutter = this.gutter;
            });
        }
    }
};
</script>