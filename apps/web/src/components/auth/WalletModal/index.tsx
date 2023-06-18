'use client';

import { ConnectorList } from '../ConnectorList';
import { Modal, Toast } from 'components/ui';
import useConnection from 'hooks/auth/useConnection';
import dropRight from 'lodash/dropRight';
import Link from 'next/link';
import { FC, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Connector, useAccount, useConnect } from 'wagmi';

type TWalletModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const WalletModal: FC<TWalletModalProps> = ({ isOpen, onClose }) => {
  const [selectedConnector, setSelectedConnector] = useState<Connector>();
  const { connector, isReconnecting } = useAccount();
  const { isConnected } = useConnection();
  const { connect, connectors, isLoading } = useConnect({
    onSuccess: () => {
      toast.custom((t) => (
        <Toast
          type='success'
          toastProps={t}
          title={'Wallet connected'}
          description={`Connected to ${
            selectedConnector?.name || ''
          }, you can now use this wallet to sign transactions and interact with the app.
            `}
        />
      ));
    },
    onError: (e) => {
      toast.custom((t) => (
        <Toast
          type='error'
          toastProps={t}
          title={e?.message || 'Error'}
          description='Please try again, or try with another wallet.'
        />
      ));
    },
  });
  const reducedConnectors = (connectors && dropRight(connectors)) || [];
  const handleConnect = (c: Connector) => {
    if (c.ready) {
      setSelectedConnector(c);
      connect({ connector: c });
    }
    if (!c.ready) {
      toast.custom((t) => (
        <Toast
          type='error'
          toastProps={t}
          title='Unsupported wallet'
          description='Looks like you havent installed the wallet extension, please install it and try again.'
        />
      ));
    }
  };
  if (isConnected) return null;
  return (
    <Modal
      isBottomSheet
      maxWidth='max-w-[650px]'
      hasCloseIcon={true}
      hasFocusClose={false}
      isOpen={isOpen}
      handleClose={onClose}
      title={
        <h4 className='mb-6 text-center text-[30px] font-bold leading-9 text-black'>
          Connect a wallet
        </h4>
      }
    >
      <ConnectorList
        connector={connector}
        connectors={reducedConnectors}
        isLoading={isLoading}
        isReconnecting={isReconnecting}
        selectedConnector={selectedConnector}
        onClickAction={handleConnect}
      />
      <div className='my-8 w-full max-w-[300px] space-x-2 text-center text-xs font-medium leading-5 text-[#626262]'>
        By connecting a wallet, you agree to
        <br />
        <Link className='mx-1 underline' href='/terms'>
          Terms of Service
        </Link>
        and consent to its
        <Link className='mx-1 underline' href='/terms'>
          Privacy Policy
        </Link>
        .
      </div>
    </Modal>
  );
};
