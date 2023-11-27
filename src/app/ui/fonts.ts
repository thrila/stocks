import { Abril_Fatface, Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sans'
})
const abrilFatface = Abril_Fatface({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif'
})

export { openSans, abrilFatface }
