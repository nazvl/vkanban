<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';

definePageMeta({ layout: 'auth' });

const fields: AuthFormField[] = [
  { name: 'name', type: 'text', label: 'Name', placeholder: 'Enter your name', required: true },
  { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email', required: true },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
  },
  {
    name: 'confirm',
    type: 'password',
    label: 'Confirm password',
    placeholder: 'Confirm your password',
    required: true,
  },
];

const schema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    confirm: z.string().min(8, 'Must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  });
type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload.data);
}
</script>

<template>
  <UPageCard class="w-full max-w-md">
    <UAuthForm
      :schema="schema"
      :fields="fields"
      title="Create an account"
      icon="i-lucide-user-plus"
      :submit="{ label: 'Create account' }"
      @submit="onSubmit"
    >
      <template #description>
        Already have an account?
        <ULink to="/login" class="text-primary font-medium">Sign in</ULink>.
      </template>
      <template #footer>
        By signing up, you agree to our
        <ULink to="#" class="text-primary font-medium">Terms of Service</ULink>.
      </template>
    </UAuthForm>
  </UPageCard>
</template>
