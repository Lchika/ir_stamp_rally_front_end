<script>
	import { getPoints, deletePoints } from "./points";
	import { getShots, deleteShots } from "./shots";
  import { getDevices, deleteDevices } from "./devices";

	let points = [];
	let shot = 0;
  let devices = [];
  async function updateDevices() {
    const d = await getDevices();
    console.log("devises:", d);
    devices = d.devices;
  }
  setInterval(async () => {
		const c = await getPoints(1);
		points = c.points;
		const e = await getShots(1);
		shot = e.count;
    await updateDevices();
	}, 1000);
  async function initGame() {
    await deletePoints();
    await deleteShots();
    //await deleteDevices();
    //await updateDevices();
  }
</script>

<main>
  <div class="row">
    <h1>赤外線スタンプラリーゲーム</h1>
  </div>
  <div class="row m-3">
    <div class="col">
      <div class="main_stats_window">
        <h2 class="m-2">得点</h2>
        <p class="main_stats_value">{points.length}</p>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">当てた的のID</th>
          </tr>
        </thead>
        <tbody>
          {#each points as point}
            <tr>
              <th scope="row">{point.to_id}</th>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="col">
      <div class="main_stats_window">
        <h2 class="m-2">発射回数</h2>
        <p class="main_stats_value">{shot}</p>
      </div>
    </div>
  </div>
  <div class="row mt-5 mb-2">
    <div class="col">
      <h4>的デバイス一覧</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">mode</th>
            <th scope="col">MAC</th>
          </tr>
        </thead>
        <tbody>
          {#each devices as device}
            <tr>
              <th scope="row">{device.unit_id}</th>
              <td>{device.mode}</td>
              <td>{device.mac}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
  <div class="row m-3">
    <div class="col">
      <button type="button" class="btn btn-outline-secondary" on:click={initGame}>初期化</button>
    </div>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 800px;
		margin: 0 auto;
	}

  .main_stats_window {
    border: solid 1px;
    border-radius: 0.5em;
  }

  .main_stats_value {
    font-size: 50px;
  }
</style>
