<template>
	<div class="box-scratch" ref="canvasWrap">
		<slot />
		<canvas ref="myCanvas" @mousedown="canvasDraw" @mousemove="mouseMove" @mouseup="finishDraw" @touchmove="touchMove" :width="height" :height="height"> </canvas>
		<div class="hand"></div>
	</div>
</template>

<script>
import { onMounted, onUpdated, reactive, ref } from 'vue';
import { useMouse } from '@vueuse/core';
export default {
	name: 'ScratchImg',
	emits: ['finish'],
	setup(props, { emit }) {
		const myCanvas = ref(null);
		const canvasWrap = ref(null);
		const mouse = reactive(useMouse());
		const height = ref(0);

		onMounted(() => {
			height.value = canvasWrap.value.offsetWidth;
			initCanvas();
		});

		onUpdated(() => {
			height.value = canvasWrap.value.offsetWidth;
			initCanvas();
		});

		const initCanvas = () => {
			//const canvas = document.getElementById('myCanvas');
			const ctx = myCanvas.value?.getContext('2d');
			ctx.clearRect(0, 0, canvasWrap.value.clientHeight, canvasWrap.value.clientWidth);
			ctx.fillStyle = '#e9e9e9';

			ctx.fillRect(0, 0, canvasWrap.value.clientHeight, canvasWrap.value.clientWidth);
			ctx.fillStyle = '#fff';
			ctx.canvas.style.opacity = 1;
		};

		const scratching = () => {
			const { x, y } = getClientOffset(mouse);
			const ctx = myCanvas.value?.getContext('2d');
			myCanvas.value.classList.add('move');
			const offsetX = x - 0.001;
			const offsetY = y - 0.001;

			ctx.globalCompositeOperation = 'destination-out';
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
			ctx.lineWidth = '30';
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(offsetX, offsetY);
			ctx.stroke();
			getFilledPercentage(ctx);
		};

		const getClientOffset = (position) => {
			if (myCanvas.value) {
				const rect = myCanvas.value.getBoundingClientRect();
				const point = {
					x: position.x - rect.left,
					y: position.y - rect.top,
				};
				return point;
			}
		};

		const getFilledPercentage = (ctx) => {
			let imgData;

			imgData = ctx.getImageData(0, 0, canvasWrap.value.clientHeight, canvasWrap.value.clientWidth);

			let pixels = imgData.data;
			let n = 0;
			for (let i = 0; i < pixels.length; i += 100) {
				if (pixels[i + 3] < 128) {
					n += 100;
				}
			}

			if (n >= pixels.length * 0.7) {
				ctx.globalCompositeOperation = 'destination-over';
				emit('finish');
				fadeOut(ctx);
			}
		};

		const fadeOut = (ctx) => {
			let timesRun = 0;
			let interval = setInterval(() => {
				timesRun += 1;
				ctx.canvas.style.opacity *= 0.99;
				if (timesRun === 100) {
					clearInterval(interval);
				}
			}, 50);
		};

		let isDraw = false;
		const canvasDraw = () => {
			isDraw = true;
		};

		const mouseMove = () => {
			if (!isDraw) return;
			scratching();
		};

		const finishDraw = () => {
			isDraw = false;
		};

		const touchMove = (e) => {
			const canvas = myCanvas.value;
			if (e.target === canvas) {
				e.preventDefault();
				scratching();
			}
		};

		return {
			// ref
			myCanvas,
			canvasWrap,
			height,

			// methods
			canvasDraw,
			mouseMove,
			finishDraw,
			touchMove,
		};
	},
};
</script>

<style lang="scss" scoped>
.box-scratch {
	position: relative;
	overflow: hidden;
}
canvas {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
}
canvas.move + .hand {
	opacity: 0;
}
@keyframes wobble-hor-top {
	0%,
	100% {
		transform: translateX(0%);
		transform-origin: left top;
	}

	15% {
		transform: translateX(-7px) rotate(2deg);
	}

	30% {
		transform: translateX(3px) rotate(-2deg);
	}

	45% {
		transform: translateX(-3px) rotate(0.9deg);
	}

	60% {
		transform: translateX(2px) rotate(-0.6deg);
	}

	75% {
		transform: translateX(-1px) rotate(0.3deg);
	}
}
.hand {
	position: absolute;
	pointer-events: none;
	width: 4em;
	height: 4em;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%) rotate(-25deg);
}

.hand:before {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(@img/hand-pointer.svg);
	background-repeat: no-repeat;
	background-size: contain;
	animation: wobble-hor-top 2.5s 3s infinite both;
	animation-delay: inherit;
}
</style>
