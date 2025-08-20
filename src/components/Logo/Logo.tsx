import { cn } from '@/utilities/ui'
import Image from 'next/image'
import { ComponentProps, FC, SVGProps } from 'react'

export const Logo: FC<ComponentProps<'div'>> = (props) => (
  <div
    className={cn(
      'flex items-center gap-2 whitespace-nowrap font-heading text-body-lg font-semibold text-txt-black-900',
      props.className,
    )}
    {...props}
  >
    <Image
      className="w-auto h-8"
      priority
      loading="eager"
      src="/jata-negara.png"
      width={45}
      height={32}
      alt="Jata Negara"
    />
    <LogoDPro />
    d.Pro
  </div>
)

export const LogoDPro: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.5 3C28.1944 3 32 6.80558 32 11.5C32 16.1944 28.1944 20 23.5 20C22.6298 20 21.7905 19.868 21 19.625V26L17 29V19.208C17.0001 17.5037 17.963 15.9459 19.4873 15.1836L21.3428 14.2549C21.6379 14.4863 21.9707 14.6711 22.3311 14.7988C22.3382 14.8014 22.3453 14.8041 22.3525 14.8066C22.5231 14.8658 22.6995 14.912 22.8809 14.9443C22.8932 14.9466 22.9056 14.9491 22.918 14.9512C23.0004 14.965 23.0837 14.9755 23.168 14.9834C23.1929 14.9858 23.2181 14.9865 23.2432 14.9883C23.328 14.9944 23.4136 15 23.5 15C25.433 15 27 13.433 27 11.5C27 9.567 25.433 8 23.5 8C21.567 8 20 9.567 20 11.5C20 11.5238 20.0005 11.5476 20.001 11.5713L18.1455 12.5C16.8025 13.1716 15.7212 14.2139 15 15.4668V11H15.0156C15.2745 6.53834 18.9734 3 23.5 3Z"
      fill="url(#0_radial)"
    />
    <path
      d="M23.5 6C26.5376 6 29 8.46243 29 11.5C29 14.5376 26.5376 17 23.5 17C21.8918 17 20.4452 16.3094 19.4395 15.209C19.4555 15.2007 19.4711 15.1917 19.4873 15.1836L21.3428 14.2549C21.9373 14.7211 22.6858 15 23.5 15C25.433 15 27 13.433 27 11.5C27 9.567 25.433 8 23.5 8C21.567 8 20 9.567 20 11.5C20 11.5238 20.0005 11.5476 20.001 11.5713L18.1455 12.5C18.1288 12.5083 18.1123 12.5169 18.0957 12.5254C18.0331 12.1932 18 11.8504 18 11.5C18 8.46243 20.4624 6 23.5 6Z"
      fill="url(#1_linear)"
    />
    <path
      d="M13 18H12.9795C12.9921 18.1651 13 18.3317 13 18.5C13 22.0899 10.0899 25 6.5 25C2.91015 25 0 22.0899 0 18.5C0 14.9101 2.91015 12 6.5 12C7.38589 12 8.23042 12.1771 9 12.498V8L13 5V18ZM6.5 15.5C4.84315 15.5 3.5 16.8431 3.5 18.5C3.5 20.1569 4.84315 21.5 6.5 21.5C8.15685 21.5 9.5 20.1569 9.5 18.5C9.5 16.8431 8.15685 15.5 6.5 15.5Z"
      fill="url(#2_radial)"
    />
    <path
      d="M12.9785 18C12.9911 18.1651 13 18.3317 13 18.5C13 22.0899 10.0899 25 6.5 25C2.91015 25 0 22.0899 0 18.5C0 18.3317 0.00794852 18.1651 0.0205078 18C0.275877 21.3562 3.07843 24 6.5 24C9.92155 24 12.7231 21.3561 12.9785 18Z"
      fill="url(#3_linear)"
    />
    <defs>
      <radialGradient
        id="0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(28 5.5) rotate(122.152) scale(20.67 13.515)"
      >
        <stop stopColor="#9969FF" />
        <stop offset="0.845969" stopColor="#4F20B2" />
      </radialGradient>
      <linearGradient
        id="1_linear"
        x1="27.1667"
        y1="7.22222"
        x2="19.2222"
        y2="15.1667"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.154031" stopColor="#4F20B2" />
        <stop offset="1" stopColor="#9969FF" />
      </linearGradient>
      <radialGradient
        id="2_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.5 7.5) rotate(107.819) scale(14.7054 9.5904)"
      >
        <stop stopColor="#B794FF" />
        <stop offset="1" stopColor="#4F20B2" />
      </radialGradient>
      <linearGradient
        id="3_linear"
        x1="10"
        y1="23.5"
        x2="1.99987"
        y2="25.7748"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.154031" stopColor="#4F20B2" />
        <stop offset="1" stopColor="#854CFF" />
      </linearGradient>
    </defs>
  </svg>
)
