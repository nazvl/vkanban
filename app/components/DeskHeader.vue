<script setup lang="ts">
const props = defineProps<{
  data: {
    id: number;
    name: string;
    description: string;
    owner: string;
    owner_id: number;
  };
}>();
</script>

<template>
  <UCard
    :id="`card-${props.data.id}`"
    variant="outline"
    class="w-full transition-shadow duration-200 hover:shadow-lg"
  >
    <!-- Слот заголовка: информация о владельце и иконка карточки -->
    <template #header>
      <div class="flex items-center gap-3">
        <!--        <UAvatar :alt="owner" size="md" class="shrink-0" />-->
        <div class="min-w-0">
          <p class="text-highlighted truncate text-sm font-medium">
            {{ props.data.owner }}
          </p>
          <p class="text-muted text-xs">Owner's ID: {{ props.data.owner_id }}</p>
        </div>

        <UIcon name="i-lucide-user" class="text-muted ml-auto size-5 shrink-0" />
      </div>
    </template>

    <!-- Основной слот: название и описание -->
    <div class="space-y-2">
      <h3 class="text-highlighted text-base font-semibold">
        {{ props.data.name }}
      </h3>
      <p class="text-muted text-sm leading-relaxed">
        {{ props.data.description }}
      </p>
    </div>

    <!-- Слот подвала: идентификатор и действие -->
    <template #footer>
      <div class="flex items-center justify-between">
        <span class="text-dimmed text-xs"> Desk ID: {{ props.data.id }} </span>
        <UButton
          icon="i-lucide-arrow-right"
          size="sm"
          color="neutral"
          variant="ghost"
          aria-label="Перейти к карточке"
        />
      </div>
    </template>
  </UCard>
</template>
