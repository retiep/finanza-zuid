import Image from 'next/image';
import Link from 'next/link';
import Button from '../common/Button';

export default function Hero({ title, subtitle, ctaText, ctaLink, image }) {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={image}
          alt="Finanza Zuid Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8 text-blue-100">{subtitle}</p>
          <Link href={ctaLink}>
            <Button primary size="large">{ctaText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}