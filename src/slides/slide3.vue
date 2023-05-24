<template>
	<div class="slide">
		<h1 class="box">Slide 3</h1>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
export default {
	name: 'slide-3',
	emits: ['show'],
	setup(props, { emit }) {
		const next_test = () => {
			emit('show');
			var id = $('#presentation', window.parent.document).attr('data-id');

			var $url = 'https://www.dermaclub.com.ua/courses/send/presa';
			var href = $('#presentation', window.parent.document).attr('data-href');
			var $token = $('meta[name="csrf-token"]', window.parent.document).attr('content');
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $token,
				},
			});
			setTimeout(() => {
				$.ajax({
					type: 'POST',
					url: $url,
					data: { id: id },
					success: function (data) {
						if (data != false) {
							parent.location.href = href;
						}
					},
					error: function (data) {
						console.log(data);
					},
				});
			}, 5000);
		};

		onMounted(() => {
			gsap.timeline({ onComplete: () => next_test() }).to('.box', { opacity: 1, left: 0, duration: 1, stagger: 1 });
		});
	},
};
</script>

<style lang="scss" scoped></style>
