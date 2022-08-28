const mixins = {
    methods: {
        getStaticImg(src) {
            return require(`../assets/images/${src}`);
        },
    },
};

export default mixins;