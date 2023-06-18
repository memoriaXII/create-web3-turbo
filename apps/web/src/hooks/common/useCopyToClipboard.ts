import copyToClipboard from 'copy-to-clipboard';
import toast from 'react-hot-toast';

const useCopyToClipboard = (name: string) => {
  return (str: string) => {
    copyToClipboard(str);
    toast(`${name} copied to clipboard`);
  };
};

export default useCopyToClipboard;