<script lang="ts">
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let required: boolean = false;
	export let label: string = '';
	export let hint: string = '';
	export let html_id: string = 'test-id';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
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
