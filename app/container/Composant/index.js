import { pathOr } from 'ramda';
import React from 'react';

import Carte from '../../components/Carte';
import CarteAccueil from '../../components/CarteAccueil';

export default composant => {
  switch (pathOr(null, ['sys', 'contentType', 'sys', 'id'], composant)) {
    case 'carte':
      return <Carte {...pathOr({}, ['fields'], composant)} />;
    case 'carteAccueil':
      return <CarteAccueil {...pathOr({}, ['fields'], composant)} />;
    default:
      return null;
  }
};
