'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/useIsMobile'
import React, { useEffect, useState } from 'react'

const PageClient: React.FC = () => {
  const items = [
    {
      title: 'Keseluruhan',
      url: '#keseluruhan',
      children: [
        {
          title: 'Butiran Tender',
          url: '#butiran-tender',
        },
        {
          title: 'Tarikh dan Kesahan',
          url: '#tarikh-dan-kesahan',
        },
        {
          title: 'Kaedah dan Harga',
          url: '#kaedah-dan-harga',
        },
      ],
    },
    {
      title: 'Kriteria Kelayakan Pembekal',
      url: '#kriteria-kelayakan-pembekal',
    },
    {
      title: 'Maklumat Perhubungan',
      url: '#maklumat-perhubungan',
    },
    {
      title: 'Muat Turun',
      url: '#muat-turun',
    },
  ]

  const isMobile = useIsMobile()
  const [hash, setHash] = useState(items[0].url)

  useEffect(() => {
    if (window !== undefined) {
      setHash(window.location.hash)
    }
  }, [])

  return (
    <Sidebar
      collapsible={isMobile ? 'offcanvas' : 'none'}
      className="sticky top-16 h-[calc(100svh-64px)] grow max-w-60 max-lg:hidden"
    >
      <SidebarContent>
        <div className="pt-4.5 max-lg:px-4.5 lg:pt-8 flex justify-between">
          <span className="lg:text-body-lg font-semibold">Pada halaman ini</span>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={hash === item.url}
                    onClick={() => setHash(item.url)}
                  >
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.children?.map((item) => (
                    <SidebarMenuSub key={item.title}>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={hash === item.url}
                          onClick={() => setHash(item.url)}
                        >
                          <a href={item.url}>
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  ))}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default PageClient
