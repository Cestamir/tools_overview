import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import type { ToolFeature,Tool } from '@/lib/constants';


const ToolCard = ({title,image,type,slug,main,url,price,features} : Tool) => {
  return (
    <Link href={`/tools/${slug}`} id='tool-card' className='flex flex-col gap-3'>
        <Image src={image} alt={title} width={410} height={300} className='h-[300px] w-full rounded-lg object-cover'/>

        <p className='text-[20px] text-center line-clamp-1 text-light-200 text-sm'>{title}</p>

        <div className="flex flex-row gap-2">
            <Image src="/tool.png" alt="logo" width={18} height={14} />
            <p>{type}</p>
        </div>

        <div className="text-light-200 flex flex-row flex-wrap items-center gap-4">
            <div className='flex flex-row gap-2'>
                <Image src="/money.png" alt="price" width={14} height={14} />
                <p>{price}</p>
            </div>
            <div className='flex flex-row gap-2'>
                <Image src="/window.svg" alt="main" width={14} height={14} />
                <p>{main}</p>
            </div>
        </div>
    </Link>
  )
}

export default ToolCard
