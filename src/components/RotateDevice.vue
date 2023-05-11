<template>
	<div class="warning-rotate">
		<div class="warning-rotate__phone"><img src="@img/rotate-device.png" /></div>
		<span class="warning-rotate__text">Поверніть будь ласка ваш девайс</span>
	</div>
</template>

<script>
export default {
	name: 'RotateDevice',
};
</script>
<style lang="scss" scoped>
.warning-rotate {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: linear-gradient(45deg, rgba(88, 182, 213, 1) 0%, rgba(141, 205, 206, 1) 68%, rgba(141, 205, 206, 1) 93%);
	z-index: 99999;
	position: fixed;
	top: 0;
	left: 0;
	text-align: center;

	&__phone {
		display: block;
		animation: animationFrames ease-out 4s;
		animation-iteration-count: infinite;
		transform-origin: 50% 50%;
		animation-delay: 2s;

		img {
			display: block;
			margin: 0 auto;
		}
	}

	&__text {
		font-weight: 500;
		font-style: normal;
		font-size: 18px;
	}
}
@keyframes animationFrames {
	0% {
		transform: rotate(0deg) scaleX(1) scaleY(1);
	}

	50% {
		transform: rotate(90deg) scaleX(1) scaleY(1);
	}

	60% {
		transform: rotate(100deg) scaleX(1) scaleY(1);
	}

	70% {
		transform: rotate(80deg) scaleX(1) scaleY(1);
	}

	80% {
		transform: rotate(90deg) scaleX(1) scaleY(1);
	}

	90% {
		transform: rotate(275deg) scaleX(0) scaleY(0);
	}

	100% {
		transform: rotate(360deg) scaleX(1) scaleY(1);
	}
}
@media (orientation: landscape) {
	.warning-rotate {
		display: none;
	}
}
</style>
