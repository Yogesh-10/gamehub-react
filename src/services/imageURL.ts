//the default size of image coming from API is having more resolution, its okay to show a big image in a full screen. but since
//we are rendering inside a card, we are reducing resolution by cropping it to 600/400 resolution

//Default URL rawg uses internally to get image - https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
//We can modify this url to change the crop size by adding crop/600/400 - https://api.rawg.io/media/crop/600/400/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
import noImage from '../assets/no-image-placeholder.webp';
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
