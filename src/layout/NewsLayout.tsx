import { Outlet } from 'react-router';
import { Footer } from '@/components/footer/Footer';

export const NewsLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
