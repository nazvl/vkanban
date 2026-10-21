<script setup lang="ts">

</script>

<template>
  <div class="flex flex-1">


    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-default">
        <UButton
            icon="i-lucide-panel-left"
            color="neutral"
            variant="ghost"
            aria-label="Toggle sidebar"
            @click="open = !open"
        />
      </div>
    </div>
  </div>
</template>