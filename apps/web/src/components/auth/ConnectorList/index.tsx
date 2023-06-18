import { Button, Spinner } from 'components/ui';
import { getWalletIcon, getWalletName } from 'config/chain';
import { cn } from 'lib/utils';
import { Connector } from 'wagmi';

export const ConnectorList = ({
  connector,
  connectors,
  isLoading,
  isReconnecting,
  selectedConnector,
  onClickAction,
}: {
  connector?: Connector;
  connectors: Connector[];
  isLoading: boolean;
  selectedConnector?: Connector;
  isReconnecting: boolean;
  onClickAction: (c: Connector) => void;
}) => {
  return (
    <div className='grid w-full max-w-[680px] items-center justify-center gap-x-[5px] sm:grid-cols-4'>
      {connectors?.map((c) => (
        <Button
          variant='ghost'
          disabled={isReconnecting || connector?.id === c.id}
          type='button'
          key={c.name}
          className={cn(
            'w-full h-full text-centerdisabled:cursor-not-allowed relative flex cursor-pointer flex-col rounded-lg',
            !c.ready ? 'opacity-50 cursor-not-allowed' : ''
          )}
          onClick={() => onClickAction(c)}
        >
          <div className='mx-auto flex h-full w-full flex-col items-center justify-center font-bold'>
            <div className='flex rounded-box p-[20px] hover:bg-lightGray'>
              {getWalletIcon(c.id)}
            </div>
            {c?.id === selectedConnector?.id && isLoading ? (
              <div className='mt-[9px] flex items-center justify-center space-x-3 '>
                <Spinner />
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center'>
                <p className='mt-[9px] w-full text-base font-medium leading-[22px]'>
                  {getWalletName(c.id)}
                </p>
              </div>
            )}
          </div>
        </Button>
      ))}
    </div>
  );
};
