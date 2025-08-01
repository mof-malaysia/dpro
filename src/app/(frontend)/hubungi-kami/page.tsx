import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
// import PageClient from './page.client'
import { Hero } from '@/heros/Hero'
import { cn } from '@/utilities/ui'
import { DirectionIcon, EmailIcon, PhoneIcon } from '@govtechmy/myds-react/icon'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/ui/container'
import { Link } from '@govtechmy/myds-react/link'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  //   const payload = await getPayload({ config: configPromise })

  //   const contact = await payload.findGlobal({
  //     collection: 'contact',
  //     depth: 1,
  //   })
  const data = {
    encoded_address: 'place_id:ChIJR5p96zm2zTEROuWvj2j_aoY',
  }
  return (
    <div className="pt-24 pb-24">
      <Hero title="Hubungi Kami">{/* <PageClient /> */}</Hero>

      <Container>
        <Section className="gap-6 border-washed-100 py-12 lg:py-[84px]">
          <div className="flex flex-col gap-12 sm:gap-[72px] sm:flex-row">
            <div className="space-y-4.5 sm:w-1/3 lg:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-primary">
                Pejabat
              </p>

              <div className="space-y-2">
                {/* <p className="text-xl font-semibold">{data.site_name}</p>
                    <p className="text-sm text-black-700">
                      {data && data.address
                        ? data.address.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))
                        : ""}
                    </p> */}
              </div>

              <div className="flex gap-2 pt-3">
                {[
                  {
                    name: 'Google Maps',
                    href: `https://www.google.com/maps/dir//${data.encoded_address}`,
                  },
                  {
                    name: 'Waze',
                    href: `https://www.waze.com/en/live-map/directions/menara-usahawan-persiaran-perdana-18-putrajaya?place=w.66650141.666435876.410674`,
                  },
                ].map(({ name, href }) => (
                  <Button key={name} variant="secondary-outline" asChild>
                    <Link href={href} newTab underline="none">
                      <DirectionIcon />
                      {name}
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: <PhoneIcon className="size-4.5" />,
                    title: 'telephone',
                    desc: '+603 000 0000', // data.no_tel,
                  },
                  {
                    icon: <EmailIcon className="size-4.5" />,
                    title: 'email',
                    desc: 'admin@dpro.gov.my', // data.email,
                  },
                ].map(({ icon, title, desc }) => (
                  <a
                    key={title}
                    href={`${title === 'email' ? 'mailto' : 'tel'}:${desc}`}
                    className="group flex gap-2 items-center text-txt-secondary"
                  >
                    <div className="size-8 rounded-full bg-bg-secondary-50 flex items-center justify-center">
                      {icon}
                    </div>
                    <div className="space-y-1 font-semibold">
                      <p className="font-medium group-hover:underline">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <iframe
              className="rounded-[32px] border border-outline-200 shadow-[0_30px_100px_-10px_#4C53614D] max-sm:aspect-square sm:w-2/3"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=${data.encoded_address}`}
            />
          </div>
        </Section>
      </Container>

      {/* <div className="grid flex-none grid-flow-row grid-cols-4 divide-x divide-washed-100 px-0 max-md:divide-y">
              {Boolean(data.social_media.length)
                ? data.social_media.map(
                    ({ social, link, id }) =>
                      link.url && (
                        <a
                          key={id}
                          href={link.url}
                          target="_blank"
                          rel="noopenner noreferrer"
                          className="underline-font text-sm text-black-700 hover:text-foreground hover:underline max-md:col-span-2"
                        >
                          <div className="col-span-1 flex flex-none flex-col items-center gap-2 py-6 md:gap-3 xl:w-[100px]">
                            <div className="flex size-[42px] items-center justify-center rounded-full bg-brand-50 text-foreground-primary">
                              {_social_media[social].icon}
                            </div>
                            {social}
                          </div>
                        </a>
                      ),
                  )
                : null}
            </div> */}
      {/* </div> */}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Hubungi Kami`,
  }
}
