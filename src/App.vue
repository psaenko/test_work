<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="Map" class="nav-link">Map</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <router-view/>
  </main>
</template>

<style>
.router-link-active {
  text-decoration: underline !important;
}
</style>
