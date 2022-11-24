import { ArrowRight } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  author: string;
  genre: string;
}

export function AuthorCard({ author, genre }: Props) {
  const navigate = useNavigate();
  function getAuthorQuotes() {
    navigate(`/${author}`);
  }
  return (
    <div
      className='flex justify-between items-center py-12 px-8 bg-transparent hover:bg-gray-800 max-w-3xl w-full mx-auto group transition-colors cursor-pointer'
      onClick={getAuthorQuotes}
    >
      <div className='flex flex-col gap-2'>
        <p className='font-bold text-2xl text-gray-500 group-hover:text-gray-100'>
          {author}
        </p>
        <p className='font-medium text-sm text-gray-300'>{genre}</p>
      </div>
      <ArrowRight size={32} className='text-white' />
    </div>
  );
}
