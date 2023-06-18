import { NavBar } from './components/NavBar';
import { NetworkStatus } from './components/NetworkStatus';


type TProps = {
  children: React.ReactNode;
};

export const BaseLayout: React.FC<TProps> = ({ children }) => {
  return (
    <div className='flex h-screen w-screen bg-lightGray  text-gray-700 dark:bg-gray-900'>
      <div className='flex grow flex-col'>
        <NavBar />
        <div className='flex grow flex-col overflow-auto'>
          <div className='container'>{children}</div>
        </div>
      </div>
      <NetworkStatus />
    </div>
  );
};