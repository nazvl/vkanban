<template>
  <UApp>
    <UHeader title="VKanban">
      <template #right>
        <UColorModeButton />

        <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/nazvl"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
