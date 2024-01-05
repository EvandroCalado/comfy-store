export interface TypeProduct {
  data: Data2;
  meta: Meta;
}

interface Meta {}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  category: string;
  price: number;
  shipping: boolean;
  colors: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

interface Image {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}
