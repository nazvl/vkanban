<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';

type Status = 'done' | 'in-progress' | 'pending';
type MyItem = TimelineItem & { status: Status };

const items = ref<MyItem[]>([
  {
    date: 'Oct 20, 2026',
    title: 'Got the task',
    description: 'Got the task from VK Education.',
    icon: 'i-lucide-rocket',
    color: 'success',
    status: 'done',
  },
  {
    date: 'Oct 21, 2026',
    title: 'Project setup',
    description:
      'Initialized a Nuxt 4 project with Tailwind CSS and Nuxt UI. Set up the base folder structure (app/, components/, layouts/, pages/, middleware/).',
    icon: 'i-lucide-folder-cog',
    color: 'success',
    status: 'done',
  },
  {
    date: 'Oct 22, 2026',
    title: 'Layout & navigation UI',
    description:
      'Reorganized the layout structure, added board pages, navigation buttons, and charts. Enabled SSR.',
    icon: 'i-lucide-loader-circle',
    color: 'warning',
    status: 'in-progress',
  },
  {
    date: 'Oct 25, 2026',
    title: 'Auth & Database',
    description:
      'Registration / login, JWT authorization, migrations and User / Board / BoardMember models. Basic access separation.',
    icon: 'i-lucide-database',
    color: 'neutral',
    status: 'pending',
  },
  {
    date: 'Oct 29, 2026',
    title: 'Boards CRUD',
    description:
      "Create, delete and edit boards, list the user's boards, invite members and assign roles.",
    icon: 'i-lucide-layout-dashboard',
    color: 'neutral',
    status: 'pending',
  },
  {
    date: 'Nov 2, 2026',
    title: 'Columns & Cards backend',
    description:
      'Columns (create, rename), cards (title, description), moving between columns, ordering, assignee and deadline — API and DB logic.',
    icon: 'i-lucide-columns-3',
    color: 'neutral',
    status: 'pending',
  },
  {
    date: 'Nov 6, 2026',
    title: 'Kanban UI & Drag & Drop',
    description:
      'Wire the board UI to the backend: columns, cards, drag & drop with persisted order, assignee selection, deadline display.',
    icon: 'i-lucide-mouse-pointer-click',
    color: 'neutral',
    status: 'pending',
  },
  {
    date: 'Nov 10, 2026',
    title: 'Comments',
    description: 'Card comments: create, list, author and timestamp. Rendered inside the card UI.',
    icon: 'i-lucide-message-square',
    color: 'neutral',
    status: 'pending',
  },
  {
    date: 'Nov 14, 2026',
    title: 'Testing & Deployment',
    description:
      'API and UI testing, edge-case debugging (access rights, card ordering), performance tuning, deployment.',
    icon: 'i-lucide-check-circle',
    color: 'neutral',
    status: 'pending',
  },
  {
    date: 'Nov 17, 2026',
    title: 'Optional: Realtime & Extensions',
    description:
      'WebSocket for realtime moves and comments, tags and tag filtering, checklists, card search.',
    icon: 'i-lucide-zap',
    color: 'neutral',
    status: 'pending',
  },
]);
</script>

<template>
  <UTimeline :items="items">
    <template #title="{ item }">
      <div class="flex items-center gap-2">
        <span>{{ item.title }}</span>
        <UBadge
          v-if="(item as MyItem).status === 'in-progress'"
          color="warning"
          variant="subtle"
          size="sm"
        >
          In progress
        </UBadge>
        <UBadge
          v-else-if="(item as MyItem).status === 'done'"
          color="success"
          variant="subtle"
          size="sm"
        >
          Done
        </UBadge>
      </div>
    </template>
  </UTimeline>
</template>
