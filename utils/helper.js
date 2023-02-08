export function filterData(searchText, resturantList) {
  return resturantList.filter((resturant) =>
    resturant.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}
