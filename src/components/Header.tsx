import { ArrowsClockwise } from 'phosphor-react';

interface Props {
  getRandomQuote: () => Promise<void>;
}

export function Header({ getRandomQuote }: Props) {
  return (
    <header className='py-8 px-24 text-gray-500 font-raleway font-medium'>
      <p
        className='flex gap-2 items-center justify-end cursor-pointer'
        onClick={getRandomQuote}
      >
        random <ArrowsClockwise size={22} />
      </p>
    </header>
  );
}
