import { Outlet } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <Outlet />
      <footer className='font-montserrat text-center mt-8 py-6 text-sm text-gray-300'>
        created by <span className='font-bold underline'>Sérgio Valério</span> -
        devChallenges.io
      </footer>
    </>
  );
}
