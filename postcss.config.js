const postcssConfig = {
    plugins: {
        precss: {},
        'postcss-preset-env': {
            browsers: 'last 1 versions', // 浏览器兼容的版本
            stage: 3 // 你用的属性所在的阶段
        },
        'postcss-nesting': {} // 这里就是你所使用的插件
    }
};
module.exports = postcssConfig