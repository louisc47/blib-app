import { pathOr } from 'ramda';
import React from 'react';

import Carte from '../../components/Carte';
import CarteAccueil from '../../components/CarteAccueil';
import Liste from '../../components/Liste';

export default (composant, key) => {
  switch (pathOr(null, ['sys', 'contentType', 'sys', 'id'], composant)) {
    case 'carte':
      return <Carte {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'carteAccueil':
      return <CarteAccueil {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'liste':
      return <Liste {...pathOr({}, ['fields'], composant)} key={key} />;
    default:
      return null;
  }
};
