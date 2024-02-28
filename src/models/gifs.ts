import {TGifsStates} from './base';

export type TGifSize = {
  height?: string;
  width?: string;
  size?: string;
  url?: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
};

export type TUrl = {
  url: string;
};

export type TTrendingGifs = {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url?: string;
  source_tld?: string;
  source_post_url?: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    original: TGifSize;
    downsized: TGifSize;
    downsized_large: TGifSize;
    downsized_medium: TGifSize;
    downsized_small: TGifSize;
    downsized_still: TGifSize;
    fixed_height: TGifSize;
    fixed_height_downsampled: TGifSize;
    fixed_height_small: TGifSize;
    fixed_height_small_still: TGifSize;
    fixed_height_still: TGifSize;
    fixed_width: TGifSize;
    fixed_width_downsampled: TGifSize;
    fixed_width_small: TGifSize;
    fixed_width_small_still: TGifSize;
    fixed_width_still: TGifSize;
    looping: TGifSize;
    original_still: TGifSize;
    original_mp4: TGifSize;
    preview: TGifSize;
    preview_gif: TGifSize;
    preview_webp: TGifSize;
    hd: TGifSize;
    '480w_still': TGifSize;
  };
  user: {
    avatar_url: string;
    banner_image?: string;
    banner_url?: string;
    profile_url: string;
    username: string;
    display_name: string;
    description?: string;
    instagram_url: string;
    website_url?: string;
    is_verified: boolean;
  };
  analytics_response_payload: string;
  analytics: {
    onload: TUrl;
    onclick: TUrl;
    onsent: TUrl;
  };
};

export type TGifsItem = {
  item: TTrendingGifs;
};

export type TGifsInitialState = {
  trendingGifs: TGifsStates;
  searchGifs: TGifsStates;
};
