'use client'

import { PhotoProvider, PhotoView } from 'react-photo-view'

export function MyPhotoView({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <img src={src} alt={alt} width={width} height={height} className="cursor-pointer" />
      </PhotoView>
    </PhotoProvider>
  )
}
