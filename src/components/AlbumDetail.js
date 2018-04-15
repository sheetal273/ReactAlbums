import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
const { thumbnail_image, title, artist, image, url} = album;

  return (
    <Card>
      <CardSection>
      <View style={styles.imageContainer}>
        <Image
        style={styles.imageStyle}
        source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={styles.centerImageStyle} />
      </ CardSection>

      <CardSection>
        <Button onPress={() => { Linking.openURL(url); }} >
        Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 20
  },
  centerImageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};
export default AlbumDetail;
