<template>
  <h1>Welcome to Persons</h1>
  <div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="person in persons" :key="person.id">
      <div class="card">
        <img :src="getAvatar(person)" class="card-img-top" :alt="person.firstName + ' ' + person.lastName">
        <div class="card-body">
          <h5 class="card-title">{{ person.firstName }} {{ person.lastName }}</h5>
          <p class="card-text">
            {{ person.firstName }} {{ person.lastName }} ist {{ person.invited ? 'eingeladen' : 'nicht eingeladen'}} und
            hat {{ person.kids.length }} Kinder.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Persons',
  data () {
    return {
      persons: [
        {
          id: 1,
          firstName: 'Max',
          lastName: 'Mustermann',
          invited: true,
          gender: 'MALE',
          kids: []
        },
        {
          id: 2,
          firstName: 'Maxima',
          lastName: 'Meier',
          invited: false,
          gender: 'FEMALE',
          kids: [
            1,
            2,
            3
          ]
        }
      ]
    }
  },
  methods: {
    getAvatar (person) {
      if (person.gender === 'MALE') {
        return require('../assets/male.png')
      } else if (person.gender === 'FEMALE') {
        return require('../assets/female.jpeg')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/persons', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
