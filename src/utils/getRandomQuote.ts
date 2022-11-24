import { RandomQuote } from '../pages/Home';

export async function getRandomQuote(
  setter: React.Dispatch<React.SetStateAction<RandomQuote>>
) {
  const data = await fetch(
    'https://quote-garden.herokuapp.com/api/v3/quotes/random'
  );
  const response = await data.json();
  setter(response.data[0]);
}
