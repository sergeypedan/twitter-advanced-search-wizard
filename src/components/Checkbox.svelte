<script lang="ts">
	import { random_html_id } from '../utils/html_id_generator.js';

	export let checked:  boolean = false;
	export let disabled: boolean = false;

	export let hint:    string = '';
	export let label:   string = 'Checkbox label';
	export let html_id: string = random_html_id();
</script>

<div class="field">
	<div class="control">
		<label class="checkbox" for={html_id}>
			<input type="checkbox" bind:checked={checked} {disabled} id={html_id}> {label}
		</label>
		{#if hint !== ''}
			<p class="help">{hint}</p>
		{/if}
	</div>
</div>
