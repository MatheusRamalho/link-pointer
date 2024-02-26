import Link from 'next/link'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

import { Icon } from './Icon'

interface LinkItemProps {
    link: string
    name: string
    icon: keyof typeof dynamicIconImports
}

export function LinkItem({ link, name, icon }: LinkItemProps) {
    return (
        <article className="relative w-full -auto p-3 rounded-xl bg-gray-700 border border-gray-600 shadow-lg flex items-center justify-center flex-col gap-4 sm:flex-row group hover:bg-green-700">
            <Link
                className="absolute size-full"
                href={link}
                target="_blank"
                rel="noreferrer"
            />

            <div className="size-10 flex items-center justify-center pr-2 sm:border-r sm:border-r-gray-600 sm:group-hover:border-r-green-300">
                <Icon className="size-5 text-white" name={icon} />
            </div>

            <div className="flex-1">
                <p className="text-white">{name}</p>
            </div>
        </article>
    )
}
