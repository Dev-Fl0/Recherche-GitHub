import React from 'react';

// Import des styles
import './ReposResults.scss';

// Import des composants
import { Card } from 'flowbite-react';

// Props
import { Item } from '../../../@types/index';

interface DataProps {
  datas: Item[];
}

export default function ReposResults({ datas }: DataProps) {
  const cards = datas.map((item) => (
    <div className="card" key={item.id}>
      <a href={item.html_url} target="blank" className="card-link">
        <Card
          className="card-item"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={item.owner.avatar_url}
        >
          <h5 className="card-item__name font-bold tracking-tight dark:text-white">
            {item.name}
          </h5>
          <h6 className="card-item__login tracking-tight dark:text-white">
            {item.owner.login}
          </h6>
          <p className="card-item__description font-normal dark:text-gray-400">
            {item.description}
          </p>
        </Card>
      </a>
    </div>
  ));

  return <div className="result">{cards}</div>;
}
