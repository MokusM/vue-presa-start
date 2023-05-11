<template>
	<div class="slide">
		<h1 ref="box">Slide 2</h1>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
	name: 'slide-2',
	emits: ['show'],
	setup(props, { emit }) {
		const box = ref();

		const done = () => {
			setTimeout(() => {
				emit('show');
			}, 200);
		};

		onMounted(() => {
			gsap
				.timeline({ onComplete: () => done() })
				.from(box.value, { y: -200, duration: 1 })
				.to(box.value, { rotation: '+=360', duration: 1 });
		});

		return {
			box,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
