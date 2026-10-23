<script setup lang="ts">
// моковые данные для задачи
const issue = ref({
  id: 'PRJ-142',
  summary: 'Реализовать фильтрацию задач по тегам на доске',
  description:
    'Необходимо добавить возможность фильтровать задачи на канбан-доске по выбранным тегам. Фильтр должен поддерживать множественный выбор и сохраняться в URL для возможности поделиться ссылкой.',
  createdBy: {
    name: 'Анна С.',
    avatar: 'https://i.pravatar.cc/150?u=anna',
    date: '12.10.2026, 14:30',
  },
  updatedBy: {
    name: 'Иван П.',
    avatar: 'https://i.pravatar.cc/150?u=ivan',
    date: '13.10.2026, 09:15',
  },
  properties: {
    status: { label: 'In Progress', color: 'warning' as const },
    priority: { label: 'High', color: 'warning' as const },
    assignee: { name: 'Анна С.', avatar: 'https://i.pravatar.cc/150?u=anna' },
    project: 'Разработка веб-приложения',
    tags: ['frontend', 'board', 'filter'],
  },
  comments: [
    {
      id: 1,
      author: { name: 'Иван П.', avatar: 'https://i.pravatar.cc/150?u=ivan' },
      text: 'Добавил макет фильтра в Figma, посмотри во вложении.',
      date: '13.10.2026, 10:20',
    },
    {
      id: 2,
      author: { name: 'Ольга К.', avatar: 'https://i.pravatar.cc/150?u=olga' },
      text: 'Предлагаю использовать URLSearchParams для сохранения состояния.',
      date: '13.10.2026, 11:45',
    },
  ],
});
</script>

<template>
  <div class="mx-auto max-w-6xl p-4">
    <!-- Верхняя панель с ID и действиями -->
    <div class="mb-4 flex flex-col justify-between md:flex-row md:items-center">
      <div class="flex items-center gap-3">
        <UBadge color="neutral" variant="soft" size="sm">{{ issue.id }}</UBadge>
        <UButton icon="i-heroicons-pencil-square" variant="ghost" size="sm" label="Edit" />
        <UButton icon="i-heroicons-tag" variant="ghost" size="sm" label="Add tag" />
        <UButton icon="i-heroicons-ellipsis-horizontal" variant="ghost" size="sm" />
      </div>
      <div class="text-muted flex items-center gap-2 text-sm">
        <UIcon name="i-heroicons-eye" class="h-4 w-4" />
        <span>Visible to issue readers</span>
        <UButton icon="i-heroicons-star" variant="ghost" size="sm" class="ml-2" />
      </div>
    </div>

    <!-- Сетка: основная область + боковая панель -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <!-- ОСНОВНАЯ ОБЛАСТЬ -->
      <div class="space-y-6 lg:col-span-3">
        <!-- Заголовок задачи -->
        <h1 class="text-highlighted text-2xl leading-snug font-semibold">
          {{ issue.summary }}
        </h1>

        <!-- Мета-информация (создатель, обновление) -->
        <div
          class="text-muted border-default flex flex-col flex-wrap items-start gap-x-6 gap-y-2 border-b pb-6 text-sm"
        >
          <div class="flex items-center gap-2">
            <span>Created</span>
            <span class="text-highlighted font-medium">{{ issue.createdBy.name }},</span>
            <span>{{ issue.createdBy.date }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>Updated</span>
            <span class="text-highlighted font-medium">{{ issue.updatedBy.name }},</span>
            <span>{{ issue.updatedBy.date }}</span>
          </div>
        </div>

        <!-- Блок с описанием -->
        <UCard variant="outline" :ui="{ body: 'p-4 sm:p-5' }">
          <template #header>
            <h2 class="text-highlighted text-base font-semibold">Description</h2>
          </template>
          <p class="text-default text-sm leading-relaxed whitespace-pre-line">
            {{ issue.description }}
          </p>
        </UCard>

        <!-- Лента активности (комментарии) -->
        <UCard variant="outline" :ui="{ body: 'p-4 sm:p-5' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="text-highlighted text-base font-semibold">Activity</h2>
              <UButton
                icon="i-heroicons-chat-bubble-left"
                variant="ghost"
                size="sm"
                label="Comment"
              />
            </div>
          </template>
          <div class="space-y-6">
            <div v-for="comment in issue.comments" :key="comment.id" class="flex gap-3">
              <div class="min-w-0 flex-1">
                <div class="flex items-baseline gap-2">
                  <span class="text-highlighted text-sm font-medium">{{
                    comment.author.name
                  }}</span>
                  <span class="text-muted text-xs">{{ comment.date }}</span>
                </div>
                <p class="text-default mt-1 text-sm">{{ comment.text }}</p>
              </div>
            </div>
            <div class="border-default border-t pt-2">
              <UTextarea placeholder="Написать комментарий..." :rows="2" class="w-full" />
              <div class="mt-2 flex justify-end">
                <UButton size="sm" label="Отправить" />
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- БОКОВАЯ ПАНЕЛЬ СВОЙСТВ -->
      <div class="lg:col-span-1">
        <UCard variant="outline" :ui="{ body: 'p-0' }">
          <template #header>
            <h2 class="text-highlighted text-muted text-sm font-semibold tracking-wider uppercase">
              Properties
            </h2>
          </template>
          <div class="divide-default divide-y">
            <!-- Статус -->
            <!--            <div class="px-0 py-2">-->
            <!--              <div class="text-muted mb-1 text-xs font-medium uppercase">Status</div>-->
            <!--              <UBadge :color="issue.properties.status.color" variant="soft" size="sm">-->
            <!--                {{ issue.properties.status.label }}-->
            <!--              </UBadge>-->
            <!--            </div>-->
            <!-- Приоритет -->
            <div class="px-0 py-2">
              <div class="text-muted mb-1 text-xs font-medium uppercase">Priority</div>
              <UBadge :color="issue.properties.priority.color" variant="subtle" size="sm">
                {{ issue.properties.priority.label }}
              </UBadge>
            </div>
            <!-- Исполнитель -->
            <div class="px-0 py-2">
              <div class="text-muted mb-1 text-xs font-medium uppercase">Performer</div>
              <div class="flex items-center gap-2">
                <span class="text-highlighted text-sm">{{ issue.properties.assignee.name }}</span>
              </div>
            </div>
            <!-- Проект -->
            <div class="px-0 py-2">
              <div class="text-muted mb-1 text-xs font-medium uppercase">Project</div>
              <span class="text-default text-sm">{{ issue.properties.project }}</span>
            </div>
            <!-- Теги -->
            <div class="px-0 py-2">
              <div class="text-muted mb-1 text-xs font-medium uppercase">Tags</div>
              <div class="flex flex-wrap gap-1">
                <UBadge
                  v-for="tag in issue.properties.tags"
                  :key="tag"
                  color="neutral"
                  variant="outline"
                  size="xs"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
