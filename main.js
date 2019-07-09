let app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    description: 'Description to socks',
    selectVariant: 0,
    details: ["80% cotton", "20% polyester","Gender-natural"],
    variants: [
      { 
        variantId: 2234, 
        variantColor: "green", 
        variantImage: "./assets/vmSocks-green-onWhite.jpg" ,
        variantQuantity:10
      },
      { 
        variantId: 2235, 
        variantColor: "blue", 
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0
      },
    ],
    cart: 0
  },
  methods: {
    addToCart () {
      this.cart += 1;
    },
    removeToCart () {
      
      if(this.cart > 0) 
        this.cart -= 1;
   
    },
    updateProduct (index) {
      this.selectVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectVariant].variantQuantity;
    }
  }
})