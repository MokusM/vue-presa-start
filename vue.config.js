const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "@/assets/scss/index";',
			},
		},
	},

	configureWebpack: {
		devtool: 'source-map',
		resolve: {
			alias: {
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@img': path.resolve(__dirname, 'src/assets/images'),
				'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
			},
		},
	},
});
