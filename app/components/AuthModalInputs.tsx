import { ChangeEvent } from 'react';

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
}

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  isSignin,
}: Props): JSX.Element {
  return (
    <div className="text-black">
      {isSignin && (
        <div className="my-3 flex justify-between text-sm">
          {' '}
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="First name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="Last name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="bg-white border rounded p-2 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignin && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="Telephone number"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="bg-white border rounded p-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </div>
  );
}

type AuthModalInputs = ReturnType<typeof AuthModalInputs>;
