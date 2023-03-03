export interface Image {
  id: number,
  pageURL: string ,
  type: string,
  tags: string,
  previewURL: string,
  previewWidth: number,
  previewHeight: number,
  webformatURL: string,
  webformatWidth: number,
  webformatHeight: number,

  userImageURL: string

}

export interface ImageListFromApi {
  hits: Image[];
}
