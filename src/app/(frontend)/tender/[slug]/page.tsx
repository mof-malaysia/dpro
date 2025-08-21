import { Button } from '@/components/ui/button'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@govtechmy/myds-react/breadcrumb'
import {
  CopyIcon,
  DownloadIcon,
  EmailIcon,
  HamburgerMenuIcon,
  PdfIcon,
  PhoneIcon,
  PrinterIcon,
} from '@govtechmy/myds-react/icon'
import {
  SummaryList,
  SummaryListDetail,
  SummaryListRow,
  SummaryListTerm,
} from '@/components/ui/summary-list'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@govtechmy/myds-react/table'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  return notFound()

  const { slug } = await paramsPromise

  const dummy_criteria = [
    {
      code: '250101',
      category: 'ICT (Teknologi Komunikasi Maklumat)',
      subcategory: 'Peralatan dan Kelengkapan Komputer, Perkakasan, dan Komponen',
      unit: 'Perkakasan (Teknologi Rendah)',
    },
  ]

  const dummy_contact = [
    {
      name: 'Fatimah Fadhilah Binti Khiruddin',
      tel: '03-88810184',
      fax: '03-88868295',
      email: 'fatimahfadhilah@moha.gov.my',
    },
  ]

  const dummy_files = [
    'Kenyataan Tawaran Pembekal',
    'Sampel Surat Akuan Pembida',
    'Senarai Semak untuk Pematuhan Teknikal',
    'Senarai Semak untuk Pematuhan Kewangan',
  ]

  const dummy_title =
    'Perkhidmatan Penyelenggaraan Secara Preventive Dan Corrective Kepada Perkakasan, Perisian Dan Aplikasi Sistem Pengurusan Informasi Narkotik (SPIN) Untuk Polis Diraja Malaysia (PDRM)'

  return (
    <SidebarProvider className="container">
      <PageClient />

      <article className="grow w-full max-w-[800px] mx-auto pt-4.5 pb-8 px-4.5 lg:px-6 lg:pt-8 lg:pb-32 xl:px-0">
        <div className="flex flex-col gap-y-6 pb-8 border-b">
          <SidebarTrigger asChild>
            <Button variant="default-outline" size="md" className="md:hidden sticky top-20">
              <HamburgerMenuIcon className="size-4" />
              <span>Pada halaman ini</span>
            </Button>
          </SidebarTrigger>
          <Breadcrumb variant="default">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Utama</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{dummy_title || ''}</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-heading-xs font-semibold">{dummy_title || ''}</h1>
        </div>

        <div className="space-y-16">
          <section className="space-y-8 pt-8">
            <h2
              id="keseluruhan"
              className="text-heading-2xs font-semibold font-heading scroll-mt-32"
            >
              Keseluruhan
            </h2>

            <section className="space-y-4">
              {/* Butiran Tender */}
              <h3 id="butiran-tender" className="font-semibold font-heading scroll-mt-24">
                Butiran Tender
              </h3>

              <div className="space-y-1.5 text-body-sm">
                <p className="text-txt-black-700 font-medium">No. Sebut Harga/Tender</p>
                <div className="flex border border-otl-gray-200 divide-x divide-otl-gray-200 rounded-md">
                  <span className="grow px-2.5 py-1.5">QT24000000000012687</span>
                  <Button variant="default-ghost" className="border-0 rounded-l-none">
                    <CopyIcon />
                    Salin
                  </Button>
                </div>
              </div>

              <SummaryList className="max-lg:hidden">
                <SummaryListRow>
                  <SummaryListTerm>No. Sebut Harga/Tender</SummaryListTerm>
                  <SummaryListDetail className="py-1.5">
                    <span className="flex items-center gap-3">
                      QT24000000000012687
                      <Button variant="default-outline">
                        <CopyIcon />
                        Salin
                      </Button>
                    </span>
                  </SummaryListDetail>
                </SummaryListRow>

                <SummaryListRow>
                  <SummaryListTerm>Kementerian/Agensi</SummaryListTerm>
                  <SummaryListDetail>Kementerian Dalam Negeri</SummaryListDetail>
                </SummaryListRow>

                <SummaryListRow>
                  <SummaryListTerm>PTJ</SummaryListTerm>
                  <SummaryListDetail>Bahagian Perolehan</SummaryListDetail>
                </SummaryListRow>
              </SummaryList>
            </section>

            <section className="space-y-4">
              {/* Tarikh dan Kesahan */}
              <h3 id="tarikh-dan-kesahan" className="font-semibold font-heading scroll-mt-24">
                Tarikh dan Kesahan
              </h3>

              <SummaryList className="max-lg:hidden"></SummaryList>
            </section>

            <section className="space-y-4">
              {/* Kaedah dan Harga */}
              <h3 id="kaedah-dan-harga" className="font-semibold font-heading scroll-mt-24">
                Kaedah dan Harga
              </h3>
              <SummaryList className="max-lg:hidden"></SummaryList>
            </section>
          </section>

          {/* Kriteria Kelayakan Pembekal */}
          <section className="space-y-6">
            <h2
              id="kriteria-kelayakan-pembekal"
              className="text-heading-2xs font-semibold font-heading scroll-mt-32"
            >
              Kriteria Kelayakan Pembekal
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-body-sm">
                <p className="text-txt-black-700 font-medium">Status Pembekal</p>
                <div className="border border-otl-gray-200 rounded-md px-2.5 py-1.5">Terbuka</div>
              </div>
              <div className="space-y-1.5 text-body-sm">
                <p className="text-txt-black-700 font-medium">Liputan Lokaliti</p>
                <div className="border border-otl-gray-200 rounded-md px-2.5 py-1.5">
                  Semua Negeri
                </div>
              </div>
            </div>

            <Table>
              <TableHeader className="max-sm:sr-only">
                <TableRow>
                  <TableHead>Kod Kategori</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Sub Kategori</TableHead>
                  <TableHead>Bahagian Sub Kategori</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummy_criteria.map((info) => (
                  <React.Fragment key={info.code}>
                    <TableRow className="max-sm:hidden">
                      <TableCell>{info.code}</TableCell>
                      <TableCell>{info.category}</TableCell>
                      <TableCell>{info.subcategory}</TableCell>
                      <TableCell>{info.unit}</TableCell>
                    </TableRow>

                    {/* Mobile */}
                    <TableRow className="sm:hidden">
                      <TableCell className="py-4 flex flex-col gap-2 text-txt-black-500 first:border-t-2">
                        <span className="font-semibold text-body-xs">{info.code}</span>
                        <span className="font-semibold text-body-md text-txt-black-900">
                          {info.category}
                        </span>
                        <span className="font-medium text-body-sm">{info.subcategory}</span>
                        <span className="font-medium text-body-sm">{info.unit}</span>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </section>

          {/* Maklumat Perhubungan */}
          <section className="space-y-6">
            <h2
              id="maklumat-perhubungan"
              className="text-heading-2xs font-semibold font-heading scroll-mt-32"
            >
              Maklumat Perhubungan
            </h2>
            <Table>
              <TableHeader className="max-sm:sr-only">
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>No. Tel</TableHead>
                  <TableHead>No. Faks</TableHead>
                  <TableHead>Emel</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummy_contact.map((info) => (
                  <React.Fragment key={info.name}>
                    <TableRow className="max-sm:hidden">
                      <TableCell>{info.name}</TableCell>
                      <TableCell>{info.tel}</TableCell>
                      <TableCell>{info.fax}</TableCell>
                      <TableCell>{info.email}</TableCell>
                    </TableRow>

                    {/* Mobile */}
                    <TableRow className="sm:hidden">
                      <TableCell className="py-4 flex flex-col gap-2 text-txt-black-500 font-medium first:border-t-2">
                        <div className="font-semibold text-body-md text-txt-black-900">
                          {info.name}
                        </div>
                        <span className="flex gap-1.5 items-center">
                          <EmailIcon />
                          {info.email}
                        </span>
                        <p className="flex flex-wrap gap-1.5 text-body-sm divide-x divide-otl-divider">
                          <span className="flex gap-1.5 items-center">
                            <PhoneIcon />
                            {info.tel}
                          </span>
                          <span className="pl-1.5 flex gap-1.5 items-center">
                            <PrinterIcon />
                            {info.fax}
                          </span>
                        </p>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </section>

          {/* Muat Turun */}
          <section className="space-y-6">
            <h2
              id="muat-turun"
              className="text-heading-2xs font-semibold font-heading scroll-mt-32"
            >
              Muat Turun
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {dummy_files.map((name) => (
                <div
                  className="flex justify-between items-center gap-2 p-2 border border-otl-gray-200 rounded-md"
                  key={name}
                >
                  <PdfIcon className="size-9 p-1 shrink-0" />
                  <span className="grow text-body-sm line-clamp-2">{name}</span>

                  <DownloadIcon className="text-txt-danger size-8 p-2 shrink-0" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </SidebarProvider>
  )
}
