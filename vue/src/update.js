import { reactive } from 'vue'

export const update = reactive({
  totalItems: 0, //total items is set to 0 by default
  totalPrice: 0, //total price of all items is set to 0 by default
  cart: [], //cart array; the sidebar takes information from this array
});
