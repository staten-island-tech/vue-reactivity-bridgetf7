import { reactive } from 'vue'

export const update = reactive({
  totalItems: 0,
  addToCart() {
    this.totalItems++;
  }
});
