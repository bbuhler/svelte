<script>
	export let email;
	export let emailValidity;
</script>

<input type="email" required bind:value={email} bind:validity={emailValidity}>
