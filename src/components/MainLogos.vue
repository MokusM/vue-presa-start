<template>
	{{ mainLogo }}
	{{ rightLogo }}
	{{ slide }}
	<img class="main-logo" :src="require(`@img/logo-${mainLogo}.svg`)" alt="" />
	<img class="logo-brand logo-brand--left" :src="require(`@img/left-${leftLogo}.png`)" alt="" />
	<img class="logo-brand logo-brand--right" :src="require(`@img/right-${rightLogo}.png`)" alt="" />
</template>

<script>
import { ref, watch } from 'vue';
export default {
	name: 'MainLogos',
	props: {
		slide: {
			type: Number,
			default: 1,
		},
	},
	setup(props) {
		const mainLogo = ref('dark');
		const leftLogo = ref('dark');
		const rightLogo = ref('dark');
		const mainLogoWhite = [2];
		const leftLogoWhite = [2];
		const rightLogoWhite = [2];

		mainLogo.value = mainLogoWhite.includes(props.slide) ? 'white' : 'dark';
		leftLogo.value = leftLogoWhite.includes(props.slide) ? 'white' : 'dark';
		rightLogo.value = rightLogoWhite.includes(props.slide) ? 'white' : 'dark';
		watch(
			() => props.slide,
			() => {
				mainLogo.value = mainLogoWhite.includes(props.slide) ? 'white' : 'dark';
				leftLogo.value = leftLogoWhite.includes(props.slide) ? 'white' : 'dark';
				rightLogo.value = rightLogoWhite.includes(props.slide) ? 'white' : 'dark';
			}
		);
		return {
			mainLogo,
			leftLogo,
			rightLogo,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
	color: #fff;
}
.main-logo {
	position: absolute;
	right: 5em;
	top: 5em;
	width: 18em;
	pointer-events: none;
}
.logo-brand {
	position: absolute;
	pointer-events: none;
	width: 10em;
	&--left {
		top: 5em;
		left: 5em;
	}
	&--right {
		bottom: 5em;
		right: 5em;
	}
}
</style>
