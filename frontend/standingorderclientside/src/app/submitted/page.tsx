"use client";

import { useSearchParams } from 'next/navigation';

const Submitted = () => {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const phone = searchParams.get('phone');

  return (
    <div>
      <h1>Thank You, {firstName}!</h1>
      <p>We will call you at {phone} to provide an update on your standing order request.</p>
    </div>
  );
};

export default Submitted;
