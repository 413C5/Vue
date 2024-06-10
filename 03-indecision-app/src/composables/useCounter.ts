import { computed, ref } from 'vue';

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);

  const increaseValue = () => {
    counter.value++;
  };

  const decreaseValue = () => {
    counter.value--;
  };

  return {
    counter,
    squareCounter,
    increaseValue,
    decreaseValue
  };
};
