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
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type AssetConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: AssetWhereUniqueInput;
};

export type AssetCreateInput = {
  coverImagePortfolio?: InputMaybe<PortfolioCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageTechnology?: InputMaybe<TechnologyCreateManyInlineInput>;
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  screenshotPortfolio?: InputMaybe<PortfolioCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  connect?: InputMaybe<AssetWhereUniqueInput>;
  create?: InputMaybe<AssetCreateInput>;
};

export type AssetManyWhereInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  coverImagePortfolio_every?: InputMaybe<PortfolioWhereInput>;
  coverImagePortfolio_none?: InputMaybe<PortfolioWhereInput>;
  coverImagePortfolio_some?: InputMaybe<PortfolioWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageTechnology_every?: InputMaybe<TechnologyWhereInput>;
  imageTechnology_none?: InputMaybe<TechnologyWhereInput>;
  imageTechnology_some?: InputMaybe<TechnologyWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  screenshotPortfolio_every?: InputMaybe<PortfolioWhereInput>;
  screenshotPortfolio_none?: InputMaybe<PortfolioWhereInput>;
  screenshotPortfolio_some?: InputMaybe<PortfolioWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  fileName_ASC = 'fileName_ASC',
  fileName_DESC = 'fileName_DESC',
  handle_ASC = 'handle_ASC',
  handle_DESC = 'handle_DESC',
  height_ASC = 'height_ASC',
  height_DESC = 'height_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  width_ASC = 'width_ASC',
  width_DESC = 'width_DESC'
}

export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  coverImagePortfolio?: InputMaybe<PortfolioUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageTechnology?: InputMaybe<TechnologyUpdateManyInlineInput>;
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  screenshotPortfolio?: InputMaybe<PortfolioUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  delete?: InputMaybe<Array<Locale>>;
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  connect?: InputMaybe<Array<AssetConnectInput>>;
  create?: InputMaybe<Array<AssetCreateInput>>;
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  data: AssetUpdateManyInput;
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  connect?: InputMaybe<AssetWhereUniqueInput>;
  create?: InputMaybe<AssetCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  create: AssetCreateInput;
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  data: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type AssetWhereInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  coverImagePortfolio_every?: InputMaybe<PortfolioWhereInput>;
  coverImagePortfolio_none?: InputMaybe<PortfolioWhereInput>;
  coverImagePortfolio_some?: InputMaybe<PortfolioWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  handle_contains?: InputMaybe<Scalars['String']>;
  handle_ends_with?: InputMaybe<Scalars['String']>;
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  handle_not?: InputMaybe<Scalars['String']>;
  handle_not_contains?: InputMaybe<Scalars['String']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  height_gt?: InputMaybe<Scalars['Float']>;
  height_gte?: InputMaybe<Scalars['Float']>;
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  height_lt?: InputMaybe<Scalars['Float']>;
  height_lte?: InputMaybe<Scalars['Float']>;
  height_not?: InputMaybe<Scalars['Float']>;
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageTechnology_every?: InputMaybe<TechnologyWhereInput>;
  imageTechnology_none?: InputMaybe<TechnologyWhereInput>;
  imageTechnology_some?: InputMaybe<TechnologyWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  mimeType_contains?: InputMaybe<Scalars['String']>;
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  mimeType_not?: InputMaybe<Scalars['String']>;
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  screenshotPortfolio_every?: InputMaybe<PortfolioWhereInput>;
  screenshotPortfolio_none?: InputMaybe<PortfolioWhereInput>;
  screenshotPortfolio_some?: InputMaybe<PortfolioWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  size_gt?: InputMaybe<Scalars['Float']>;
  size_gte?: InputMaybe<Scalars['Float']>;
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  size_lt?: InputMaybe<Scalars['Float']>;
  size_lte?: InputMaybe<Scalars['Float']>;
  size_not?: InputMaybe<Scalars['Float']>;
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  width_gt?: InputMaybe<Scalars['Float']>;
  width_gte?: InputMaybe<Scalars['Float']>;
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  width_lt?: InputMaybe<Scalars['Float']>;
  width_lte?: InputMaybe<Scalars['Float']>;
  width_not?: InputMaybe<Scalars['Float']>;
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  end?: InputMaybe<Scalars['Boolean']>;
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  doc = 'doc',
  docx = 'docx',
  html = 'html',
  jpg = 'jpg',
  odp = 'odp',
  ods = 'ods',
  odt = 'odt',
  pdf = 'pdf',
  png = 'png',
  ppt = 'ppt',
  pptx = 'pptx',
  svg = 'svg',
  txt = 'txt',
  webp = 'webp',
  xls = 'xls',
  xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  format?: InputMaybe<DocumentFileTypes>;
};

