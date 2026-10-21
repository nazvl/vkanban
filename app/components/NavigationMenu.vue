<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

const open = ref(true)

const colorMode = useColorMode()

function getItems(state: 'collapsed' | 'expanded') {
  return [
    // {
    //   label: 'Inbox',
    //   icon: 'i-lucide-inbox',
    //   badge: '4'
    // },
    {
      label: 'Desks',
      icon: 'i-lucide-kanban'
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
                  icon: 'i-lucide-house'
                },
                {
                  label: 'Team',
                  icon: 'i-lucide-users'
                },
              ]
              : []
    }
  ] satisfies NavigationMenuItem[]
}

const user = ref({
  name: 'Benjamin Canac',
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Benjamin Canac'
  }
})

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
              colorMode.preference = 'light'
            }
          },
          onSelect(e: Event) {
            e.preventDefault()
          }
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
          type: 'checkbox',
          checked: colorMode.value === 'dark',
          onUpdateChecked(checked: boolean) {
            if (checked) {
              colorMode.preference = 'dark'
            }
          },
          onSelect(e: Event) {
            e.preventDefault()
          }
        }
      ]
    }
  ],
  [
    {
      label: 'Log out',
      icon: 'i-lucide-log-out'
    }
  ]
])

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
        body: 'py-0'
      }"
    >
      <template #header v-if="open">
        <UIcon name="i-logos-nuxt-icon" class="size-8" />VKanban
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
              class="w-full data-[state=open]:bg-elevated overflow-hidden"
              :ui="{
              trailingIcon: 'text-dimmed ms-auto'
            }"
          />
        </UDropdownMenu>
      </template>
    </USidebar>

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