
//  cf: https://www.flickr.com/services/api/flickr.people.getPhotos.html
const flickrUrl = "https://www.flickr.com/services/rest"
const method = "flickr.people.getPhotos"
const userId = "highwide728"
const safeSearch = 1
const contentType = 1 // for photos only.
const privacyFilter = 1 // public photos
const perPage = 500
const sizeSuffix = 'n' // Longest edge (px) is 320

type FlickrGetPhotosResponse = {
  photos: FlickrPhotos;
}

type FlickrPhotos = {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: FlickrPhoto[];
}

type FlickrPhoto = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export async function getFlickrPhotoUrls(size: number): Promise<string[]> {
  const apiKey = process.env.FLICKR_API_KEY
  if (!apiKey) {
    return []
  }

  const page = Math.floor(Math.random() * (1000 / perPage))
  const url = encodeURI(
    `${flickrUrl}?method=${method}&api_key=${apiKey}&user_id=${userId}&safe_search=${safeSearch}&content_type=${contentType}&privacy_filter=${privacyFilter}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`
  )

  const res = await fetch(url)
  const result: FlickrGetPhotosResponse = await res.json()
  const photoCandidates = result.photos.photo
  let photos = []
  for(let i = 0; i < size; i++) {
    photos.push(
      photoCandidates.splice(Math.floor(Math.random() * photoCandidates.length), 1)[0]
    )
  }

  const urls = photos.map(({ id, secret, server }) => {
    // cf: https://www.flickr.com/services/api/misc.urls.html
    return `https://live.staticflickr.com/${server}/${id}_${secret}_${sizeSuffix}.jpg`
  })
  return urls
}
