import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="social relative inline-flex flex-col items-center "
      aria-label="Link to homepage"
    >
      <Image
        src="/assets/icons/Logo.svg"
        width={59}
        height={21}
        alt="Logo of the company"
      />
    </Link>
  );
};

export default Logo;
