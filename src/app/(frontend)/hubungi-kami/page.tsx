import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/container'
import { Hero } from '@/heros/Hero'
import { ContactInfo } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { DirectionIcon, EmailIcon, PhoneIcon } from '@govtechmy/myds-react/icon'
import { Link } from '@govtechmy/myds-react/link'
import type { Metadata } from 'next/types'
import React from 'react'

export const dynamic = 'force-static'

export default async function Page() {
  const contactInfoData = (await getCachedGlobal('contact-info', 2)()) as ContactInfo

  const { address, directions, email, embed_query, no_tel, website_name } = contactInfoData

  const info = [
    {
      type: 'email',
      icon: <EmailIcon className="size-4.5" />,
      info: email,
    },
    {
      type: 'phone',
      icon: <PhoneIcon className="size-4.5" />,
      info: no_tel,
    },
  ] as const

  return (
    <div className="pb-12 lg:pb-[84px]">
      <Hero title="Hubungi Kami" />

      <Container>
        <Section className="gap-6 border-washed-100">
          <div className="flex flex-col gap-12 sm:gap-[72px] sm:flex-row">
            <div className="space-y-6 sm:w-1/3 lg:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-primary">
                Pejabat
              </p>

              <div className="space-y-2">
                <p className="text-xl font-semibold">{website_name}</p>
                <p className="text-sm text-black-700">
                  {address.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="flex gap-2">
                {directions.map(({ id, site, url }) => (
                  <Button key={id} variant="outline" asChild>
                    <Link href={url} newTab underline="none">
                      <DirectionIcon />
                      {site}
                    </Link>
                  </Button>
                ))}
              </div>

              <div className="hidden sm:flex flex-col gap-3">
                {info.map((info) => (
                  <InfoLink {...info} key={info.type} />
                ))}
              </div>
            </div>

            <div className="sm:w-2/3">
              <iframe
                className="rounded-[32px] border border-outline-200 shadow-[0_30px_100px_-10px_#4C53614D] max-sm:aspect-square w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${embed_query}`}
              />

              <div className="flex flex-col gap-3 sm:hidden max-sm:pt-8">
                {info.map((info) => (
                  <InfoLink {...info} key={info.type} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  )
}

const InfoLink = ({
  icon,
  info,
  type,
}: {
  icon: React.ReactNode
  info: string
  type: 'email' | 'phone'
}) => (
  <a
    href={`${type === 'email' ? 'mailto' : 'tel'}:${info}`}
    className="group flex gap-2 items-center text-txt-primary"
  >
    <div className="size-8 rounded-full bg-bg-primary-50 flex items-center justify-center">
      {icon}
    </div>
    <div className="space-y-1 font-semibold">
      <p className="font-medium group-hover:underline">{info}</p>
    </div>
  </a>
)

export function generateMetadata(): Metadata {
  return {
    title: `Hubungi Kami`,
  }
}
