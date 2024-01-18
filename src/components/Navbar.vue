<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div id="underline"></div>
    <div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/your-experience">Your experience</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
const underline = document.querySelector('#underline')
const links = document.querySelectorAll('nav a')
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    underline.style.left = e.target.offsetLeft + 'px'
    underline.style.width = e.target.offsetWidth + 'px'
  })
  link.addEventListener('mouseover', function (e) {
    underline.style.left = e.target.offsetLeft + 'px'
    underline.style.width = e.target.offsetWidth + 'px'
  })
})
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1.5rem 10rem;
}
nav a {
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 5px;
  transition: 0.3s ease;
  font-weight: bolder;
  padding: 0.25rem 0.75rem;
  margin: 0 12rem;
  background-color: grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
nav a:hover,
nav a.router-link-exact-active {
  background-color: chocolate;
  color: black;
}
</style>
