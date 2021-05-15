<script lang="ts">
	export let disabled:  boolean = false;
	export let readonly:  boolean = false;
	export let required:  boolean = false;

	export let fa_icon:     string = 'calendar';
	export let hint:        string = '';
	export let html_id:     string = 'test-id';
	export let label:       string = '';
	export let name:        string = '';
	export let placeholder: string = '1970-05-31';
	export let value:       string = '';

	export let max:  number;
	export let min:  number;
	export let step: number;
</script>

{#if label !== ''}
	<label class="label" for={html_id}>{label}</label>
{/if}
<div class="field has-addons">
	<div class="control">
		<span class="button is-static"><i class="fas fa-{fa_icon}"></i></span>
	</div>
	<div class="control">
		<input class="input" type="date" {disabled} {max} {min} {name} {placeholder} {readonly} {required} {step} bind:value={value} id={html_id}>
	</div>
	{#if hint !== ''}
		<p class="help">{hint}</p>
	{/if}
</div>
