<script setup lang="ts">
const task = ref({
  id: 'PRJ-142',
  title: 'Реализовать фильтрацию задач по тегам на доске',
  status: 'in-progress' as 'open' | 'in-progress' | 'done',
  priority: 'high' as 'critical' | 'high' | 'normal' | 'low',
  owner: 'Анна С.',
  tags: ['frontend', 'board', 'filter'],
});
</script>

<template>
  <TaskCard :task />
</template>
