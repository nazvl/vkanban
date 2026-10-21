<script setup lang="ts">
import { ref } from 'vue';
import { VueDraggable, type DraggableEvent } from 'vue-draggable-plus';
import DeskHeader from '~/components/DeskHeader.vue';

const deskId = useRoute().params.id;
const deskData = ref({
  id: 0,
  name: 'Storage',
  description: 'Project about storages',
  owner: 'Benjamin Canac',
  owner_id: 0,
});
const columns = ref([
  {
    id: 0,
    name: 'First',
    position: 0,
    cards: [
      { id: 0, column_id: 0, title: 'Task 1', owner: 'Ivan', position: 0, priority: 3 },
      { id: 1, column_id: 0, title: 'Task 2', owner: 'Petr', position: 1, priority: 5 },
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
  const { from, to, oldIndex, newIndex } = event;

  const sourceColumnId = Number(from.dataset.columnId);
  const targetColumnId = Number(to.dataset.columnId);

  const targetColumn = columns.value.find((c) => c.id === targetColumnId);
  //@ts-expect-error
  const movedCard = targetColumn?.cards[newIndex];
  const data = {
    card_id: movedCard.id,
    old_position: oldIndex,
    new_position: newIndex,
    source_column_id: sourceColumnId,
    target_column_id: targetColumnId,
  };

  console.log(data);
};

function getStateColor(state: number) {
  switch (state) {
    case 1:
      return 'border-gray-500';
    case 2:
      return 'border-green-500';
    case 3:
      return 'border-yellow-500';
    case 4:
      return 'border-orange-600';
    case 5:
      return 'border-red-600';
  }
}
</script>

<template>
  <DeskHeader :data="deskData" />
  <div class="flex h-screen gap-4 overflow-x-auto p-6">
    <div v-for="column in columns" :key="column.id" class="flex w-80 shrink-0 flex-col">
      <div class="mb-3 flex items-center justify-between px-1">
        <h2 class="dark: text-lg font-semibold text-gray-700 dark:text-white">{{ column.name }}</h2>
        <UBadge variant="soft" size="sm">{{ column.cards.length }}</UBadge>
      </div>

      <VueDraggable
        v-model="column.cards"
        :data-column-id="column.id"
        group="kanban"
        class="flex min-h-50 flex-1 flex-col gap-3 rounded-xl border-2 border-gray-200 bg-gray-100 p-2 shadow-xs dark:border-gray-800 dark:bg-gray-500"
        ghost-class="opacity-50"
        drag-class="drag-effect"
        :animation="150"
        @end="onDragEnd"
      >
        <UCard
          v-for="card in column.cards"
          :key="card.id"
          class="group cursor-pointer border-l-2 transition-shadow hover:shadow-md active:cursor-grabbing"
          :class="getStateColor(card.priority)"
          :ui="{ body: 'p-3 sm:p-3' }"
          @click="navigateTo('/task/' + card.id)"
        >
          <div class="flex items-center justify-between gap-2">
            <div class="flex flex-col">
              <p class="text-sm font-medium text-gray-900 dark:text-white">{{ card.title }}</p>
              <p class="text-muted text-xs">{{ card.owner }}</p>
            </div>

            <UIcon
              name="i-heroicons-bars-3"
              class="shrink-0 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100"
            />
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
