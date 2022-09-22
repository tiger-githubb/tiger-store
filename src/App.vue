<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>


  <router-view />
</template>


<script>
export default {
  name: 'app',

  data() {
    return {
      products: [],

    }
  },

  methods: {
    /**
     * Fetch products data from Chec and store in the products data object.
     * https://commercejs.com/docs/sdk/products
     */
    fetchProducts() {
      this.$commerce.products.list().then((products) => {
        this.products = products.data;

      }).catch((error) => {
        console.log('There is an error fetching products', error);

      });
    },
    created() {
      this.fetchProducts();
    },
  },
};

</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
