'use client'

import { Button, ButtonCounter } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { formatISODate } from '@/utilities/formatDateTime'
import {
  DateRange,
  DateRangePicker as DateRangePickerComponent,
} from '@govtechmy/myds-react/daterange-picker'
import { ChevronDownFillIcon, CrossIcon } from '@govtechmy/myds-react/icon'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export const DateRangePicker: React.FC<{ pathname: string }> = ({ pathname }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const from = searchParams.get('dari')
  const to = searchParams.get('hingga')
  const initialDateRange: DateRange | undefined = from
    ? { from: new Date(from), ...(to && { to: new Date(to) }) }
    : undefined

  const [dateRange, setDateRange] = useState(initialDateRange)

  function handleValueChange(dateRange: DateRange) {
    const newParams = new URLSearchParams(searchParams)
    const { from, to } = dateRange

    if (from) newParams.set('dari', formatISODate(from))
    if (to) newParams.set('hingga', formatISODate(to))

    newParams.delete('page')
    router.push(pathname + '?' + newParams)
  }

  return (
    <>
      <div className="max-lg:hidden">
        <DateRangePickerComponent
          placeholder="dd/mm/yyyy"
          locale="ms"
          disabled={{
            after: new Date(),
          }}
          value={dateRange}
          onValueChange={(dateRange) => {
            setDateRange(dateRange)
            handleValueChange(dateRange)
          }}
        />
      </div>

      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="default-outline" size="md" className="fixed bottom-4.5 right-4.5 z-10">
              Tapis
              <ButtonCounter>{dateRange === undefined ? 0 : 1}</ButtonCounter>
              <ChevronDownFillIcon className="-mx-1" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Tapis</DrawerTitle>
              <DrawerClose>
                <Button variant="default-outline" iconOnly>
                  <CrossIcon />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
            </DrawerHeader>

            <div className="p-4.5 flex flex-1 flex-col gap-4.5">
              <div className="space-y-1.5">
                <span>Tarikh Diterbit</span>
                <DateRangePickerComponent
                  placeholder="dd/mm/yyyy"
                  locale="ms"
                  disabled={{
                    after: new Date(),
                  }}
                  value={dateRange}
                  onValueChange={setDateRange}
                />
              </div>
            </div>

            <DrawerFooter className="*:w-full *:justify-center">
              <DrawerClose asChild>
                <Button variant="default-outline" size="md" onClick={() => setDateRange(undefined)}>
                  Batal
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button
                  size="md"
                  onClick={() => {
                    if (dateRange) handleValueChange(dateRange)
                  }}
                >
                  Tapis
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
