import { notFound } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import type { ToolFeature } from '@/lib/constants';
import UseTool from '@/components/UseTool';
import { ITool } from '@/database';
import { getSimilarToolsBySlug } from '@/lib/actions/tool.action';
import ToolCard from '@/components/ToolCard';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ToolFeatureDetail = ({icon,alt,label} : {icon:string;alt: string;label:string;}) => (
  <div className='flex flex-row gap-2 items-center'>
    <Image src={icon} alt={alt} width={17} height={17}/>
    <p>{label}</p>
    <p>{alt}</p>
  </div>
)

const AlternativeTools = ({ alternativeItems} : {alternativeItems : string[]}) => (
  <div className='flex flex-col gap-2'>
    <h2>Similar tools</h2>
    <ul>
      {alternativeItems.map((item) => (
        <li className='text-light-100 text-lg max-sm:text-sm' key={item}>{item}</li>
      ))}
    </ul>
  </div>
)

const ToolTags = ({tags}: {tags: string[]}) => (
  <div className='flex flex-row gap-1.5 flex-wrap'>
    {tags.map((tag) => (
      <div className='bg-dark-100 text-light-100 text-xs rounded-[6px] px-5 py-2' key={tag}>{tag}</div>
    ))}
  </div>
)


const ToolDetailsPage = async ({ params} : {params:Promise<{slug: string}>}) => {

  const {slug} = await params;

  const request = await fetch(`${BASE_URL}/api/tools/${slug}`);
  const {tool : {title,main,image,type,features,price,tags,url,usage,similar,author,difficulty}} = await request.json();


  if(!main) return notFound();

  const usings = 10;

  const similarTools: ITool[] = await getSimilarToolsBySlug(slug);

  console.log({similarTools});

  return (
    <section id='tool'>
      <div className='flex w-2/3 flex-col items-start gap-4 max-lg:w-full mb-10'>
        <h1>Tool desc</h1>
        <p>{main}</p>
      </div>

      <div className='flex w-full flex-col lg:flex-row gap-12 items-start mt-12 max-lg'>
        {/* left */}
        <div className='flex flex-[2] flex-col gap-8 max-lg:w-full'>
          <Image src={image} alt='Tool Banner' width={800} height={800} className='max-h-[457px] w-full rounded-lg object-cover'/>

          <section className='flex flex-col gap-2'>
            <h2>How to use</h2>
            <p>{usage}</p>
          </section>

          <section className='flex flex-col gap-2'>
            <h2>Tool features</h2>

            {features.map((feature : ToolFeature) => (
              <ToolFeatureDetail key={feature.name} label={feature.name} alt={feature.desc} icon='/globe.svg' />
            ))}
          </section>

          <AlternativeTools alternativeItems={similar}/>

          <section className='flex flex-col gap-2'>
            <h2>The autor of the tool:</h2>
            <p>{author}</p>
          </section>

          <ToolTags tags={tags}/>
        </div>
        {/* right */}
        <aside className='flex-1 w-full p-4 border-l border-gray-700'>
          <div className='bg-dark-100 border-dark-200 card-shadow flex w-full flex-col gap-6 rounded-[10px] border px-5 py-6'>
            <h2>Select Tool</h2>
            {usings > 0 ? (
              <p className='text-sm'>
                Join {usings} people who already use this tool!
              </p>
            ) : (
              <p className='text-sm'>Be the first to use this tool!</p>
            )}
            <UseTool/>
          </div>
        </aside>

      </div>
      <div className='flex w-full flex-col gap-4 pt-20'>
            <h2>Similar Tools</h2>
            <div className='grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1'>
              {similarTools.length > 0 && similarTools.map((similarTool: ITool) => (
                <ToolCard key={similarTool.slug} {...similarTool}/>
              ))}
            </div>
      </div>
    </section>
  )
}

export default ToolDetailsPage