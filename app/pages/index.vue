<script setup lang="ts">
import type { SplitterItem } from '@nuxt/ui';

definePageMeta({
  middleware: 'auth',
});

const panel = 'bg-default border border-default rounded-xl shadow-sm overflow-hidden';

const items: SplitterItem[] = [
  { slot: 'left', minSize: 40, defaultSize: 75, class: panel },
  { slot: 'right', minSize: 15, maxSize: 40, defaultSize: 25, collapsible: true, class: panel },
];
</script>

<template>
  <div class="h-[80dvh] w-full p-2">
    <USplitter
      id="charts-splitter"
      auto-save-id="charts-splitter"
      :items="items"
      :ui="{ handle: 'mx-1 rounded-full bg-border hover:bg-primary transition-colors' }"
    >
      <template #left>
        <div class="flex h-full w-full flex-col">
          <div class="border-default flex items-center gap-2 border-b px-4 py-3">
            <UIcon name="i-lucide-clock" class="text-primary size-5" />
            <h2 class="text-highlighted font-semibold">Project life</h2>
          </div>
          <div class="flex-1 overflow-auto p-4">
            <Timeline />
          </div>
        </div>
      </template>

      <template #right>
        <div class="flex h-full w-full flex-col">
          <div class="border-default flex items-center gap-2 border-b px-4 py-3">
            <UIcon name="i-lucide-chart-pie" class="text-primary size-5" />
            <h2 class="text-highlighted font-semibold">Graphics</h2>
          </div>
          <div class="flex flex-1 items-center justify-center overflow-auto p-4">
            <DonutChart />
          </div>
        </div>
      </template>
    </USplitter>
  </div>
</template>
