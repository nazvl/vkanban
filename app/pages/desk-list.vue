<script setup lang="ts">
//TODO: сделать получение с бэка
const deskList = ref([
  {
    id: 0,
    name: 'Storage',
    description: 'Project about storages',
    owner: 'Benjamin Canac',
    avatar: {
      src: 'https://img.magnific.com/free-photo/warehouse-with-boxes-delivery-van_23-2151998657.jpg?semt=ais_hybrid&w=740&q=80',
      alt: '',
      loading: 'lazy' as const,
    },
  },

  {
    id: 1,
    name: 'Laboratory',
    description: 'Laboratory',
    avatar: {
      src: 'https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-laboratory-equipment-and-microscope-on-table-in-lab-setting-image_16123343.jpg',
      alt: '',
      loading: 'lazy' as const,
    },
  },
]);
</script>

<template>
  <UPageList>
    <UPageCard
      v-for="(desk, index) in deskList"
      :key="index"
      variant="ghost"
      :to="'/desk/' + desk.id"
    >
      <template #body>
        <UUser
          :name="desk.name"
          :description="desk.description"
          :avatar="desk.avatar"
          size="xl"
          class="relative"
        />
      </template>
    </UPageCard>
  </UPageList>
</template>
