import React, { useEffect, useState } from 'react';

// Import des styles
import './Message.scss';

// Props
interface MessagesProps {
  nbResults: number;
}

export default function Message({ nbResults }: MessagesProps) {
  const [result, setResult] = useState('Aucun résultat');

  useEffect(() => {
    if (nbResults === 0) {
      setResult("La recherche n'a donnée aucun résultat");
      return;
    }
    if (nbResults === 1) {
      setResult('La recherche a donnée 1 résultat');
      return;
    } else {
      setResult(`La recherche a donnée ${nbResults} résultats`);
    }
  }, [nbResults]);

  return (
    <div className="message border-b p-5">
      <p className=" text-lg text-gray-700 ">{result}</p>
    </div>
  );
}