export type DocumentTransformationInput = {
  output?: InputMaybe<DocumentOutputInput>;
};

export enum ImageFit {
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

export type ImageResizeInput = {
  fit?: InputMaybe<ImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageTransformationInput = {
  resize?: InputMaybe<ImageResizeInput>;
};

export enum Locale {
  en = 'en'
}

export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export enum PortfolioCategories {
  coursework = 'coursework',
  hackathons = 'hackathons',
  python = 'python',
  web_dev = 'web_dev'
}

export type PortfolioConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: PortfolioWhereUniqueInput;
};

export type PortfolioCreateInput = {
  categories?: InputMaybe<Array<PortfolioCategories>>;
  coders?: InputMaybe<Array<Scalars['String']>>;
  coverImage?: InputMaybe<AssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  github?: InputMaybe<Array<Scalars['String']>>;
  markdown?: InputMaybe<Scalars['String']>;
  npm?: InputMaybe<Scalars['String']>;
  screenshot?: InputMaybe<AssetCreateOneInlineInput>;
  slug: Scalars['String'];
  technologies?: InputMaybe<TechnologyCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PortfolioCreateManyInlineInput = {
  connect?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  create?: InputMaybe<Array<PortfolioCreateInput>>;
};

export type PortfolioCreateOneInlineInput = {
  connect?: InputMaybe<PortfolioWhereUniqueInput>;
  create?: InputMaybe<PortfolioCreateInput>;
};

export type PortfolioManyWhereInput = {
  AND?: InputMaybe<Array<PortfolioWhereInput>>;
  NOT?: InputMaybe<Array<PortfolioWhereInput>>;
  OR?: InputMaybe<Array<PortfolioWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<PortfolioCategories>>;
  categories_contains_all?: InputMaybe<Array<PortfolioCategories>>;
  categories_contains_none?: InputMaybe<Array<PortfolioCategories>>;
  categories_contains_some?: InputMaybe<Array<PortfolioCategories>>;
  categories_not?: InputMaybe<Array<PortfolioCategories>>;
  coders?: InputMaybe<Array<Scalars['String']>>;
  coders_contains_all?: InputMaybe<Array<Scalars['String']>>;
  coders_contains_none?: InputMaybe<Array<Scalars['String']>>;
  coders_contains_some?: InputMaybe<Array<Scalars['String']>>;
  coders_not?: InputMaybe<Array<Scalars['String']>>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  date_gt?: InputMaybe<Scalars['Date']>;
  date_gte?: InputMaybe<Scalars['Date']>;
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  date_lt?: InputMaybe<Scalars['Date']>;
  date_lte?: InputMaybe<Scalars['Date']>;
  date_not?: InputMaybe<Scalars['Date']>;
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featured_not?: InputMaybe<Scalars['Boolean']>;
  github?: InputMaybe<Array<Scalars['String']>>;
  github_contains_all?: InputMaybe<Array<Scalars['String']>>;
  github_contains_none?: InputMaybe<Array<Scalars['String']>>;
  github_contains_some?: InputMaybe<Array<Scalars['String']>>;
  github_not?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  markdown?: InputMaybe<Scalars['String']>;
  markdown_contains?: InputMaybe<Scalars['String']>;
  markdown_ends_with?: InputMaybe<Scalars['String']>;
  markdown_in?: InputMaybe<Array<Scalars['String']>>;
  markdown_not?: InputMaybe<Scalars['String']>;
  markdown_not_contains?: InputMaybe<Scalars['String']>;
  markdown_not_ends_with?: InputMaybe<Scalars['String']>;
  markdown_not_in?: InputMaybe<Array<Scalars['String']>>;
  markdown_not_starts_with?: InputMaybe<Scalars['String']>;
  markdown_starts_with?: InputMaybe<Scalars['String']>;
  npm?: InputMaybe<Scalars['String']>;
  npm_contains?: InputMaybe<Scalars['String']>;
  npm_ends_with?: InputMaybe<Scalars['String']>;
  npm_in?: InputMaybe<Array<Scalars['String']>>;
  npm_not?: InputMaybe<Scalars['String']>;
  npm_not_contains?: InputMaybe<Scalars['String']>;
  npm_not_ends_with?: InputMaybe<Scalars['String']>;
  npm_not_in?: InputMaybe<Array<Scalars['String']>>;
  npm_not_starts_with?: InputMaybe<Scalars['String']>;
  npm_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  screenshot?: InputMaybe<AssetWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
};

export enum PortfolioOrderByInput {
  categories_ASC = 'categories_ASC',
  categories_DESC = 'categories_DESC',
  coders_ASC = 'coders_ASC',
  coders_DESC = 'coders_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  featured_ASC = 'featured_ASC',
  featured_DESC = 'featured_DESC',
  github_ASC = 'github_ASC',
  github_DESC = 'github_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  markdown_ASC = 'markdown_ASC',
  markdown_DESC = 'markdown_DESC',
  npm_ASC = 'npm_ASC',
  npm_DESC = 'npm_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  website_ASC = 'website_ASC',
  website_DESC = 'website_DESC'
}

export type PortfolioUpdateInput = {
  categories?: InputMaybe<Array<PortfolioCategories>>;
  coders?: InputMaybe<Array<Scalars['String']>>;
  coverImage?: InputMaybe<AssetUpdateOneInlineInput>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  github?: InputMaybe<Array<Scalars['String']>>;
  markdown?: InputMaybe<Scalars['String']>;
  npm?: InputMaybe<Scalars['String']>;
  screenshot?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  technologies?: InputMaybe<TechnologyUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PortfolioUpdateManyInlineInput = {
  connect?: InputMaybe<Array<PortfolioConnectInput>>;
  create?: InputMaybe<Array<PortfolioCreateInput>>;
  delete?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  set?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  update?: InputMaybe<Array<PortfolioUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<PortfolioUpsertWithNestedWhereUniqueInput>>;
};

export type PortfolioUpdateManyInput = {
  categories?: InputMaybe<Array<PortfolioCategories>>;
  coders?: InputMaybe<Array<Scalars['String']>>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  github?: InputMaybe<Array<Scalars['String']>>;
  markdown?: InputMaybe<Scalars['String']>;
  npm?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PortfolioUpdateManyWithNestedWhereInput = {
  data: PortfolioUpdateManyInput;
  where: PortfolioWhereInput;
};

export type PortfolioUpdateOneInlineInput = {
  connect?: InputMaybe<PortfolioWhereUniqueInput>;
  create?: InputMaybe<PortfolioCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PortfolioUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<PortfolioUpsertWithNestedWhereUniqueInput>;
};

export type PortfolioUpdateWithNestedWhereUniqueInput = {
  data: PortfolioUpdateInput;
  where: PortfolioWhereUniqueInput;
};

export type PortfolioUpsertInput = {
  create: PortfolioCreateInput;
  update: PortfolioUpdateInput;
};

export type PortfolioUpsertWithNestedWhereUniqueInput = {
  data: PortfolioUpsertInput;
  where: PortfolioWhereUniqueInput;
};

export type PortfolioWhereInput = {
  AND?: InputMaybe<Array<PortfolioWhereInput>>;
  NOT?: InputMaybe<Array<PortfolioWhereInput>>;
  OR?: InputMaybe<Array<PortfolioWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<PortfolioCategories>>;
  categories_contains_all?: InputMaybe<Array<PortfolioCategories>>;
  categories_contains_none?: InputMaybe<Array<PortfolioCategories>>;
  categories_contains_some?: InputMaybe<Array<PortfolioCategories>>;
  categories_not?: InputMaybe<Array<PortfolioCategories>>;
  coders?: InputMaybe<Array<Scalars['String']>>;
  coders_contains_all?: InputMaybe<Array<Scalars['String']>>;
  coders_contains_none?: InputMaybe<Array<Scalars['String']>>;
  coders_contains_some?: InputMaybe<Array<Scalars['String']>>;
  coders_not?: InputMaybe<Array<Scalars['String']>>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  date_gt?: InputMaybe<Scalars['Date']>;
  date_gte?: InputMaybe<Scalars['Date']>;
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  date_lt?: InputMaybe<Scalars['Date']>;
  date_lte?: InputMaybe<Scalars['Date']>;
  date_not?: InputMaybe<Scalars['Date']>;
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  featured_not?: InputMaybe<Scalars['Boolean']>;
  github?: InputMaybe<Array<Scalars['String']>>;
  github_contains_all?: InputMaybe<Array<Scalars['String']>>;
  github_contains_none?: InputMaybe<Array<Scalars['String']>>;
  github_contains_some?: InputMaybe<Array<Scalars['String']>>;
  github_not?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  markdown?: InputMaybe<Scalars['String']>;
  markdown_contains?: InputMaybe<Scalars['String']>;
  markdown_ends_with?: InputMaybe<Scalars['String']>;
  markdown_in?: InputMaybe<Array<Scalars['String']>>;
  markdown_not?: InputMaybe<Scalars['String']>;
  markdown_not_contains?: InputMaybe<Scalars['String']>;
  markdown_not_ends_with?: InputMaybe<Scalars['String']>;
  markdown_not_in?: InputMaybe<Array<Scalars['String']>>;
  markdown_not_starts_with?: InputMaybe<Scalars['String']>;
  markdown_starts_with?: InputMaybe<Scalars['String']>;
  npm?: InputMaybe<Scalars['String']>;
  npm_contains?: InputMaybe<Scalars['String']>;
  npm_ends_with?: InputMaybe<Scalars['String']>;
  npm_in?: InputMaybe<Array<Scalars['String']>>;
  npm_not?: InputMaybe<Scalars['String']>;
  npm_not_contains?: InputMaybe<Scalars['String']>;
  npm_not_ends_with?: InputMaybe<Scalars['String']>;
  npm_not_in?: InputMaybe<Array<Scalars['String']>>;
  npm_not_starts_with?: InputMaybe<Scalars['String']>;
  npm_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  screenshot?: InputMaybe<AssetWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
};

export type PortfolioWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  locale: Locale;
  stages: Array<Stage>;
};

export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type ScheduledOperationConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: ScheduledOperationWhereUniqueInput;
};

export type ScheduledOperationCreateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

export type ScheduledOperationManyWhereInput = {
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not?: InputMaybe<Scalars['String']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  status_not?: InputMaybe<ScheduledOperationStatus>;
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  errorMessage_ASC = 'errorMessage_ASC',
  errorMessage_DESC = 'errorMessage_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  status_ASC = 'status_ASC',
  status_DESC = 'status_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export enum ScheduledOperationStatus {
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ScheduledOperationWhereInput = {
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not?: InputMaybe<Scalars['String']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  status_not?: InputMaybe<ScheduledOperationStatus>;
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ScheduledReleaseConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

export type ScheduledReleaseManyWhereInput = {
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not?: InputMaybe<Scalars['String']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  errorMessage_ASC = 'errorMessage_ASC',
  errorMessage_DESC = 'errorMessage_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isActive_ASC = 'isActive_ASC',
  isActive_DESC = 'isActive_DESC',
  isImplicit_ASC = 'isImplicit_ASC',
  isImplicit_DESC = 'isImplicit_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  releaseAt_ASC = 'releaseAt_ASC',
  releaseAt_DESC = 'releaseAt_DESC',
  status_ASC = 'status_ASC',
  status_DESC = 'status_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export enum ScheduledReleaseStatus {
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  data: ScheduledReleaseUpdateManyInput;
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  create: ScheduledReleaseCreateInput;
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  data: ScheduledReleaseUpsertInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseWhereInput = {
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not?: InputMaybe<Scalars['String']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SnippetConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: SnippetWhereUniqueInput;
};

export type SnippetCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<SnippetLanguages>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SnippetCreateManyInlineInput = {
  connect?: InputMaybe<Array<SnippetWhereUniqueInput>>;
  create?: InputMaybe<Array<SnippetCreateInput>>;
};

export type SnippetCreateOneInlineInput = {
  connect?: InputMaybe<SnippetWhereUniqueInput>;
  create?: InputMaybe<SnippetCreateInput>;
};

export enum SnippetLanguages {
  CSS = 'CSS',
  HTML = 'HTML',
  JavaScript = 'JavaScript',
  LaTeX = 'LaTeX',
  Python = 'Python',
  Shell = 'Shell'
}

export type SnippetManyWhereInput = {
  AND?: InputMaybe<Array<SnippetWhereInput>>;
  NOT?: InputMaybe<Array<SnippetWhereInput>>;
  OR?: InputMaybe<Array<SnippetWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<SnippetLanguages>;
  language_in?: InputMaybe<Array<SnippetLanguages>>;
  language_not?: InputMaybe<SnippetLanguages>;
  language_not_in?: InputMaybe<Array<SnippetLanguages>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SnippetOrderByInput {
  content_ASC = 'content_ASC',
  content_DESC = 'content_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  language_ASC = 'language_ASC',
  language_DESC = 'language_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type SnippetUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<SnippetLanguages>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SnippetUpdateManyInlineInput = {
  connect?: InputMaybe<Array<SnippetConnectInput>>;
  create?: InputMaybe<Array<SnippetCreateInput>>;
  delete?: InputMaybe<Array<SnippetWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<SnippetWhereUniqueInput>>;
  set?: InputMaybe<Array<SnippetWhereUniqueInput>>;
  update?: InputMaybe<Array<SnippetUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<SnippetUpsertWithNestedWhereUniqueInput>>;
};

export type SnippetUpdateManyInput = {
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<SnippetLanguages>;
  title?: InputMaybe<Scalars['String']>;
};

export type SnippetUpdateManyWithNestedWhereInput = {
  data: SnippetUpdateManyInput;
  where: SnippetWhereInput;
};

export type SnippetUpdateOneInlineInput = {
  connect?: InputMaybe<SnippetWhereUniqueInput>;
  create?: InputMaybe<SnippetCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SnippetUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<SnippetUpsertWithNestedWhereUniqueInput>;
};

export type SnippetUpdateWithNestedWhereUniqueInput = {
  data: SnippetUpdateInput;
  where: SnippetWhereUniqueInput;
};

export type SnippetUpsertInput = {
  create: SnippetCreateInput;
  update: SnippetUpdateInput;
};

export type SnippetUpsertWithNestedWhereUniqueInput = {
  data: SnippetUpsertInput;
  where: SnippetWhereUniqueInput;
};

export type SnippetWhereInput = {
  AND?: InputMaybe<Array<SnippetWhereInput>>;
  NOT?: InputMaybe<Array<SnippetWhereInput>>;
  OR?: InputMaybe<Array<SnippetWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<SnippetLanguages>;
  language_in?: InputMaybe<Array<SnippetLanguages>>;
  language_not?: InputMaybe<SnippetLanguages>;
  language_not_in?: InputMaybe<Array<SnippetLanguages>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type SnippetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum SocialLinks {
  email = 'email',
  github = 'github',
  linkedin = 'linkedin',
  npm = 'npm',
  twitter = 'twitter'
}

export enum SocialMedia {
  github = 'github',
  linkedin = 'linkedin',
  npm = 'npm',
  twitter = 'twitter',
  unsplash = 'unsplash'
}

export enum Stage {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  BASE = 'BASE',
  COMBINED = 'COMBINED',
  LOCALIZATION = 'LOCALIZATION'
}

export enum TechnologyCategories {
  APIs = 'APIs',
  CMS = 'CMS',
  Frameworks = 'Frameworks',
  Hardware = 'Hardware',
  Infrastructure = 'Infrastructure',
  Languages = 'Languages',
  Libraries = 'Libraries',
  Styling = 'Styling'
}

export type TechnologyConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: TechnologyWhereUniqueInput;
};

export type TechnologyCreateInput = {
  category?: InputMaybe<TechnologyCategories>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  portfolios?: InputMaybe<PortfolioCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TechnologyCreateManyInlineInput = {
  connect?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  create?: InputMaybe<Array<TechnologyCreateInput>>;
};

export type TechnologyCreateOneInlineInput = {
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  create?: InputMaybe<TechnologyCreateInput>;
};

export type TechnologyManyWhereInput = {
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<TechnologyCategories>;
  category_in?: InputMaybe<Array<TechnologyCategories>>;
  category_not?: InputMaybe<TechnologyCategories>;
  category_not_in?: InputMaybe<Array<TechnologyCategories>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_ends_with?: InputMaybe<Scalars['String']>;
  link_in?: InputMaybe<Array<Scalars['String']>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  link_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  portfolios_every?: InputMaybe<PortfolioWhereInput>;
  portfolios_none?: InputMaybe<PortfolioWhereInput>;
  portfolios_some?: InputMaybe<PortfolioWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TechnologyOrderByInput {
  category_ASC = 'category_ASC',
  category_DESC = 'category_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  link_ASC = 'link_ASC',
  link_DESC = 'link_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type TechnologyUpdateInput = {
  category?: InputMaybe<TechnologyCategories>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  portfolios?: InputMaybe<PortfolioUpdateManyInlineInput>;
};

export type TechnologyUpdateManyInlineInput = {
  connect?: InputMaybe<Array<TechnologyConnectInput>>;
  create?: InputMaybe<Array<TechnologyCreateInput>>;
  delete?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  set?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  update?: InputMaybe<Array<TechnologyUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<TechnologyUpsertWithNestedWhereUniqueInput>>;
};

export type TechnologyUpdateManyInput = {
  category?: InputMaybe<TechnologyCategories>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TechnologyUpdateManyWithNestedWhereInput = {
  data: TechnologyUpdateManyInput;
  where: TechnologyWhereInput;
};

export type TechnologyUpdateOneInlineInput = {
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  create?: InputMaybe<TechnologyCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>;
};

export type TechnologyUpdateWithNestedWhereUniqueInput = {
  data: TechnologyUpdateInput;
  where: TechnologyWhereUniqueInput;
};

export type TechnologyUpsertInput = {
  create: TechnologyCreateInput;
  update: TechnologyUpdateInput;
};

export type TechnologyUpsertWithNestedWhereUniqueInput = {
  data: TechnologyUpsertInput;
  where: TechnologyWhereUniqueInput;
};

export type TechnologyWhereInput = {
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<TechnologyCategories>;
  category_in?: InputMaybe<Array<TechnologyCategories>>;
  category_not?: InputMaybe<TechnologyCategories>;
  category_not_in?: InputMaybe<Array<TechnologyCategories>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_ends_with?: InputMaybe<Scalars['String']>;
  link_in?: InputMaybe<Array<Scalars['String']>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  link_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  portfolios_every?: InputMaybe<PortfolioWhereInput>;
  portfolios_none?: InputMaybe<PortfolioWhereInput>;
  portfolios_some?: InputMaybe<PortfolioWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type TechnologyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  locale: Locale;
  stages: Array<Stage>;
};

export type UserConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: UserWhereUniqueInput;
};

export type UserCreateManyInlineInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export enum UserKind {
  MEMBER = 'MEMBER',
  PAT = 'PAT',
  PUBLIC = 'PUBLIC',
  WEBHOOK = 'WEBHOOK'
}

export type UserManyWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  kind_in?: InputMaybe<Array<UserKind>>;
  kind_not?: InputMaybe<UserKind>;
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  picture_contains?: InputMaybe<Scalars['String']>;
  picture_ends_with?: InputMaybe<Scalars['String']>;
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  picture_not?: InputMaybe<Scalars['String']>;
  picture_not_contains?: InputMaybe<Scalars['String']>;
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isActive_ASC = 'isActive_ASC',
  isActive_DESC = 'isActive_DESC',
  kind_ASC = 'kind_ASC',
  kind_DESC = 'kind_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  picture_ASC = 'picture_ASC',
  picture_DESC = 'picture_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  kind_in?: InputMaybe<Array<UserKind>>;
  kind_not?: InputMaybe<UserKind>;
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  picture_contains?: InputMaybe<Scalars['String']>;
  picture_ends_with?: InputMaybe<Scalars['String']>;
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  picture_not?: InputMaybe<Scalars['String']>;
  picture_not_contains?: InputMaybe<Scalars['String']>;
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  AND = 'AND',
  NOT = 'NOT',
  OR = 'OR',
  contains = 'contains',
  contains_all = 'contains_all',
  contains_none = 'contains_none',
  contains_some = 'contains_some',
  ends_with = 'ends_with',
  eq = 'eq',
  eq_not = 'eq_not',
  gt = 'gt',
  gte = 'gte',
  in = 'in',
  lt = 'lt',
  lte = 'lte',
  not_contains = 'not_contains',
  not_ends_with = 'not_ends_with',
  not_in = 'not_in',
  not_starts_with = 'not_starts_with',
  relational_every = 'relational_every',
  relational_none = 'relational_none',
  relational_single = 'relational_single',
  relational_some = 'relational_some',
  search = 'search',
  starts_with = 'starts_with'
}

export enum _MutationInputFieldKind {
  enum = 'enum',
  relation = 'relation',
  richText = 'richText',
  richTextWithEmbeds = 'richTextWithEmbeds',
  scalar = 'scalar',
  union = 'union',
  virtual = 'virtual'
}

export enum _MutationKind {
  create = 'create',
  delete = 'delete',
  deleteMany = 'deleteMany',
  publish = 'publish',
  publishMany = 'publishMany',
  unpublish = 'unpublish',
  unpublishMany = 'unpublishMany',
  update = 'update',
  updateMany = 'updateMany',
  upsert = 'upsert'
}

export enum _OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export enum _RelationInputCardinality {
  many = 'many',
  one = 'one'
}

export enum _RelationInputKind {
  create = 'create',
  update = 'update'
}

export enum _RelationKind {
  regular = 'regular',
  union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  base = 'base',
  combined = 'combined',
  localization = 'localization'
}

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  SCALAR = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  OBJECT = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  INTERFACE = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  UNION = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  ENUM = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  INPUT_OBJECT = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  LIST = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NON_NULL = 'NON_NULL'
}

export type GetAllPortfoliosWithSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPortfoliosWithSlugQuery = { __typename?: 'Query', portfolios: Array<{ __typename?: 'Portfolio', slug: string }> };

export type GetPortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortfoliosQuery = { __typename?: 'Query', portfolios: Array<{ __typename?: 'Portfolio', id: string, title?: string | null | undefined, slug: string, date?: any | null | undefined, description?: string | null | undefined, featured?: boolean | null | undefined, categories: Array<PortfolioCategories>, coverImage?: { __typename?: 'Asset', handle: string, width?: number | null | undefined, height?: number | null | undefined, url: string } | null | undefined, screenshot?: { __typename?: 'Asset', handle: string, width?: number | null | undefined, height?: number | null | undefined, url: string } | null | undefined }> };

export type GetPortfolioCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortfolioCategoriesQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', enumValues?: Array<{ __typename?: '__EnumValue', name: string }> | null | undefined } | null | undefined };

export type GetPortfolioQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPortfolioQuery = { __typename?: 'Query', portfolio?: { __typename?: 'Portfolio', id: string, markdown?: string | null | undefined, title?: string | null | undefined, description?: string | null | undefined, github: Array<string>, website?: string | null | undefined, coders: Array<string>, npm?: string | null | undefined, technologies: Array<{ __typename?: 'Technology', name?: string | null | undefined, link?: string | null | undefined, category?: TechnologyCategories | null | undefined, image?: { __typename?: 'Asset', handle: string, width?: number | null | undefined, height?: number | null | undefined, url: string } | null | undefined }> } | null | undefined };

export type GetSnippetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSnippetsQuery = { __typename?: 'Query', snippets: Array<{ __typename?: 'Snippet', title?: string | null | undefined, language?: SnippetLanguages | null | undefined, description?: string | null | undefined, slug?: string | null | undefined }> };

export type GetAllSnippetsWithSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSnippetsWithSlugQuery = { __typename?: 'Query', snippets: Array<{ __typename?: 'Snippet', slug?: string | null | undefined }> };

export type GetSnippetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSnippetLanguagesQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', enumValues?: Array<{ __typename?: '__EnumValue', name: string }> | null | undefined } | null | undefined };

export type GetTechnologyCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTechnologyCategoriesQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', enumValues?: Array<{ __typename?: '__EnumValue', name: string }> | null | undefined } | null | undefined };

export type GetSnippetQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetSnippetQuery = { __typename?: 'Query', snippet?: { __typename?: 'Snippet', title?: string | null | undefined, description?: string | null | undefined, content?: string | null | undefined } | null | undefined };


export const GetAllPortfoliosWithSlug = gql`
    query getAllPortfoliosWithSlug {
  portfolios {
    slug
  }
}
    `;
export const GetPortfolios = gql`
    query getPortfolios {
  portfolios(orderBy: date_DESC) {
    id
    title
    slug
    date
    description
    featured
    categories
    coverImage {
      handle
      width
      height
      url
    }
    screenshot {
      handle
      width
      height
      url
    }
  }
}
    `;
export const GetPortfolioCategories = gql`
    query getPortfolioCategories {
  __type(name: "PortfolioCategories") {
    enumValues {
      name
    }
  }
}
    `;
export const GetPortfolio = gql`
    query getPortfolio($slug: String!) {
  portfolio(where: {slug: $slug}) {
    id
    markdown
    title
    description
    technologies {
      name
      image {
        handle
        width
        height
        url
      }
      link
      category
    }
    github
    website
    coders
    npm
  }
}
    `;
export const GetSnippets = gql`
    query getSnippets {
  snippets {
    title
    language
    description
    slug
  }
}
    `;
export const GetAllSnippetsWithSlug = gql`
    query getAllSnippetsWithSlug {
  snippets {
    slug
  }
}
    `;
export const GetSnippetLanguages = gql`
    query getSnippetLanguages {
  __type(name: "SnippetLanguages") {
    enumValues {
      name
    }
  }
}
    `;
export const GetTechnologyCategories = gql`
    query getTechnologyCategories {
  __type(name: "TechnologyCategories") {
    enumValues {
      name
    }
  }
}
    `;
export const GetSnippet = gql`
    query getSnippet($slug: String!) {
  snippet(where: {slug: $slug}) {
    title
    description
    content
  }
}
    `;

export const GetAllPortfoliosWithSlugDocument = gql`
    query getAllPortfoliosWithSlug {
  portfolios {
    slug
  }
}
    `;
export const GetPortfoliosDocument = gql`
    query getPortfolios {
  portfolios(orderBy: date_DESC) {
    id
    title
    slug
    date
    description
    featured
    categories
    coverImage {
      handle
      width
      height
      url
    }
    screenshot {
      handle
      width
      height
      url
    }
  }
}
    `;
export const GetPortfolioCategoriesDocument = gql`
    query getPortfolioCategories {
  __type(name: "PortfolioCategories") {
    enumValues {
      name
    }
  }
}
    `;
export const GetPortfolioDocument = gql`
    query getPortfolio($slug: String!) {
  portfolio(where: {slug: $slug}) {
    id
    markdown
    title
    description
    technologies {
      name
      image {
        handle
        width
        height
        url
      }
      link
      category
    }
    github
    website
    coders
    npm
  }
}
    `;
export const GetSnippetsDocument = gql`
    query getSnippets {
  snippets {
    title
    language
    description
    slug
  }
}
    `;
export const GetAllSnippetsWithSlugDocument = gql`
    query getAllSnippetsWithSlug {
  snippets {
    slug
  }
}
    `;
export const GetSnippetLanguagesDocument = gql`
    query getSnippetLanguages {
  __type(name: "SnippetLanguages") {
    enumValues {
      name
    }
  }
}
    `;
export const GetTechnologyCategoriesDocument = gql`
    query getTechnologyCategories {
  __type(name: "TechnologyCategories") {
    enumValues {
      name
    }
  }
}
    `;
export const GetSnippetDocument = gql`
    query getSnippet($slug: String!) {
  snippet(where: {slug: $slug}) {
    title
    description
    content
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllPortfoliosWithSlug(variables?: GetAllPortfoliosWithSlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPortfoliosWithSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPortfoliosWithSlugQuery>(GetAllPortfoliosWithSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPortfoliosWithSlug');
    },
    getPortfolios(variables?: GetPortfoliosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPortfoliosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPortfoliosQuery>(GetPortfoliosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPortfolios');
    },
    getPortfolioCategories(variables?: GetPortfolioCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPortfolioCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPortfolioCategoriesQuery>(GetPortfolioCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPortfolioCategories');
    },
    getPortfolio(variables: GetPortfolioQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPortfolioQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPortfolioQuery>(GetPortfolioDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPortfolio');
    },
    getSnippets(variables?: GetSnippetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSnippetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSnippetsQuery>(GetSnippetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSnippets');
    },
    getAllSnippetsWithSlug(variables?: GetAllSnippetsWithSlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllSnippetsWithSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllSnippetsWithSlugQuery>(GetAllSnippetsWithSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllSnippetsWithSlug');
    },
    getSnippetLanguages(variables?: GetSnippetLanguagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSnippetLanguagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSnippetLanguagesQuery>(GetSnippetLanguagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSnippetLanguages');
    },
    getTechnologyCategories(variables?: GetTechnologyCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTechnologyCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTechnologyCategoriesQuery>(GetTechnologyCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTechnologyCategories');
    },
    getSnippet(variables: GetSnippetQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSnippetQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSnippetQuery>(GetSnippetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSnippet');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;