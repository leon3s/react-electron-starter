import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  movieContainer: {
    maxWidth: (window.innerWidth / 4).toFixed(0),
    padding: 10,
  },
  image: {
    width: (window.innerWidth / 4).toFixed(0) - (4 * 10),
    height: 200,
  },
  text: {
    padding: 2,
    width: (window.innerWidth / 4).toFixed(0) - (4 * 10),
    textAlign: 'center',
  }
});
