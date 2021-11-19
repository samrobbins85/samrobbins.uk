import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: any;
  CustomData: any;
  Date: any;
  DateTime: any;
  FloatType: any;
  IntType: any;
  ItemId: any;
  MetaTagAttributes: any;
  UploadId: any;
};

export type ArticleModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  date?: InputMaybe<DateFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  markdown?: InputMaybe<TextFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ArticleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['BooleanType']>;
};

export enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

export type CreatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

export type EssayModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<EssayModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  date?: InputMaybe<DateFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum EssayModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

export type ImgixParams = {
  ar?: InputMaybe<Scalars['String']>;
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  bg?: InputMaybe<Scalars['String']>;
  blend?: InputMaybe<Scalars['String']>;
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  blendColor?: InputMaybe<Scalars['String']>;
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  blendH?: InputMaybe<Scalars['FloatType']>;
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  blendPad?: InputMaybe<Scalars['IntType']>;
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  blendW?: InputMaybe<Scalars['FloatType']>;
  blendX?: InputMaybe<Scalars['IntType']>;
  blendY?: InputMaybe<Scalars['IntType']>;
  blur?: InputMaybe<Scalars['IntType']>;
  border?: InputMaybe<Scalars['String']>;
  borderBottom?: InputMaybe<Scalars['IntType']>;
  borderLeft?: InputMaybe<Scalars['IntType']>;
  borderRadius?: InputMaybe<Scalars['String']>;
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  borderRight?: InputMaybe<Scalars['IntType']>;
  borderTop?: InputMaybe<Scalars['IntType']>;
  bri?: InputMaybe<Scalars['IntType']>;
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  chromasub?: InputMaybe<Scalars['IntType']>;
  colorquant?: InputMaybe<Scalars['IntType']>;
  colors?: InputMaybe<Scalars['IntType']>;
  con?: InputMaybe<Scalars['IntType']>;
  cornerRadius?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  cs?: InputMaybe<ImgixParamsCs>;
  dl?: InputMaybe<Scalars['String']>;
  dpi?: InputMaybe<Scalars['IntType']>;
  dpr?: InputMaybe<Scalars['FloatType']>;
  duotone?: InputMaybe<Scalars['String']>;
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  exp?: InputMaybe<Scalars['IntType']>;
  expires?: InputMaybe<Scalars['IntType']>;
  faceindex?: InputMaybe<Scalars['IntType']>;
  facepad?: InputMaybe<Scalars['FloatType']>;
  faces?: InputMaybe<Scalars['IntType']>;
  fill?: InputMaybe<ImgixParamsFill>;
  fillColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<ImgixParamsFit>;
  flip?: InputMaybe<ImgixParamsFlip>;
  fm?: InputMaybe<ImgixParamsFm>;
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  fpX?: InputMaybe<Scalars['FloatType']>;
  fpY?: InputMaybe<Scalars['FloatType']>;
  fpZ?: InputMaybe<Scalars['IntType']>;
  gam?: InputMaybe<Scalars['IntType']>;
  gridColors?: InputMaybe<Scalars['String']>;
  gridSize?: InputMaybe<Scalars['IntType']>;
  h?: InputMaybe<Scalars['FloatType']>;
  high?: InputMaybe<Scalars['IntType']>;
  htn?: InputMaybe<Scalars['IntType']>;
  hue?: InputMaybe<Scalars['IntType']>;
  invert?: InputMaybe<Scalars['BooleanType']>;
  lossless?: InputMaybe<Scalars['BooleanType']>;
  mark?: InputMaybe<Scalars['String']>;
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  markAlpha?: InputMaybe<Scalars['IntType']>;
  markBase?: InputMaybe<Scalars['String']>;
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  markH?: InputMaybe<Scalars['FloatType']>;
  markPad?: InputMaybe<Scalars['IntType']>;
  markScale?: InputMaybe<Scalars['IntType']>;
  markW?: InputMaybe<Scalars['FloatType']>;
  markX?: InputMaybe<Scalars['IntType']>;
  markY?: InputMaybe<Scalars['IntType']>;
  mask?: InputMaybe<Scalars['String']>;
  maskBg?: InputMaybe<Scalars['String']>;
  maxH?: InputMaybe<Scalars['IntType']>;
  maxW?: InputMaybe<Scalars['IntType']>;
  minH?: InputMaybe<Scalars['IntType']>;
  minW?: InputMaybe<Scalars['IntType']>;
  monochrome?: InputMaybe<Scalars['String']>;
  nr?: InputMaybe<Scalars['IntType']>;
  nrs?: InputMaybe<Scalars['IntType']>;
  orient?: InputMaybe<Scalars['IntType']>;
  pad?: InputMaybe<Scalars['IntType']>;
  padBottom?: InputMaybe<Scalars['IntType']>;
  padLeft?: InputMaybe<Scalars['IntType']>;
  padRight?: InputMaybe<Scalars['IntType']>;
  padTop?: InputMaybe<Scalars['IntType']>;
  page?: InputMaybe<Scalars['IntType']>;
  palette?: InputMaybe<ImgixParamsPalette>;
  prefix?: InputMaybe<Scalars['String']>;
  px?: InputMaybe<Scalars['IntType']>;
  q?: InputMaybe<Scalars['IntType']>;
  rect?: InputMaybe<Scalars['String']>;
  rot?: InputMaybe<Scalars['FloatType']>;
  sat?: InputMaybe<Scalars['IntType']>;
  sepia?: InputMaybe<Scalars['IntType']>;
  shad?: InputMaybe<Scalars['FloatType']>;
  sharp?: InputMaybe<Scalars['FloatType']>;
  transparency?: InputMaybe<ImgixParamsTransparency>;
  trim?: InputMaybe<ImgixParamsTrim>;
  trimColor?: InputMaybe<Scalars['String']>;
  trimMd?: InputMaybe<Scalars['FloatType']>;
  trimPad?: InputMaybe<Scalars['IntType']>;
  trimSd?: InputMaybe<Scalars['FloatType']>;
  trimTol?: InputMaybe<Scalars['FloatType']>;
  txt?: InputMaybe<Scalars['String']>;
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  txtColor?: InputMaybe<Scalars['String']>;
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  txtFont?: InputMaybe<Scalars['String']>;
  txtLead?: InputMaybe<Scalars['IntType']>;
  txtLig?: InputMaybe<Scalars['IntType']>;
  txtLine?: InputMaybe<Scalars['IntType']>;
  txtLineColor?: InputMaybe<Scalars['String']>;
  txtPad?: InputMaybe<Scalars['IntType']>;
  txtShad?: InputMaybe<Scalars['FloatType']>;
  txtSize?: InputMaybe<Scalars['IntType']>;
  txtTrack?: InputMaybe<Scalars['IntType']>;
  txtWidth?: InputMaybe<Scalars['IntType']>;
  usm?: InputMaybe<Scalars['IntType']>;
  usmrad?: InputMaybe<Scalars['FloatType']>;
  vib?: InputMaybe<Scalars['IntType']>;
  w?: InputMaybe<Scalars['FloatType']>;
};

export enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

export enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

export enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  blur = 'blur',
  solid = 'solid'
}

export enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

export enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

export enum ImgixParamsFm {
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

export enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

export enum ImgixParamsTransparency {
  grid = 'grid'
}

export enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

export enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

export enum ImgixParamsTxtFit {
  max = 'max'
}

export type InUseFilter = {
  eq?: InputMaybe<Scalars['BooleanType']>;
};

export type ItemIdFilter = {
  eq?: InputMaybe<Scalars['ItemId']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  neq?: InputMaybe<Scalars['ItemId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

export enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

export enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

export type OrientationFilter = {
  eq?: InputMaybe<UploadOrientation>;
  neq?: InputMaybe<UploadOrientation>;
};

export type PublishedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

export type ResolutionFilter = {
  eq?: InputMaybe<ResolutionType>;
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  neq?: InputMaybe<ResolutionType>;
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

export enum SiteLocale {
  en = 'en'
}

export type SlugFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StatusFilter = {
  eq?: InputMaybe<ItemStatus>;
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  neq?: InputMaybe<ItemStatus>;
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
};

export type TextFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type TypeFilter = {
  eq?: InputMaybe<UploadType>;
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  neq?: InputMaybe<UploadType>;
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

export type UpdatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

export type UploadAltFilter = {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadAuthorFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadBasenameFilter = {
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadColorsFilter = {
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  contains?: InputMaybe<ColorBucketType>;
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

export type UploadCopyrightFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadCreatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

export type UploadFilenameFilter = {
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

export type UploadFormatFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadHeightFilter = {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
};

export type UploadIdFilter = {
  eq?: InputMaybe<Scalars['UploadId']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  neq?: InputMaybe<Scalars['UploadId']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

export type UploadMd5Filter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadMimeTypeFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadNotesFilter = {
  exists?: InputMaybe<Scalars['BooleanType']>;
  matches?: InputMaybe<StringMatchesFilter>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

export enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

export type UploadSizeFilter = {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
};

export type UploadTagsFilter = {
  allIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadTitleFilter = {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['BooleanType']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  matches?: InputMaybe<StringMatchesFilter>;
  neq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

export type UploadUpdatedAtFilter = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
};

export type UploadWidthFilter = {
  eq?: InputMaybe<Scalars['IntType']>;
  gt?: InputMaybe<Scalars['IntType']>;
  gte?: InputMaybe<Scalars['IntType']>;
  lt?: InputMaybe<Scalars['IntType']>;
  lte?: InputMaybe<Scalars['IntType']>;
  neq?: InputMaybe<Scalars['IntType']>;
};

export enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

export type GetAboutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutRecord', articles?: Array<{ __typename?: 'PublishedArticleRecord', title?: string | null | undefined, link?: string | null | undefined, description?: string | null | undefined, publisher?: string | null | undefined, logo?: { __typename?: 'FileField', url: string, width?: any | null | undefined, height?: any | null | undefined } | null | undefined } | null | undefined> | null | undefined, jobs?: Array<{ __typename?: 'JobRecord', role?: string | null | undefined, duration?: string | null | undefined, company?: string | null | undefined, logo?: { __typename?: 'FileField', url: string, width?: any | null | undefined, height?: any | null | undefined } | null | undefined } | null | undefined> | null | undefined, timeline?: Array<{ __typename?: 'TimelineRecord', title?: string | null | undefined, description?: string | null | undefined, category?: string | null | undefined, date?: any | null | undefined, link?: string | null | undefined } | null | undefined> | null | undefined, skills?: Array<{ __typename?: 'SkillRecord', name?: string | null | undefined, link?: string | null | undefined, logo?: { __typename?: 'FileField', width?: any | null | undefined, height?: any | null | undefined, url: string } | null | undefined, lightlogo?: { __typename?: 'FileField', width?: any | null | undefined, height?: any | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetBlogQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetBlogQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleRecord', title?: string | null | undefined, description?: string | null | undefined, date?: any | null | undefined, markdown?: string | null | undefined } | null | undefined };

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'ArticleRecord', slug?: string | null | undefined, title?: string | null | undefined, description?: string | null | undefined, date?: any | null | undefined }> };

export type GetAllBlogsWithSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsWithSlugQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'ArticleRecord', slug?: string | null | undefined }> };

export type GetAllEssaysWithSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEssaysWithSlugQuery = { __typename?: 'Query', allEssays: Array<{ __typename?: 'EssayRecord', slug?: string | null | undefined }> };

export type GetAllEssaysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEssaysQuery = { __typename?: 'Query', allEssays: Array<{ __typename?: 'EssayRecord', slug?: string | null | undefined, title?: string | null | undefined, date?: any | null | undefined }> };

export type GetEssayQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetEssayQuery = { __typename?: 'Query', essay?: { __typename?: 'EssayRecord', title?: string | null | undefined, date?: any | null | undefined, content?: string | null | undefined } | null | undefined };

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageRecord', unsplash?: string | null | undefined, twitter?: string | null | undefined, title?: string | null | undefined, npm?: string | null | undefined, linkedin?: string | null | undefined, github?: string | null | undefined, polywork?: string | null | undefined, email?: string | null | undefined, description?: string | null | undefined } | null | undefined };


export const GetAbout = gql`
    query getAbout {
  about {
    articles {
      title
      link
      description
      publisher
      logo {
        url
        width
        height
      }
    }
    jobs {
      role
      logo {
        url
        width
        height
      }
      duration
      company
    }
    timeline {
      title
      description
      category
      date
      link
    }
    skills {
      name
      link
      logo {
        width
        height
        url
      }
      lightlogo {
        width
        height
        url
      }
    }
  }
}
    `;
export const GetBlog = gql`
    query GetBlog($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    title
    description
    date
    markdown
  }
}
    `;
export const GetAllBlogs = gql`
    query GetAllBlogs {
  allArticles(orderBy: date_DESC) {
    slug
    title
    description
    date
  }
}
    `;
export const GetAllBlogsWithSlug = gql`
    query GetAllBlogsWithSlug {
  allArticles {
    slug
  }
}
    `;
export const GetAllEssaysWithSlug = gql`
    query GetAllEssaysWithSlug {
  allEssays {
    slug
  }
}
    `;
export const GetAllEssays = gql`
    query GetAllEssays {
  allEssays(orderBy: date_DESC) {
    slug
    title
    date
  }
}
    `;
export const GetEssay = gql`
    query GetEssay($slug: String!) {
  essay(filter: {slug: {eq: $slug}}) {
    title
    date
    content
  }
}
    `;
export const GetHome = gql`
    query GetHome {
  homepage {
    unsplash
    twitter
    title
    npm
    linkedin
    github
    polywork
    email
    description
  }
}
    `;

export const GetAboutDocument = gql`
    query getAbout {
  about {
    articles {
      title
      link
      description
      publisher
      logo {
        url
        width
        height
      }
    }
    jobs {
      role
      logo {
        url
        width
        height
      }
      duration
      company
    }
    timeline {
      title
      description
      category
      date
      link
    }
    skills {
      name
      link
      logo {
        width
        height
        url
      }
      lightlogo {
        width
        height
        url
      }
    }
  }
}
    `;
export const GetBlogDocument = gql`
    query GetBlog($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    title
    description
    date
    markdown
  }
}
    `;
export const GetAllBlogsDocument = gql`
    query GetAllBlogs {
  allArticles(orderBy: date_DESC) {
    slug
    title
    description
    date
  }
}
    `;
export const GetAllBlogsWithSlugDocument = gql`
    query GetAllBlogsWithSlug {
  allArticles {
    slug
  }
}
    `;
export const GetAllEssaysWithSlugDocument = gql`
    query GetAllEssaysWithSlug {
  allEssays {
    slug
  }
}
    `;
export const GetAllEssaysDocument = gql`
    query GetAllEssays {
  allEssays(orderBy: date_DESC) {
    slug
    title
    date
  }
}
    `;
export const GetEssayDocument = gql`
    query GetEssay($slug: String!) {
  essay(filter: {slug: {eq: $slug}}) {
    title
    date
    content
  }
}
    `;
export const GetHomeDocument = gql`
    query GetHome {
  homepage {
    unsplash
    twitter
    title
    npm
    linkedin
    github
    polywork
    email
    description
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAbout(variables?: GetAboutQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAboutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAboutQuery>(GetAboutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAbout');
    },
    GetBlog(variables: GetBlogQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogQuery>(GetBlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBlog');
    },
    GetAllBlogs(variables?: GetAllBlogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllBlogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllBlogsQuery>(GetAllBlogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllBlogs');
    },
    GetAllBlogsWithSlug(variables?: GetAllBlogsWithSlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllBlogsWithSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllBlogsWithSlugQuery>(GetAllBlogsWithSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllBlogsWithSlug');
    },
    GetAllEssaysWithSlug(variables?: GetAllEssaysWithSlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllEssaysWithSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllEssaysWithSlugQuery>(GetAllEssaysWithSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllEssaysWithSlug');
    },
    GetAllEssays(variables?: GetAllEssaysQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllEssaysQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllEssaysQuery>(GetAllEssaysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllEssays');
    },
    GetEssay(variables: GetEssayQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEssayQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEssayQuery>(GetEssayDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEssay');
    },
    GetHome(variables?: GetHomeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomeQuery>(GetHomeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHome');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;