import React from 'react';
import composant from '../Composant';
import { ScrollView } from 'react-native-gesture-handler';

export default ({ composants }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        paddingBottom: 100,
      }}
    >
      {composants.map((item, i) => {
        return composant(item, i);
      })}
    </ScrollView>
  );
};
