export const isServerEnvironment: () => boolean = () => typeof window === 'undefined'
