<template>
	<span class="count-up" ref="count">{{ endVal }}</span>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
	name: 'CountUp',
	emits: ['finish'],
	props: {
		endVal: {
			type: Number,
			default: 100,
		},
		startVal: {
			type: Number,
			default: 0,
		},
		delay: {
			type: Number,
			default: 0,
		},
		duration: {
			type: Number,
			default: 3000,
		},
	},
	setup(props, { emit }) {
		const count = ref(null);

		onMounted(() => {
			gsap.timeline({ onComplete: () => emit('finish') }).from(count.value, {
				innerText: props.startVal,
				snap: { innerText: 1 },
				duration: props.duration,
				delay: props.delay,
				ease: 'linear',
				onUpdate: () => {
					count.value.innerHTML = count.value.innerText;
				},
			});
		});
		return { count };
	},
};
</script>

<style lang="scss" scoped></style>
