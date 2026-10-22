<script setup lang="ts">
import type { ChartData } from '@nuxt/ui';

const data = ref<ChartData[]>([
  { status: 'Done', count: 697 },
  { status: 'Progress', count: 300 },
  { status: 'Untouched', count: 153 },
]);
</script>

<template>
  <UChart
    type="donut"
    :data="data"
    index="status"
    :categories="[{ key: 'count', label: 'Tasks' }]"
  />
</template>
