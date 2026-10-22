<script setup lang="ts">
const props = defineProps<{
  text: string;
  icon?: string;
}>();
</script>

<template>
  <UButton :icon="props.icon ? props.icon : 'i-lucide-plus'" class="cursor-pointer">{{
    props.text
  }}</UButton>
</template>

<style scoped></style>
