import { Fragment } from 'react';

export default function Head(): JSX.Element {
  return (
    <Fragment>
      <title>OpenTable - Home</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Fragment>
  );
}

type Head = ReturnType<typeof Head>;
