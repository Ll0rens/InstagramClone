import {useState, useRef} from 'react';
import { View, Image, FlatList, useWindowDimensions, ViewabilityConfig, ViewToken} from 'react-native'
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
    images: string[];
    onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const {width} = useWindowDimensions();

  const onViewableItemsChanged = useRef(({viewableItems}: { viewableItems: Array<ViewToken>}) =>
  { //useRef is needed because this function should not be recreated 
    if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
    }
  });

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  }
  return (
    <View>
      <FlatList 
        data={images}
        renderItem= {({item}) => (
            <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} /> 
            </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        }}>
        {images.map((_, index) => ( //Map provides second argument as the index of the current element and third argument as the whole array itself.
            <View key={index}
                style={{
                width: 10,
                aspectRatio: 1,
                borderRadius: 5,
                backgroundColor: activeImageIndex === index ? colors.primary : colors.white,
                margin: 10,
                marginHorizontal: 5,
            }}
            /> 
        ))}
      
      </View>
    </View>
  )
}

export default Carousel