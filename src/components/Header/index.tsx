'use client'

import { LogIn, ShoppingCart, UserCircle } from 'lucide-react'
import { ModeToggle } from '../ModeToggle'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const [header, setHeader] = useState(false)
  const { theme } = useTheme()

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  const getLogoSrc = () => {
    if (theme === 'dark') {
      return '/logo-purple.svg'
    } else if (theme === 'light') {
      return '/logo-black.svg'
    } else {
      return '/logo-purple.svg'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.addEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <div
      className={twMerge(
        // Base styles
        'sticky top-0 flex items-center justify-between h-full w-full mx-auto max-w-[2560px] px-4 py-4 sm:px-8 xl:px-16 border-b border-transparent transition-all duration-200 z-50',

        // Scroll down styles
        header ? 'border-input shadow-md bg-background' : 'bg-transparent',
      )}
    >
      <div>
        <Image
          src={getLogoSrc()}
          alt="Wise Records Logo"
          height={40}
          width={350}
        />
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button className="h-12 text-base font-semibold">
          <LogIn className="mr-2 h-6 w-5" /> Login
        </Button>

        <Button className="h-12" variant="outline">
          <UserCircle />
        </Button>

        <Button className="h-12" variant="outline">
          <ShoppingCart />
        </Button>

        <ModeToggle />
      </div>
    </div>
  )
}
