<script>
	import { getPoints } from "./points";
	import { getShots } from "./shots";
	import { getCheckpoints } from "./checkpoints";

	let points = [0, 0, 0];
	let shots = [0, 0, 0];
	let checkpoints = [];
	setInterval(async () => {
		const c = await getPoints(1);
		points[0] = c.count;
		const d = await getPoints(2);
		points[1] = d.count;
		const e = await getShots(1);
		shots[0] = e.count;
		const f = await getShots(2);
		shots[1] = f.count;
		checkpoints = await getCheckpoints(0);
	}, 1000);
</script>

<main>
	<div class="row">
		<div class="col">
			<div class="row">
				<h1>Team 1</h1>
			</div>
			<div class="row">
				<h2>point = {points[0]}</h2>
				<h2>shot = {shots[0]}</h2>
			</div>
		</div>
		<div class="col">
			<div class="row">
				<h1>Team 2</h1>
			</div>
			<div class="row">
				<h2>point = {points[1]}</h2>
				<h2>shot = {shots[1]}</h2>
			</div>
		</div>
		<div class="col">
			<div class="row">
				<h1>Checkpoint 0</h1>
			</div>
			<div class="row">
				{#each checkpoints as checkpoint}
					<h2>Team {checkpoint.from_id + 1}</h2>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
