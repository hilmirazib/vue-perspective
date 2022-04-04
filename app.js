Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
            scale: 1,
        };
    },
    computed: {
        box() {
            return {
                transform: `
                perspective(${this.perspective}px) 
                rotateX(${this.rotateX}deg) 
                rotateY(${this.rotateY}deg) 
                rotateZ(${this.rotateZ}deg) 
                scale(${this.scale})`,
            };
        },
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.scale = 1;
        },
        copy() {
            var el = document.createElement('textarea');
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';

            el.value = `
                transform: ${this.box.transform};
            `;
            document.body.appendChild(el);
            el.select();

            document.execCommand('copy');
            document.body.removeChild(el);
            // const text = `
            //     perspective: ${this.perspective}px;
            //     rotateX: ${this.rotateX}deg;
            //     rotateY: ${this.rotateY}deg;
            //     rotateZ: ${this.rotateZ}deg;
            //     scale: ${this.scale};
            // `;
            // navigator.clipboard.writeText(text);
            // alert('Copied to clipboard');
        },
    },
}).mount('#app');