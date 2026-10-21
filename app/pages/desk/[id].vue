<script setup lang="ts">
import { ref } from 'vue';
import { VueDraggable, type DraggableEvent } from 'vue-draggable-plus';

const deskId = useRoute().params.id;

const columns = ref([
  {
    id: 0,
    name: 'First',
    position: 0,
    cards: [
      { id: 0, column_id: 0, title: 'Title', owner: 'Ivan', position: 0 },
      { id: 1, column_id: 0, title: 'Title2', owner: 'Petr', position: 1 },
    ],
  },
  {
    id: 1,
    name: 'Second',
    position: 1,
    cards: [],
  },
  {
    id: 2,
    name: 'Third',
    position: 2,
    cards: [],
  },
]);

const onDragEnd = (event: DraggableEvent) => {
  console.log('[!] Event:', event);
};
</script>

<template>
  <div class="flex h-screen gap-4 overflow-x-auto p-6">
    <div v-for="column in columns" :key="column.id" class="flex w-80 shrink-0 flex-col">
      <div class="mb-3 flex items-center justify-between px-1">
        <h2 class="dark: text-lg font-semibold text-gray-700 dark:text-white">{{ column.name }}</h2>
        <UBadge variant="soft" size="sm">{{ column.cards.length }}</UBadge>
      </div>

      <VueDraggable
        v-model="column.cards"
        group="kanban"
        class="flex min-h-50 flex-1 flex-col gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-100 p-2 dark:border-gray-800 dark:bg-gray-500"
        ghost-class="opacity-50"
        drag-class="drag-effect"
        :animation="150"
        @end="onDragEnd"
      >
        <UCard
          v-for="element in column.cards"
          :key="element.id"
          class="cursor-pointer transition-shadow hover:shadow-md active:cursor-grabbing"
          :ui="{ body: 'p-3 sm:p-4' }"
        >
          <div class="flex items-start justify-between gap-2">
            <p class="text-sm font-medium text-gray-900 dark:text-white">
              {{ element.title }}
            </p>
            <UIcon name="i-heroicons-bars-3" class="shrink-0 text-gray-400" />
          </div>
        </UCard>
      </VueDraggable>
    </div>
  </div>
</template>

<style scoped>
.cursor-grab {
  cursor: grab;
}
.cursor-grabbing {
  cursor: grabbing;
}
.drag-effect {
  @apply scale-105 rotate-2;
}
</style>
