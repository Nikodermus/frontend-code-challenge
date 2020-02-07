import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },
  checkbox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    margin: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: '#808080',
    textAlign: 'left',
    marginRight: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    fontSize: 30,
    marginLeft: '5%',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  results: {
    marginTop: -10,
  },
  pokemon: {
    borderBottomWidth: 1,
    borderColor: '#808080',
    width: '80%',
    marginLeft: '10%',
    backgroundColor: '#2c2c2c',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pokemonLast: {
    borderBottomWidth: 0,
  },
  pokemonImg: {
    width: 100,
    height: 100,
    margin: 20,
  },
  pokemonInfo: {
    flex: 1,
  },
  pokemonTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  pokemonTitleHighlight: {
    backgroundColor: '#845d0d',
  },
  pokemonTypes: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pokemonType: {
    fontSize: 16,
    color: 'white',
    borderRadius: 20,
    flex: 0,
    flexGrow: 0,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export const typesStyles = StyleSheet.create({
  normal: {
    backgroundColor: '#a8a878',
  },
  fire: {
    backgroundColor: '#f08030',
  },
  fighting: {
    backgroundColor: '#c03028',
  },
  water: {
    backgroundColor: '#6890f0',
  },
  flying: {
    backgroundColor: '#a890f0',
  },
  grass: {
    backgroundColor: '#78c850',
  },
  poison: {
    backgroundColor: '#a040a0',
  },
  electric: {
    backgroundColor: '#f8d030',
  },
  ground: {
    backgroundColor: '#e0c068',
  },
  psychic: {
    backgroundColor: '#f85888',
  },
  rock: {
    backgroundColor: '#b8a038',
  },
  ice: {
    backgroundColor: '#98d8d8',
  },
  bug: {
    backgroundColor: '#a8b820',
  },
  dragon: {
    backgroundColor: '#7038f8',
  },
  ghost: {
    backgroundColor: '#705898',
  },
  dark: {
    backgroundColor: '#705848',
  },
  steel: {
    backgroundColor: '#b8b8d0',
  },
  fairy: {
    backgroundColor: '#ee99ac',
  },
});
