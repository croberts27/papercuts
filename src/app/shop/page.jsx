import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import freakyLady from '@/images/avatar.jpg'
import crazyLegs from '@/images/portrait.jpg'
import tiddies from '@/images/tiddy_ski.JPG'
import diner from '@/images/diner.JPG'
import eyes from '@/images/freaky_eyes.JPG'
import smokes from '@/images/mr_smokes.JPG'
import street from '@/images/funky_street.JPG'
import legsForDays from '@/images/legs_legs_legs.JPG'
import BMW from '@/images/bmw.JPG'

const art = [
  {
    name: 'B&W Freaky Lady',
    description: 'Oh shit this lady freaky!!',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: freakyLady,
  },
  {
    name: 'Crazy Legs',
    description: 'Wild, crazy legs maaan!',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: crazyLegs,
  },
  {
    name: 'Tiddy Ski',
    description: 'Oh shit this lady skiing with her tiddies out!',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: tiddies,
  },
  {
    name: 'Diner',
    description: 'Just a diner, man.',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: diner,
  },
  {
    name: 'Freaky Eyes',
    description: 'Oh shit these eyes are freaky!!',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: eyes,
  },
  {
    name: 'Mr. Smokes',
    description: 'Mr. Smokes, maan. ',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: smokes,
  },
  {
    name: 'Street',
    description: 'What a street!',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: street,
  },
  {
    name: 'BMW Land',
    description: 'Vroooooom!',
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: BMW,
  },
  {
    name: 'Legs For Dayz',
    description: "Legs don't stop",
    link: {
      href: 'https://www.instagram.com/papercuts_collage/',
      label: 'For Sale',
    },
    logo: legsForDays,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Art For Sale',
  description: 'Pieces I have created and am selling',
}

export default function Shop() {
  return (
    <SimpleLayout
      title="PAPERCUTS FOR SALE"
      className="flex flex-wrap content-center justify-center"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {art.map((art) => (
          <Card as="li" key={art.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={art.logo}
                alt=""
                className="object-fill"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={art.link.href}>{art.name}</Card.Link>
            </h2>
            <Card.Description>{art.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{art.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
