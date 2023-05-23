<template>
	<div class="slide slide-1">
		<h1>Slide 1</h1>
		<scratch-img class="scratch-img" @finish="startAnim">
			<img src="@img/rotate-device.png" alt="" />
		</scratch-img>
		<count-up :end-val="75" :duration="5" :delay="2" @finish="startAnim"></count-up>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScratchImg from '../components/ScratchImg.vue';
import CountUp from '../components/CountUp.vue';
export default {
	name: 'slide-1',
	emits: ['show'],
	components: {
		ScratchImg,
		CountUp,
	},
	setup(props, { emit }) {
		const done = () => {
			setTimeout(() => {
				emit('show');
			}, 2000);
		};

		const startAnim = () => {
			console.log('startAnim');
		};

		onMounted(() => {
			gsap
				.timeline({ onComplete: () => done() })
				.from('h1', { y: -200, duration: 1 })
				.to('h1', { rotation: '+=360', duration: 1 });
		});

		return {
			startAnim,
		};
	},
};
</script>

<style lang="scss" scoped>
.slide-1 {
	padding: 13em;
}
.scratch-img {
	width: 30em;
	height: 30em;
}
</style>
