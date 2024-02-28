import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, TextInput, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CustomButton, Loader} from '../../components';
import {useGifs} from '../../context/gifsContext';
import {useTheme} from '../../context/themeContext';
import {useVideoData} from '../../hooks/useGifsCall';
import {TGifsItem} from '../../models/gifs';
import {ETHEME} from '../../types/enums';
import {useStyles} from './styles';

export const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const {fetchTrendingGifs, searchGifs, refreshGifs} = useVideoData();
  const {state} = useGifs();
  const {
    trendingGifs: {
      data: trendingData,
      loading: trendingLoading,
      error: trendingError,
    },
    searchGifs: {data: searchData, loading: searchLoading, error: searchError},
  } = state;
  const {backgroundColor, setColorTheme, colorTheme, textColor} = useTheme();
  const styles = useStyles(backgroundColor, textColor);

  useEffect(() => {
    fetchTrendingGifs(offset, setLoadingMore);
  }, [offset]);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchGifs(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  const toggleTheme = () => {
    setColorTheme(
      colorTheme === ETHEME.LIGHT_MODE ? ETHEME.DARK_MODE : ETHEME.LIGHT_MODE,
    );
  };

  const handleLoadMore = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setOffset(prevOffset => prevOffset + 10);
    }
  };

  const handleGifPress = (id: string) =>
    setSelectedId(id === selectedId ? null : id);

  const renderGifs = ({item}: TGifsItem) => {
    const isSelected = selectedId === item.id;
    const source = isSelected
      ? item.images.original.url
      : item.images.preview.mp4;
    return (
      <Pressable
        style={styles.gifsContainer}
        onPress={() => handleGifPress(item.id)}>
        <FastImage
          style={styles.gif}
          source={{uri: source}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {(trendingLoading || searchLoading) && (
        <View style={styles.loader}>
          <Loader />
        </View>
      )}
      {!trendingLoading && !trendingError && !searchLoading && !searchError && (
        <>
          <View style={styles.flexRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Search Gifs..."
              onChangeText={val => setSearchText(val)}
              value={searchText}
              editable={true}
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="done"
              placeholderTextColor={textColor}
            />
            <CustomButton
              onClick={toggleTheme}
              title={colorTheme === ETHEME.LIGHT_MODE ? 'Dark' : 'Light'}
              btnStyles={styles.btn}
            />
          </View>
          <FlatList
            data={searchText ? searchData : trendingData}
            renderItem={renderGifs}
            keyExtractor={item => item.id}
            numColumns={2}
            refreshing={searchText ? searchLoading : trendingLoading}
            onRefresh={refreshGifs}
            showsVerticalScrollIndicator={false}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
              loadingMore ? (
                <View style={styles.paginationLoader}>
                  <Loader />
                </View>
              ) : null
            }
          />
        </>
      )}
    </View>
  );
};
