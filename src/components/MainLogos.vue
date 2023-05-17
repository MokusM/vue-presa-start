<template>
	<img class="main-logo" src="@img/logo.svg" alt="" />
	<img class="logo-brand logo-brand--left" src="@img/logo.svg" alt="" />
	<img class="logo-brand logo-brand--right" src="@img/logo.svg" alt="" />
</template>

<script>
export default {
	name: 'MainLogos',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
