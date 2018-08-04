import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';

import _style from './style';

class MovieList extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <View style={_style.container}>
        {
          this.props.payload.map((movie, i) => (
            <View
              key={`${movie.title}-${i.toString()}`}
              style={_style.movieContainer}
            >
              <Image
                style={_style.image}
                source={{ uri: movie.picture }}
              />
              <Text
                style={_style.text}
                ellipsizeMode="clip"
              >
                {movie.title}
              </Text>
            </View>
          ))
        }
      </View>
    );
  }
}

export default MovieList;
