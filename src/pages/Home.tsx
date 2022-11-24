import { ArrowsClockwise } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { AuthorCard } from '../components/AuthorCard';
import { Header } from '../components/Header';
import { TextCard } from '../components/TextCard';
import { getRandomQuote } from '../utils/getRandomQuote';

export interface RandomQuote {
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
  id: string;
}

export function Home() {
  const [randomQuote, setRandomQuote] = useState({} as RandomQuote);

  useEffect(() => {
    getRandomQuote(setRandomQuote);
  }, []);
  return (
    <>
      <Header getRandomQuote={() => getRandomQuote(setRandomQuote)} />
      <div className='grid items-center mx-auto gap-4 min-h-[calc(100vh-200px)]'>
        <TextCard quote={randomQuote} />
        <AuthorCard
          author={randomQuote.quoteAuthor}
          genre={randomQuote.quoteGenre}
        />
      </div>
    </>
  );
}
