export interface ErrorComponentsProps{
    error: Error & {
        digest?: string
        statusCode?: number
        title?: string
    }
    reset: () => void
}

export interface LoadingSpinnerProps {
    text?: string
    size?: 'sm' | 'md' | 'lg'
    color?: string
}