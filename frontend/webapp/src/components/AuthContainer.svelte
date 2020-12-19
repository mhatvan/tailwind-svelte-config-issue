<script>
  import axios from 'axios';
  import Navbar from './Navbar.svelte';
  import Sidebar from './Sidebar.svelte';
  import { authToken, sidebarExpanded } from '../helpers/stores';
  import { setFirstVisitedAt } from '../helpers/actions/setFirstVisitedAt.js';

  let innerWidth = window.innerWidth;

  $: sidebarExpanded.set(innerWidth < 1280 ? false : true);

  axios.defaults.headers.common = {
    Authorization: `Bearer ${$authToken}`,
  };
</script>

<svelte:window bind:innerWidth />

<Navbar innerWidth="{innerWidth}" />

<Sidebar innerWidth="{innerWidth}" />

<main
  class="{$sidebarExpanded ? 'expanded' : 'collapsed'}"
  style="{innerWidth < 768 ? 'padding: 1rem;' : 'padding: 2rem;'}"
  use:setFirstVisitedAt
>
  <slot />
</main>

<style>
  main {
    padding-bottom: 8rem;
    background-color: var(--white);
    min-height: calc(100vh - 64px);
  }

  .expanded {
    margin-left: var(--sidebar-expanded);
  }

  .collapsed {
    margin-left: var(--sidebar-collapsed);
  }
</style>
