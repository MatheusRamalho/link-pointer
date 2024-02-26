import { Avatar } from '@/components/Avatar'
import { LinkItem } from '@/components/LinkItem'
import { SocialMediaItem } from '@/components/SocialMediaItem'
import { SocialMediaRoot } from '@/components/SocialMediaRoot'

export default function Home() {
    return (
        <section className="w-full min-h-screen py-20 px-4 bg-gray-800">
            <h6 hidden> Home page </h6>

            <div className="container mx-auto max-w-2xl">
                <div className="flex items-center justify-center flex-col gap-10">
                    <div className="size-28 rounded-full border-2 border-gray-700 bg-gray-700">
                        <Avatar className="size-full" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-center text-3xl font-bold text-white">
                            Nome do usuário
                        </h1>

                        <p className="text-center text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae facilis illo eum sit, aliquid
                            maiores.
                        </p>
                    </div>

                    <SocialMediaRoot>
                        <SocialMediaItem
                            link="https://matheusramalho.dev/"
                            icon="globe"
                        />

                        <SocialMediaItem
                            link="https://www.instagram.com/"
                            icon="instagram"
                        />

                        <SocialMediaItem
                            link="https://twitter.com/"
                            icon="twitter"
                        />

                        <SocialMediaItem
                            link="https://www.facebook.com/"
                            icon="facebook"
                        />
                    </SocialMediaRoot>
                </div>

                <div className="mt-10 flex items-center justify-center flex-col gap-4">
                    <LinkItem
                        link="/"
                        icon="air-vent"
                        name="Dscricao do link"
                    />

                    <LinkItem
                        link="/"
                        icon="air-vent"
                        name=" Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae facilis illo eum sit, aliquid
                            maiores."
                    />

                    <LinkItem
                        link="/"
                        icon="air-vent"
                        name="Dscricao do link"
                    />
                </div>
            </div>
        </section>
    )
}
