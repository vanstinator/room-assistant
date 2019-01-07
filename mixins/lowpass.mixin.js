'use strict';

const LPF = require('lpf');
LPF.smoothing = 0.5;

module.exports = {
    methods: {
        lowPass(item, value) {
            const lpf = this.lpf.has(item) ? this.lpf.get(item) : LPF.init([]);

            if (!this.lpf.has(item)) {
                this.lpf.set(item, lpf);
            }

            return LPF.next(value);
        }
    },

    created() {
        this.lpf = new Map();
    }
};
