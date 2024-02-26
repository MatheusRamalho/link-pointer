import Link from 'next/link'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

import { Icon } from './Icon'

interface SocialMediaItemProps {
    link: string
    icon: keyof typeof dynamicIconImports
}

export function SocialMediaItem({ link, icon }: SocialMediaItemProps) {
    return (
        <Link
            className="size-12 rounded-full bg-gray-600 flex items-center justify-center hover:bg-green-500"
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <Icon name={icon} className="size-6 text-white" />
        </Link>
    )
}
