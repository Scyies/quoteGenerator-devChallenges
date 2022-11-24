import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { TextCard } from '../components/TextCard';
import { getRandomQuote } from '../utils/getRandomQuote';
import { RandomQuote } from './Home';

export function Quotes() {
  const params = useParams();

  const navigate = useNavigate();

  const [quotes, setQuotes] = useState<RandomQuote[]>([]);

  const [newRandomQuote, setNewRandomQuote] = useState({} as RandomQuote);

  async function getQuotes() {
    const data = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${params.id}`
    );
    const response = await data.json();
    setQuotes(response.data);
  }

  async function updateToNewRandomQuote() {
    await getRandomQuote(setNewRandomQuote);
    navigate(`/${newRandomQuote.quoteAuthor}`);
  }

  useEffect(() => {
    if (!params.id) navigate('/');
    getQuotes();
  }, [params.id]);
  return (
    <>
      <Header getRandomQuote={updateToNewRandomQuote} />
      <div className='flex flex-col gap-32 max-w-2xl mx-auto min-h-[calc(100vh-200px)]'>
        <h1 className='font-bold text-4xl font-raleway text-gray-800 mt-11'>
          {params.id}
        </h1>
        <section className='flex flex-col gap-24'>
          {quotes && quotes.map((quote) => <TextCard quote={quote} />)}
        </section>
      </div>
    </>
  );
}
