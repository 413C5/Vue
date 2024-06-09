import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true }
  },

  setup(props) {
    const counter = ref(props.value);
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
  }
});