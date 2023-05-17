<template>
	<div class="slide slide-1">
		<h1>Slide 1</h1>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
	name: 'slide-1',
	emits: ['show'],
	setup(props, { emit }) {
		const done = () => {
			setTimeout(() => {
				emit('show');
			}, 2000);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
