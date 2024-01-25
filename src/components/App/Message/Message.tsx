import React, { useEffect, useState } from 'react';

// Import des styles
import './Message.scss';

// Props
interface MessagesProps {
  nbResults: number;
}

export default function Message({ nbResults }: MessagesProps) {
  const [result, setResult] = useState('résultats');

  useEffect(() => {
    if (nbResults < 2) {
      setResult('résultat');
    } else {
      setResult('résultats');
    }
  }, [nbResults]);

  return (
    <div className="message border-b p-5">
      <p className=" text-lg text-gray-700 ">
        La recherche a donnée {nbResults} {result}
      </p>
    </div>
  );
}
