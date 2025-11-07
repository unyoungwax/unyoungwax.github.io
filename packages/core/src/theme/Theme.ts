export type Theme = {
  readonly name: string;
  readonly variables: {
    readonly [key: string]: string;
  };
};
