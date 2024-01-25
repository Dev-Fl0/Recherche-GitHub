import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';

export default function Erreurs() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> To many request wait a moment
    </Alert>
  );
}
