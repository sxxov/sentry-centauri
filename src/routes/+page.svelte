<script lang="ts">
	import { browser } from '$app/environment';
	import { Button } from '@sxxov/sv/button';
	import { Input } from '@sxxov/sv/input';
	import { BottomSheet, BottomSheetStates } from '@sxxov/sv/layout';
	import { Svg } from '@sxxov/sv/svg';
	import { css } from '@sxxov/ut/css';
	import * as faceapi from 'face-api.js';
	import { ic_camera_alt, ic_fullscreen } from 'maic/two_tone';
	import { onDestroy, onMount } from 'svelte';
	import { quintIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Meta from '../lib/meta/Meta.svelte';

	const faceDetectionOptions = new faceapi.TinyFaceDetectorOptions({
		inputSize: 384,
		scoreThreshold: 0.4,
	});

	const save = (key: string, value: any) => {
		if (!browser) return;

		localStorage.setItem(key, JSON.stringify(value));
	};
	const load = <T,>(key: string, defaultValue: T): T => {
		if (!browser) return defaultValue;

		const value = localStorage.getItem(key);

		if (value === null) return defaultValue;

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return JSON.parse(value) ?? defaultValue;
	};

	type Vec2 = [x: number, y: number];

	let outDiv: HTMLDivElement | undefined;
	let webcamVideo: HTMLVideoElement | undefined;
	let [webcamWidth, webcamHeight] = load('webcam-size', [0, 0]);
	$: save('webcam-size', [webcamWidth, webcamHeight]);
	let chosenMediaDeviceIndex = load('chosen-media-device-index', 0);
	$: save('chosen-media-device-index', chosenMediaDeviceIndex);
	let mediaDevices: MediaDeviceInfo[] | undefined;
	let detections: faceapi.FaceDetection[] = [];

	let bottomSheetState = load('bottom-sheet-state', BottomSheetStates.IDLE);
	$: save('bottom-sheet-state', bottomSheetState);
	let fullscreen = false;
	let position: Vec2 = load('position', [0, 0]);
	$: save('position', position);
	let rotation = load('rotation', 0);
	$: save('rotation', rotation);
	let scale: Vec2 = load('scale', [1, 1]);
	$: save('scale', scale);

	let rafHandle: ReturnType<typeof requestAnimationFrame> | undefined;
	const raf = async () => {
		detections = await faceapi.detectAllFaces(
			webcamVideo!,
			faceDetectionOptions,
		);

		rafHandle = requestAnimationFrame(raf);
	};
	onMount(async () => {
		await faceapi.nets.tinyFaceDetector.loadFromUri(
			'/weights/tiny-face-detector',
		);

		mediaDevices = (await navigator.mediaDevices.enumerateDevices()).filter(
			({ kind }) => kind === 'videoinput',
		);
	});

	onDestroy(() => {
		if (rafHandle) cancelAnimationFrame(rafHandle);
	});

	let stream: MediaStream | undefined;
	$: if (mediaDevices)
		void (async () => {
			stream = await navigator.mediaDevices.getUserMedia({
				video: {
					deviceId: mediaDevices[chosenMediaDeviceIndex]!.deviceId,
				},
			});
		})();
	$: [webcamWidth, webcamHeight] = [
		stream?.getVideoTracks()[0]?.getSettings().width ?? 0,
		stream?.getVideoTracks()[0]?.getSettings().height ?? 0,
	];
	$: if (webcamVideo && stream) {
		webcamVideo.srcObject = stream;
		void webcamVideo.play().then(() => {
			rafHandle = requestAnimationFrame(raf);
		});
	}
	$: if (browser) {
		stream;

		if (rafHandle) {
			cancelAnimationFrame(rafHandle);
			rafHandle = requestAnimationFrame(raf);
		}
	}
	$: if (outDiv)
		if (fullscreen) {
			if (!document.fullscreenElement) void outDiv.requestFullscreen();
		} else if (document.fullscreenElement) {
			void document.exitFullscreen();
		}
</script>

<Meta
	title="Sentry Centauri"
	description="Shine light onto people you dislike."
	keywords={['amongus']}
	src=""
/>
<svelte:document
	on:fullscreenchange={() => {
		fullscreen = Boolean(document.fullscreenElement);
	}}
/>
<div class="route home">
	<div
		class="content"
		style="
			--width: {css(webcamWidth)};
			--height: {css(webcamHeight)};
			--transform: 
				translate({position[0]}px, {position[1]}px)
				rotate({rotation}deg)
				scale({scale[0]}, {scale[1]});
		"
	>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			autoplay
			bind:this={webcamVideo}
		/>
		<div
			class="out"
			bind:this={outDiv}
		>
			<div class="circles">
				{#each detections as { box }}
					<div
						class="circle"
						style="
						--x: {css(box.x + box.width / 2)};
						--y: {css(box.y + box.height / 2)};
						--radius: calc(max({css(box.width)} / 2, {css(box.height)} / 2));
					"
						out:fade={{
							duration: 200,
							delay: 300,
							easing: quintIn,
						}}
					/>
				{/each}
			</div>
		</div>
	</div>
	<div class="settings">
		<BottomSheet
			bind:state={bottomSheetState}
			idleHeight={90}
			width="min(600px, 100%)"
			colourBackground="transparent"
			colourBorder="transparent"
			colourUnderlay="transparent"
		>
			<div slot="overlay"></div>
			<div
				class="content"
				role="presentation"
				on:click={() => {
					if (bottomSheetState === BottomSheetStates.IDLE) {
						bottomSheetState = BottomSheetStates.PEEK;
					}
				}}
			>
				<h2>Dashboard</h2>
				<section class="controls">
					<div class="miscellaneous">
						<Button
							on:click={() => {
								if (mediaDevices)
									chosenMediaDeviceIndex =
										(chosenMediaDeviceIndex + 1) %
										mediaDevices.length;
							}}
						>
							<Svg
								slot="left"
								svg={ic_camera_alt}
							/> Switch camera
						</Button>
					</div>
					<Button
						on:click={() => {
							fullscreen = !fullscreen;
						}}
					>
						<Svg
							slot="left"
							svg={ic_fullscreen}
						/> Launch
					</Button>
				</section>
				<section class="position">
					<h3>Position</h3>
					<div class="inputs">
						<Input
							name="position-x"
							label="x"
							type="number"
							step="1"
							bind:value={position[0]}
						/>
						<Input
							name="position-y"
							label="y"
							type="number"
							step="1"
							bind:value={position[1]}
						/>
					</div>
				</section>
				<section class="rotation">
					<h3>Rotation</h3>
					<div class="inputs">
						<Input
							name="rotation-x"
							label="x"
							type="number"
							step="1"
							bind:value={rotation}
						/>
					</div>
				</section>
				<section class="scale">
					<h3>Scale</h3>
					<div class="inputs">
						<Input
							name="scale-x"
							label="x"
							type="number"
							step="0.1"
							bind:value={scale[0]}
						/>
						<Input
							name="scale-y"
							label="y"
							type="number"
							step="0.1"
							bind:value={scale[1]}
						/>
					</div>
				</section>
			</div>
		</BottomSheet>
	</div>
</div>

<style lang="postcss">
	.home {
		display: contents;

		& > .content {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;

			& > video {
				position: absolute;
				top: 0;
				left: 0;
				width: var(--width);
				height: var(--height);

				transform: var(--transform);
			}

			& > canvas {
				position: absolute;
				top: 50%;
				left: 50%;

				width: 100%;
				height: 100%;

				transform: translate(-50%, -50%);
			}

			& > .out {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				pointer-events: none;

				& > .circles {
					position: absolute;
					top: 0;
					left: 0;
					width: var(--width);
					height: var(--height);

					transform: var(--transform);

					& > .circle {
						position: absolute;
						top: var(--y);
						left: var(--x);
						width: calc(var(--radius) * 2);
						height: calc(var(--radius) * 2);

						border-radius: 50%;
						/* border: 1px solid white; */
						background: white;

						transform: translate(-50%, -50%);
						transition:
							top 0.5s var(----ease-fast-slow),
							left 0.5s var(----ease-fast-slow),
							width 0.3s var(----ease-fast-slow),
							height 0.3s var(----ease-fast-slow);
					}
				}
			}
		}

		& > .settings {
			display: contents;

			& .content {
				padding: 28px;
				display: flex;
				flex-direction: column;
				gap: 28px;

				& > h2 {
					margin: 0;

					pointer-events: none;
					user-select: none;
				}

				& > section {
					padding-top: 28px;
					border-top: 1px solid var(----colour-text-tertiary);

					display: flex;
					flex-direction: column;
					gap: 28px;

					& > h3 {
						margin: 0;
					}

					&.controls {
						& > .miscellaneous {
							display: flex;
							gap: 28px;
						}
					}
				}

				& .inputs {
					display: flex;
				}
			}
		}
	}
</style>
