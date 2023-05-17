<template>
	<div class="slide">
		<h1 class="box">Slide 3</h1>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
	name: 'slide-3',
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
				.from('.box', { y: -200, duration: 1 })
				.to('.box', { rotation: '+=360', duration: 1 });
		});
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
