export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorMessage = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
