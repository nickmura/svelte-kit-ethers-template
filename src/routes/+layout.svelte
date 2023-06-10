<script lang="ts">
	export const ssr = false;
	export const trailingSlash = 'always';
	export const prerender = true;

	import '../app.css';
</script>

<slot />
