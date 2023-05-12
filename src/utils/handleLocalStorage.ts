export function handleAddFavorite(type:string, name : string) {
    const fav = JSON.parse(localStorage.getItem('favorite') as string) || [];
    const newFav = {
      type: type,
      name: name
    }
    localStorage.setItem('favorite', JSON.stringify([...fav, newFav]))
   }