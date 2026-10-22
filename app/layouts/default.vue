<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui';

const open = ref(true);
const route = useRoute();
const colorMode = useColorMode();

function getItems(state: 'collapsed' | 'expanded') {
  return [
    // {
    //   label: 'Inbox',
    //   icon: 'i-lucide-inbox',
    //   badge: '4'
    // },
    {
      label: 'Desks',
      icon: 'i-lucide-kanban',
      to: '/desk-list',
    },
    {
      label: 'Settings',
      icon: 'i-lucide-settings',
      defaultOpen: true,
      children:
        state === 'expanded'
          ? [
              {
                label: 'General',
                icon: 'i-lucide-house',
              },
              {
                label: 'Team',
                icon: 'i-lucide-users',
              },
            ]
          : [],
    },
  ] satisfies NavigationMenuItem[];
}

const user = ref({
  name: 'Benjamin Canac',
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Benjamin Canac',
  },
});

const userItems = computed<DropdownMenuItem[][]>(() => [
  // [
  //   {
  //     label: 'Profile',
  //     icon: 'i-lucide-user'
  //   },
  //   {
  //     label: 'Settings',
  //     icon: 'i-lucide-settings',
  //     to: '/settings'
  //   }
  // ],
  [
    {
      label: 'Appearance',
      icon: 'i-lucide-sun-moon',
      children: [
        {
          label: 'Light',
          icon: 'i-lucide-sun',
          type: 'checkbox',
          checked: colorMode.value === 'light',
          onUpdateChecked(checked: boolean) {
            if (checked) {
              colorMode.preference = 'light';
            }
          },
          onSelect(e: Event) {
            e.preventDefault();
          },
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
          type: 'checkbox',
          checked: colorMode.value === 'dark',
          onUpdateChecked(checked: boolean) {
            if (checked) {
              colorMode.preference = 'dark';
            }
          },
          onSelect(e: Event) {
            e.preventDefault();
          },
        },
      ],
    },
  ],
  [
    {
      label: 'Log out',
      icon: 'i-lucide-log-out',
    },
  ],
]);

const PAGE_NAMES: Record<string, string> = {
  desk: 'Desk',
  settings: 'Settings',
  'desk-list': 'Desk List',
  task: 'Task',
  card: 'Task',
};

const pageName = computed(() => {
  const current = route.path.split('/')[1]?.toLowerCase();
  return (current && PAGE_NAMES[current]) || 'Back';
});
</script>

<template>
  <div class="flex flex-1">
    <USidebar
      v-model:open="open"
      collapsible="icon"
      rail
      :ui="{
        container: 'h-full',
        inner: 'bg-elevated/25 divide-transparent',
        body: 'py-0',
      }"
    >
      <template #header v-if="open">
        <UIcon name="i-logos-nuxt-icon" class="size-8" @click="open = !open" />VKanban
      </template>
      <template #header v-else>
        <UIcon name="i-logos-nuxt-icon" class="size-8" />
      </template>

      <template #default="{ state }">
        <UNavigationMenu
          :key="state"
          :items="getItems(state)"
          orientation="vertical"
          :ui="{ link: 'p-1.5 overflow-hidden' }"
        />
      </template>

      <template #footer>
        <UDropdownMenu
          :items="userItems"
          :content="{ align: 'center', collisionPadding: 12 }"
          :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-48' }"
        >
          <UButton
            v-bind="user"
            :label="user?.name"
            trailing-icon="i-lucide-chevrons-up-down"
            color="neutral"
            variant="ghost"
            square
            class="data-[state=open]:bg-elevated w-full overflow-hidden"
            :ui="{
              trailingIcon: 'text-dimmed ms-auto',
            }"
          />
        </UDropdownMenu>
      </template>
    </USidebar>

    <div class="flex min-w-0 flex-1 flex-col">
      <div
        class="border-default flex h-(--ui-header-height) shrink-0 items-center gap-2 border-b px-4"
      >
        <UButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
        <UButton
          v-if="route.path !== '/'"
          icon="i-lucide-arrow-left"
          color="neutral"
          variant="outline"
          @click="$router.back"
          >{{ pageName }}</UButton
        >
      </div>

      <div class="flex-1 p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
