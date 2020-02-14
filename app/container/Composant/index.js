import { pathOr, path } from 'ramda';
import React from 'react';

import Carte from '../../components/Carte';
import CarteAccueil from '../../components/CarteAccueil';
import Liste from '../../components/Liste';
import Map from '../../components/Map';
import NextEvent from '../../components/NextEvent';
import SocialNetwork from '../../components/SocialNetwork';
import Titre from '../../components/Titre';
import WebView from '../../components/WebView';

export default (composant, key) => {
  switch (pathOr(null, ['sys', 'contentType', 'sys', 'id'], composant)) {
    case 'carte':
      return <Carte {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'carteAccueil':
      return <CarteAccueil {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'liste':
      return <Liste {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'map':
      return <Map {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'prochainEvenement':
      return <NextEvent {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'socialNetwork':
      return <SocialNetwork {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'titre':
      return <Titre {...pathOr({}, ['fields'], composant)} key={key} />;
    case 'webView':
      return <WebView {...pathOr({}, ['fields'], composant)} key={key} />;
    default:
      return null;
  }
};
