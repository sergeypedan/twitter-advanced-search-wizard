<script lang="ts">
	import { random_html_id } from '../utils/html_id_generator.js';

	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let required: boolean = false;

	export let hint:        string = '';
	export let html_id:     string = random_html_id();
	export let name:        string = '';
	export let placeholder: string = '';
	export let value:       string = '';
	export let label:       string = '';
</script>

<div class="field">
	{#if label !== ''}
		<label class="label" for={html_id}>{label}</label>
	{/if}
	<div class="control">
		<input class="input" type="text" {disabled} {name} {placeholder} {readonly} {required} bind:value={value} id={html_id}>
	</div>
	{#if hint !== ''}
		<p class="help">{hint}</p>
	{/if}
</div>
