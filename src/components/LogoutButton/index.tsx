'use client'

import { LogoutIcon } from '@govtechmy/myds-react/icon'
import { logoutAction } from './action'
import { Button } from '../ui/button'

export default function LogoutButton() {
  return (
    <Button variant="unset" onClick={() => logoutAction()}>
      <LogoutIcon /> Logout
    </Button>
  )
}
