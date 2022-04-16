export const socketUrl = `https://backend.sonarplatform.io`;
export const baseUrl = `https://backend.sonarplatform.io/sonar`;

export const getMetaData = (chainId: string, address: string): string => {
  return `${socketUrl}/currencies/${chainId}/${address}/metadata`;
};
export const getAddAndRemoveLiquidity = (
  network: string,
  address: string
): string => {
  return `${baseUrl}/getAddAndRemoveLiquidity/${address}/${network}`;
};
