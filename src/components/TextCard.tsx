import { RandomQuote } from '../pages/Home';

interface Props {
  quote: RandomQuote;
}

export function TextCard({ quote }: Props) {
  return (
    <div className='relative max-w-2xl mx-auto text-black font-raleway font-medium text-4xl'>
      <p className='before:content-[""] before:absolute before:w-1 before:h-full before:bg-yellow before:-left-12'>
        "{quote.quoteText}"
      </p>
    </div>
  );
}
