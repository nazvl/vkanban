<script setup lang="ts">
import type { SplitterItem } from '@nuxt/ui/components/Splitter.vue';

definePageMeta({
  middleware: 'auth',
});
const card =
  'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium';
const items: SplitterItem[] = [
  { slot: 'left', minSize: 15, defaultSize: 75, class: card },
  { slot: 'right', minSize: 15, defaultSize: 25, class: card },
];
</script>

<template>
  <!--  Графики-->
  <div class="h-[80dvh] w-full">
    <USplitter id="splitter-example" :items="items">
      <template #left
        ><div class="min-w-fit px-2 py-1">
          <Timeline /></div
      ></template>
      <template #right
        ><div class="f-full flex flex-row flex-wrap items-start justify-start px-2 py-2">
          <DonutChart /></div
      ></template>
    </USplitter>
  </div>
</template>

<style scoped></style>
