import { ReactNode } from 'react'

interface SocialMediaRootProps {
    children: ReactNode
}

export const SocialMediaRoot = ({ children }: SocialMediaRootProps) => {
    return (
        <ul className="flex items-center justify-center gap-3">{children}</ul>
    )
}
