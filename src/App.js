import React from 'react';
import {
  Text,
  View,
  TextInput,
  Switch,
  Image,
  ImageBackground,
} from 'react-native';

import {globalStyles, typesStyles} from './Styles';

const App = () => (
  <ImageBackground
    source={require('../assets/bg.png')}
    resizeMode={'cover'}
    style={globalStyles.background}>
    {/* CP Checkbox */}
    <View style={globalStyles.checkbox}>
      <Text style={globalStyles.checkboxText}>Maximum Combat Points</Text>
      <Switch />
    </View>

    {/* Search box */}
    <View>
      <TextInput placeholder="Pokemon or type" style={globalStyles.input} />
    </View>

    {/* Pokemon result */}
    <View style={globalStyles.results}>
      <View style={globalStyles.pokemon}>
        <Image
          style={globalStyles.pokemonImg}
          source={{
            uri:
              'http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
          }}
        />
        <View style={globalStyles.pokemonInfo}>
          <Text style={globalStyles.pokemonTitle}>
            <Text style={globalStyles.pokemonTitleHighlight}>Pika</Text>chu
          </Text>
          <View style={globalStyles.pokemonTypes}>
            <Text style={[globalStyles.pokemonType, typesStyles.electric]}>
              Electric
            </Text>
            <Text style={[globalStyles.pokemonType, typesStyles.normal]}>
              Normal
            </Text>
          </View>
        </View>
      </View>

      {/* No results */}
      <View style={[globalStyles.pokemon, globalStyles.pokemonLast]}>
        <Image
          style={globalStyles.pokemonImg}
          source={{
            uri:
              'https://cyndiquil721.files.wordpress.com/2014/02/missingno.png',
          }}
        />
        <View style={globalStyles.pokemonInfo}>
          <Text style={globalStyles.pokemonTitle}>No results</Text>
        </View>
      </View>
    </View>
  </ImageBackground>
);

export default App;
