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
		const mainLogoWhite = [5];
		const leftLogoWhite = [5];
		const rightLogoWhite = [5];

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
	right: 6em;
	top: 5em;
	width: 27em;
	pointer-events: none;
}
.logo-brand {
	position: absolute;
	pointer-events: none;
	z-index: 11;
	&--left {
		top: 5em;
		left: 5em;
		width: 18em;
	}
	&--right {
		bottom: 2em;
		right: 2em;
		width: 18.2em;
	}
}
</style>
