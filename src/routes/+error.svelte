<script>
  import { page } from '$app/stores';
</script>

<section class="flex flex-col items-center mt-48">
    <div class="text-center">
        <h1>{$page.status}</h1>
        <p><b>{$page.error.message}</b></p>
        <a class="btn btn-wide btn-primary mt-12" href="/">Go back home</a>
    </div>
</section>
