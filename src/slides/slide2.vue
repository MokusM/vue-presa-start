<template>
	<div class="slide slide-2">
		<h1>Slide 2</h1>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
	name: 'slide-2',
	emits: ['show'],
	setup(props, { emit }) {
		const done = () => {
			setTimeout(() => {
				emit('show');
			}, 200);
		};

		onMounted(() => {
			gsap
				.timeline({ onComplete: () => done() })
				.from('h1', { y: -200, duration: 1 })
				.to('h1', { rotation: '+=360', duration: 1 });
		});
	},
};
</script>

<style lang="scss" scoped>
.slide-2 {
	background: #000;
}
</style>
