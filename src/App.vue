<template>
	<div class="main-wrapper">
		<WarningFirstScreen v-if="warningScreen" @hide="warningScreen = false" />
		<div v-else class="slide-content">
			<transition name="fade" mode="out-in" appear>
				<component :is="`slide-${currentSlide}`" @show="hideBtn = false" />
			</transition>

			<transition name="fade" mode="out-in" appear>
				<button class="btn-navigation btn-navigation--prev" v-if="!hideBtn" :disabled="currentSlide === 1" @click="prevSlide">
					<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background: new 0 0 488 420" viewBox="0 0 488 420">
						<path
							d="M4.9 181.6 220.4 4c4-3.3 9.6-4 14.3-1.8 4.7 2.2 7.7 7 7.7 12.2V108c104.6 3.8 176.5 40.7 213.9 109.8 32.2 59.6 31.9 130.2 31.6 176.9v10.8c0 6.1-4.1 11.5-10.1 13.1-1.1.3-2.3.4-3.4.4-4.8 0-9.3-2.5-11.7-6.8-73-128.7-133.1-134.9-220.2-135.2v93.3c0 5.2-3 10-7.8 12.2s-10.3 1.5-14.4-1.8L4.9 202.5c-3.1-2.6-4.9-6.4-4.9-10.4s1.8-7.9 4.9-10.5zm210.5 160v-78.1c0-3.6 1.4-7 4-9.5 2.5-2.5 6-4 9.5-4 54.4 0 96.1 1.5 136.6 20.4 35 16.3 65.3 44 95.2 87.5-1.2-39.7-6.4-87.1-28.1-127.2-34.4-63.6-101-95.1-203.7-96-7.4-.1-13.4-6.1-13.4-13.5V43L34.8 192.1l180.6 149.5z"
						/>
					</svg>
				</button>
			</transition>
			<transition name="fade" mode="out-in" appear>
				<button class="btn-navigation btn-navigation--next" v-if="!hideBtn" :disabled="slidesCount === currentSlide" @click="nextSlide">
					<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background: new 0 0 488 420" viewBox="0 0 488 420">
						<path
							d="M483.1 181.6 267.6 4c-4-3.3-9.6-4-14.3-1.8s-7.7 7-7.7 12.2V108C141 111.8 69.1 148.7 31.7 217.8-.5 277.4-.2 348 .1 394.7v10.8c0 6.1 4.1 11.5 10.1 13.1 1.1.3 2.3.4 3.4.4 4.8 0 9.3-2.5 11.7-6.8 73-128.7 133.1-134.9 220.2-135.2v93.3c0 5.2 3 10 7.8 12.2 4.8 2.2 10.3 1.5 14.4-1.8l215.4-178.2c3.1-2.6 4.9-6.4 4.9-10.4s-1.8-7.9-4.9-10.5zm-210.5 160v-78.1c0-3.6-1.4-7-4-9.5-2.5-2.5-6-4-9.5-4-54.4 0-96.1 1.5-136.6 20.4-35 16.3-65.3 44-95.2 87.5 1.2-39.7 6.4-87.1 28.1-127.2 34.4-63.6 101-95.1 203.7-96 7.4-.1 13.4-6.1 13.4-13.5V43l180.7 149.1-180.6 149.5z"
						/>
					</svg>
				</button>
			</transition>
		</div>
		<RotateDevice />
		<MainLogos :slide="currentSlide" v-if="!warningScreen" :class="`slide-${currentSlide}`" />
	</div>
</template>

<script>
import RotateDevice from './components/RotateDevice.vue';
import MainLogos from './components/MainLogos.vue';
import WarningFirstScreen from './components/WarningFirstScreen.vue';
import { ref, onMounted } from 'vue';

export default {
	name: 'App',
	components: {
		RotateDevice,
		MainLogos,
		WarningFirstScreen,
	},

	setup() {
		const currentSlide = ref(1);
		const mainFontSize = ref(10);
		const warningScreen = ref(false);
		const hideBtn = ref(true);
		const slides = require.context('./slides', true, /[\w-]+\.vue$/);
		const slidesCount = slides.keys().length;

		const urlParams = new URLSearchParams(window.location.search);

		const slideQueryParam = urlParams.get('slide');

		if (slideQueryParam) {
			warningScreen.value = false;
			currentSlide.value = parseInt(slideQueryParam);
		}

		const nextSlide = () => {
			currentSlide.value++;
			hideBtn.value = true;
		};
		const prevSlide = () => {
			currentSlide.value--;
			hideBtn.value = true;
		};

		const vh = (vh, vw) => {
			const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			const sizeH = ((vh * (h - 10)) / 100).toFixed(3);
			const sizeW = ((vw * w) / 100).toFixed(3);
			mainFontSize.value = `clamp(1px, ${sizeH}px, ${sizeW}px)`;
		};

		onMounted(() => {
			vh(0.9259, 0.521);
		});

		window.addEventListener('resize', () => {
			vh(0.9259, 0.521);
		});

		return {
			prevSlide,
			nextSlide,
			currentSlide,
			warningScreen,
			hideBtn,
			slidesCount,
			mainFontSize,
		};
	},
};
</script>

<style lang="scss">
/*main style*/
.slide {
	padding: 13.3em 13.7em 2em;
	min-height: 100%;
	margin: 0 auto;
	position: relative;
}
#app {
	min-height: 100%;
	min-height: -webkit-fill-available;
	display: flex;
}
.main-wrapper {
	width: 100%;
	overflow: hidden;
	font-size: v-bind(mainFontSize);
}
.slide-content {
	height: 100%;
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
	z-index: 3;

	&--prev {
		left: 5.5em;
	}
	&--next {
		right: 5.5em;
	}

	svg {
		width: 100%;
		height: 100%;
		fill: #959595;
	}

	&:disabled {
		opacity: 0;
		pointer-events: none;
	}
}
@media (hover: hover) {
	.btn-navigation:hover,
	.btn-navigation:hover {
		transition: all 0.3s;
		opacity: 0.6;
	}
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
