import React, { useContext } from 'react';
import { CountriesType } from '../../utils/types';
import { UIContext } from '../../store/ui-context';

import classes from './CountryCard.module.scss';
import { Link } from 'react-router-dom';
import { getStyleForCurrentTheme } from '../../utils/themeHelpers';

type CountryCardProps = {
  country: CountriesType;
};

export default function CountryCard({
  country,
}: CountryCardProps): JSX.Element {
  const uiCtx = useContext(UIContext);

  return (
    <Link
      to={`/countries-api/${country.name}`}
      className={`${classes['country-card']} ${classes[`country-card--${getStyleForCurrentTheme(uiCtx.isLightTheme)}`]}`}
    >
      <img
        className={classes['country-card-image']}
        src={country.flag.png}
        alt={country.flag.alt}
      />
      <div className={classes['country-card-content']}>
        <h2 className={classes['country-card-title']}>{country.name}</h2>
        <p className={classes['country-card-paragraph']}>
          <span>Population: </span>
          {country.population.toLocaleString('en-US')}
        </p>
        <p className={classes['country-card-paragraph']}>
          <span>Region: </span>
          {country.region}
        </p>
        <p className={classes['country-card-paragraph']}>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </Link>
  );
}
