import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
    marginTop: '15%',
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'red',
  },
  textData: {
    color: 'white',
  },
  settingsBlock: {
    padding: 20,
  },
  scrollView: {
    width: '100vw',
    maxWidth: '100vw',
    borderRadius: 200,
  },
  scrollViewContent: {
    padding: 20,
    flexDirection: 'row',
  },
  appContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: 300,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  appImage: {
    zIndex: -1,
    position: 'absolute',
  }
});
