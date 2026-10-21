

export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = true // TODO: заменить на реальную проверку

    if (!isAuthenticated) {
        return navigateTo('/login')
    }
})