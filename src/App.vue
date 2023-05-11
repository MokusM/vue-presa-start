<template>
	<WarningFirstScreen v-if="WarningScreen" @hide="WarningScreen = false" />
	<div v-else class="main-wrapper">
		<transition name="fade" mode="out-in" appear>
			<component :is="`slide-${currentSlide}`" @show="hideBtn = false" :class="`slide-${currentSlide}`" />
		</transition>

		<button class="btn-navigation btn-navigation--prev" v-if="!hideBtn" :disabled="currentSlide === 1" @click="prevSlide">
			<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background: new 0 0 488 420" viewBox="0 0 488 420">
				<path
					d="M4.9 181.6 220.4 4c4-3.3 9.6-4 14.3-1.8 4.7 2.2 7.7 7 7.7 12.2V108c104.6 3.8 176.5 40.7 213.9 109.8 32.2 59.6 31.9 130.2 31.6 176.9v10.8c0 6.1-4.1 11.5-10.1 13.1-1.1.3-2.3.4-3.4.4-4.8 0-9.3-2.5-11.7-6.8-73-128.7-133.1-134.9-220.2-135.2v93.3c0 5.2-3 10-7.8 12.2s-10.3 1.5-14.4-1.8L4.9 202.5c-3.1-2.6-4.9-6.4-4.9-10.4s1.8-7.9 4.9-10.5zm210.5 160v-78.1c0-3.6 1.4-7 4-9.5 2.5-2.5 6-4 9.5-4 54.4 0 96.1 1.5 136.6 20.4 35 16.3 65.3 44 95.2 87.5-1.2-39.7-6.4-87.1-28.1-127.2-34.4-63.6-101-95.1-203.7-96-7.4-.1-13.4-6.1-13.4-13.5V43L34.8 192.1l180.6 149.5z"
					style="fill: #959595"
				/>
			</svg>
		</button>

		<button class="btn-navigation btn-navigation--next" v-if="!hideBtn" :disabled="slidesCount === currentSlide" @click="nextSlide">
			<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background: new 0 0 488 420" viewBox="0 0 488 420">
				<path
					d="M483.1 181.6 267.6 4c-4-3.3-9.6-4-14.3-1.8s-7.7 7-7.7 12.2V108C141 111.8 69.1 148.7 31.7 217.8-.5 277.4-.2 348 .1 394.7v10.8c0 6.1 4.1 11.5 10.1 13.1 1.1.3 2.3.4 3.4.4 4.8 0 9.3-2.5 11.7-6.8 73-128.7 133.1-134.9 220.2-135.2v93.3c0 5.2 3 10 7.8 12.2 4.8 2.2 10.3 1.5 14.4-1.8l215.4-178.2c3.1-2.6 4.9-6.4 4.9-10.4s-1.8-7.9-4.9-10.5zm-210.5 160v-78.1c0-3.6-1.4-7-4-9.5-2.5-2.5-6-4-9.5-4-54.4 0-96.1 1.5-136.6 20.4-35 16.3-65.3 44-95.2 87.5 1.2-39.7 6.4-87.1 28.1-127.2 34.4-63.6 101-95.1 203.7-96 7.4-.1 13.4-6.1 13.4-13.5V43l180.7 149.1-180.6 149.5z"
					style="fill: #959595"
				/>
			</svg>
		</button>
	</div>
	{{ hideNext }}
	<RotateDevice />
	<!-- <MainLogos v-if="!WarningScreen" /> -->
</template>

<script>
import RotateDevice from './components/RotateDevice.vue';
import MainLogos from './components/MainLogos.vue';
import WarningFirstScreen from './components/WarningFirstScreen.vue';
import { ref } from 'vue';

export default {
	name: 'App',
	components: {
		RotateDevice,
		MainLogos,
		WarningFirstScreen,
	},

	setup() {
		const currentSlide = ref(1);
		const WarningScreen = ref(true);
		const hideBtn = ref(true);
		const slides = require.context('./slides', true, /[\w-]+\.vue$/);
		const slidesCount = slides.keys().length;

		const nextSlide = () => {
			currentSlide.value++;
			hideBtn.value = true;
		};
		const prevSlide = () => {
			currentSlide.value--;
			hideBtn.value = true;
		};

		return {
			prevSlide,
			nextSlide,
			currentSlide,
			WarningScreen,
			hideBtn,
			slidesCount,
		};
	},
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Century Gothic', sans-serif;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}

p {
	margin: 0;
}

body {
	line-height: 1.2;
	font-family: 'Century Gothic';
	font-weight: 400;
	color: #000000;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	text-size-adjust: none;
}

ol,
ul {
	list-style: none;
}

img {
	border: 0;
	vertical-align: middle;
	display: block;
	max-width: 100%;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

* {
	outline: none !important;
	-webkit-tap-highlight-color: transparent;
}

*,
*:before,
*:after {
	-webkit-box-sizing: inherit;
	box-sizing: inherit;
}

a {
	text-decoration: none;
}

b,
strong,
.bold {
	font-weight: 700;
}

i {
	font-style: italic;
}

sup {
	font-size: 60%;
	vertical-align: super;
	line-height: 1;
}

body,
html {
	height: 100%;
	padding: 0px;
	margin: 0px;
	overflow: hidden;
	font-family: 'Century Gothic', sans-serif;
	color: #303030;
}

* {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

* {
	font-family: 'Century Gothic', sans-serif;
}

body {
	min-height: 100vh;
	/* mobile viewport bug fix */
	min-height: -webkit-fill-available;
}

html {
	height: -webkit-fill-available;
}

/*main style*/
.slide {
	padding: 13.3em 13.7em 2em;
	min-height: 100%;
	margin: 0 auto;
	position: relative;
}

.containerBlock {
	height: 100%;
	overflow: hidden;
}

.panel {
	height: 100%;
	width: 100%;
	position: absolute;
	background-color: #fff;
	overflow: hidden;
}

.panel.active {
	z-index: 10;
}
#app {
	min-height: 100%;
	min-height: -webkit-fill-available;
	display: flex;
}
.main-wrapper {
	width: 100%;
	overflow: hidden;
	font-size: clamp(1px, 0.925925vh, 0.520833vw);
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.btn-navigation {
	position: absolute;
	bottom: 5.5em;

	width: 6.8em;
	height: 6.8em;
	cursor: pointer;
	font-size: inherit;
	background: transparent;
	padding: 0;
	border: none;
	padding: 0;

	&--prev {
		left: 5.5em;
	}
	&--next {
		right: 5.5em;
	}

	svg {
		width: 100%;
		height: 100%;
	}

	&:disabled {
		opacity: 0;
		pointer-events: none;
	}
}
@media (hover: hover) {
	.next:hover,
	.prev:hover {
		transition: all 0.3s;
		opacity: 0.6;
	}
}

.slide {
	padding: 13.3em 13.7em 2em;
	min-height: 100%;
	margin: 0 auto;
	position: relative;
}
</style>
