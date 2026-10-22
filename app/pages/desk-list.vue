<script setup lang="ts">
//TODO: сделать получение с бэка
const deskList = ref([
  {
    id: 0,
    name: 'Storage',
    description: 'Project about storages',
    owner: 'Benjamin Canac',
  },
  {
    id: 1,
    name: 'Laboratory',
    description: 'Laboratory',
  },
  {
    id: 2,
    name: 'Bugs',
    description: 'Bug reports from production',
  },
  {
    id: 3,
    name: 'Bugs Testers',
    description: 'Bug reports from QA',
    owner: 'Alguen Tester',
  },
]);
</script>

<template>
  <div class="flex items-center justify-between py-4">
    <div>
      <h1 class="text-highlighted text-2xl font-semibold">Desks</h1>
      <p class="text-muted text-sm">{{ deskList.length }} projects</p>
    </div>
    <CustomButton text="Create" />
  </div>

  <UPageGrid class="lg:grid-cols-2 xl:grid-cols-3">
    <UPageCard
      v-for="desk in deskList"
      :key="desk.id"
      variant="subtle"
      :to="`/desk/${desk.id}`"
      icon="i-lucide-layout-dashboard"
      :title="desk.name"
      :description="desk.description"
      spotlight
      spotlight-color="primary"
    >
      <template #footer>
        <div class="flex w-full items-center justify-between">
          <UUser v-if="desk.owner" :name="desk.owner" size="sm" :avatar="{ alt: desk.owner }" />
          <span v-else class="text-muted text-sm">No owner</span>
        </div>
      </template>
    </UPageCard>
  </UPageGrid>
</template>
