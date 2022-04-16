export const convertToQueryString = (queryParams: { [key: string]: any }) => {
  if (!queryParams) {
    return "";
  }

  return Object.entries(queryParams)
    .map(([key, value]) => {
      return `${key}=${encodeURI(value + "")}`;
    })
    .join("&");
};
