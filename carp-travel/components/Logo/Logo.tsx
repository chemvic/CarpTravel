import Image from 'next/image';
import Link from 'next/link';


const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="inline-flex flex-col items-center py-1 px-1 transition-colors duration-500 ease-in-out hover:bg-white/20"
      aria-label="Link to homepage"
    >
      <Image
        src="/assets/images/Logo.svg"
        width={59}
        height={21}
        alt="Logo of the company"
     />     
    </Link>
  );
}

export default Logo;