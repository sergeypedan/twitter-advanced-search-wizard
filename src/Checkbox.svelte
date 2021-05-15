<script lang="ts">
	export let checked: boolean = false;
	export let disabled: boolean = false;
	export let label: string = 'Checkbox label';
	export let hint:  string = '';
</script>

<div class="field">
	<div class="control">
		<label class="checkbox">
			<input type="checkbox" bind:checked={checked} {disabled}> {label}
		</label>
		{#if hint !== ''}
			<p class="help">{hint}</p>
		{/if}
	</div>
</div>
