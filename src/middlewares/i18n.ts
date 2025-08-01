import { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from '@/utilities/i18n'

export const I18nMiddleware = () => {
  return async (request: NextRequest) => {
    const handleI18nRouting = createIntlMiddleware(routing)
    const response = handleI18nRouting(request)
    return response
  }
}
