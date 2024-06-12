<template>
  <section>
    <h3>Counter {{ counter }}</h3>
    <h3>Square {{ squareCounter }}</h3>

    <div>
      <button class="btn btn-primary" @click="increaseValue">+1</button>
      <button class="btn btn-primary" @click="decreaseValue">-1</button>
      <!-- <button class="p-5 bg-blue-500 rounded" @click="decreaseValue">-1</button> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squareCounter, increaseValue, decreaseValue } = useCounter(props.value);


</script>
