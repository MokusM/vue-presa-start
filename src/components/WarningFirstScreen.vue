<template>
	<div class="warning">
		<div class="warning-container">
			<div class="warning__info">
				<div class="warning__title">ШАНОВНИЙ ФАРМАЦЕВТЕ!</div>
				<div class="warning__block">
					<svg class="warning__icon" width="78" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
						<path
							d="M630.8 469.1L576 426.1V144C576 117.5 554.5 96 528 96h-88l-12.38-32.88C420.6 44.38 402.8 32 382.8 32h-125.5c-20 0-38 12.38-45 31.12L200 96H154.8L38.81 5.109C34.41 1.672 29.19 0 24.03 0c-7.125 0-14.19 3.156-18.91 9.187c-8.188 10.44-6.375 25.53 4.062 33.7l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM414.9 299.9L286.1 198.9C296.7 194.8 307.9 192 320 192c53 0 96 43 96 96C416 292.1 415.4 295.9 414.9 299.9zM320 384c-53 0-96-43-96-96c0-4.998 .7363-9.8 1.473-14.59L64 146.8V432C64 458.5 85.5 480 112 480h377.1l-131.1-103.5C345.7 381.3 333.1 384 320 384z"
							fill="currentColor"
						/>
					</svg>
					<div class="warning__label">
						ФОТО-ТА ВІДЕОЗЙОМКА ЗАБОРОНЕНІ<br />
						<span>МАТЕРІАЛ ДЛЯ ВНУТРІШНЬОГО ВИКОРИСТАННЯ</span>
					</div>
				</div>
				<button type="button" class="access-button" @click.prevent="$emit('hide')">Даю згоду</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WarningFirstScreen',
};
</script>

<style lang="scss" scoped>
.warning {
	font-family: 'Century Gothic', sans-serif;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 1);
	display: flex;
	align-items: center;
	justify-content: center;
	&__info {
		text-align: center;
		color: #cd0000;
		font-family: sans-serif;
		margin-top: -7%;
	}

	&__title {
		font-size: clamp(0.7vw, 3.33vh, 1.87vw);
		margin-bottom: 4.8vh;
		font-weight: 700;
	}

	&__block {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	&__label {
		font-weight: 700;
		font-size: clamp(0.5vw, 4.1vh, 2.3vw);
		line-height: 1.2;
		span {
			font-size: clamp(0.5vw, 3.1vh, 1.65vw);
			font-weight: 400;
		}
	}
	&__icon {
		height: 9.5vh;
		width: 9.5vh;
		display: block;
		margin-right: 1.1vw;
	}
}
.warning-container {
}
.access-button {
	color: #fff;
	background-color: #dc3545;
	border-color: #dc3545;
	padding: 2vh 3vh;
	font-size: clamp(0.5vw, 3.1vh, 1.65vw);
	font-weight: 700;
	cursor: pointer;
	border: none;
	margin-top: 5vh;
}
@media (hover: hover) {
	.access-button:hover {
		transition: all 0.3s;
		opacity: 0.6;
	}
}
</style>
