import GallerySlider from '@/components/GallerySlider/GallerySlider'
import Image from 'next/image'

const Gallery:React.FC = () => {
  return (
    <section id='gallery' className='section gallery'>
        <div className="container flex flex-col items-center gap-[24px] md:gap-[72px] xl:gap-[24px]">
        <h2 className="uppercase text-[40px] font-thin leading-[1.4] tracking-[-1.6px]  md:text-[67px] md:leading-[0.985] md:tracking-[-2.68px] xl:text-[98px] xl:leading-[1.21] xl:tracking-[-3.92px] xl:self-start ">our <span className="font-medium">gallery</span></h2>                            
        <div className="flex flex-col gap-[24px] md:hidden">
            <Image
            width={280}
            height={187}
            alt='mountain'
            src='/assets/images/images/gallery/mountain@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/mountain.jpg'
            className='h-[187px]'
            />
            <Image
            width={280}
            height={187}
            alt='mountain'
            src='/assets/images/images/gallery/lake@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/lake.jpg'
            className='h-[187px]'
            />
            <Image
            width={280}
            height={187}
            alt='mountain'
            src='/assets/images/images/gallery/river@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/river.jpg'
            className='h-[187px]'
            />
        </div>

        <GallerySlider/>


        </div>
    </section>
  )
}

export default Gallery