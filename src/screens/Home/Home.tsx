import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
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

  const {fetchTrendingGifs, searchGifs, refreshGifs} = useVideoData();
  const {state} = useGifs();
  const {
    trendingGifs: {data, loading, error},
  } = state;
  const {backgroundColor, setColorTheme, colorTheme, textColor} = useTheme();

  const styles = useStyles(backgroundColor, textColor);

  useEffect(() => {
    fetchTrendingGifs(offset, setLoadingMore);
  }, [offset]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      searchGifs(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  const renderGifs = ({item}: TGifsItem) => {
    return (
      <View style={styles.gifsContainer}>
        <FastImage
          style={styles.gif}
          source={{uri: item.images.original.url}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading === true && (
        <View style={styles.loader}>
          <Loader />
        </View>
      )}
      {!loading && !error && (
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
            <View style={styles.flexEnd}>
              <CustomButton
                onClick={toggleTheme}
                title={colorTheme === ETHEME.LIGHT_MODE ? 'Dark' : 'Light'}
                btnStyles={styles.btn}
              />
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={renderGifs}
            keyExtractor={item => item.id}
            numColumns={2}
            refreshing={loading}
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
