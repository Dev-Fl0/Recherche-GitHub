import { useEffect, useState } from 'react';

// Import des styles
import './App.scss';

// Import des éléments
import SearchBar from './SearchBar/SearchBar';
import ReposResults from './ReposResults/ReposResults';
import Message from './Message/Message';
import Logo from '../../assets/images/logo-github.png';

// Import des données locales
// import localDatas from '../../data/repos';


// 80945428
// Props
import { Data } from '../../@types/index';
import Loader from './Utils/Loader';
import PaginationElement from './Utils/PaginationElement';
import Erreurs from './Erreurs/Erreurs';

function App() {
  const [search, setSearch] = useState('javascript');
  const [data, setData] = useState<Data>(Object);
  const [isLoading, setIsLoading] = useState(true);
  const [nbPage, setNbpage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${nbPage}&per_page=9`
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        return <Erreurs />;
      }
    };

    fetchData();
  }, [search, nbPage]);

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    setSearch('javascript');

  }

  return (
    <div className="App">
      <header className="header">
        <a onClick={handleClick}>
          <img src={Logo} alt="Logo gitHub" className="header-image" />
        </a>
      </header>
      <SearchBar setSearch={setSearch} />
      <Message nbResults={data.total_count} />
      {isLoading ? (
        <Loader />
      ) : <ReposResults datas={data.items} /> && data.items ? (
        <ReposResults datas={data.items} />
      ) : (
        <Erreurs />
      )}
      {data.items && (
        <PaginationElement setNbpage={setNbpage} search={search} />
      )}
    </div>
  );
}

export default App;
