import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

interface EventCardProps{
    title: string;
    image:string;
}

const EventCard = ({title,image} : EventCardProps) => {
  return (
    <Link href={`/tools`} id='tool-card' className='flex flex-col gap-3'>
        <Image src={image} alt={title} width={410} height={300} className='h-[300px] w-full rounded-lg object-cover'/>

        <p className='text-[20px] line-clamp-1 text-light-200 text-sm'>{title}</p>
    </Link>
  )
}

export default EventCard