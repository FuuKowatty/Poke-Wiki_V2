import { favItem } from 'components/CardInterface/CardInterface';

export function handleAddFavorite(type: string, name: string) {
  const favArr = JSON.parse(localStorage.getItem('favorite') as string) || [];
  const favNames = favArr.map((fav: favItem) => fav.name)
  if(favNames.indexOf(name) === -1) {
    const newFav = {
        type: type,
        name: name,
      }
      localStorage.setItem('favorite', JSON.stringify([...favArr, newFav]))
  } else {
    const filteredFavArr = favArr.filter((fav: favItem) => fav.name !== name);
    localStorage.setItem('favorite', JSON.stringify(filteredFavArr));
  }

}
