const filePath = path.join(__dirname, 'data', 'restaurants.json');

function getStoredRestorants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storedRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
}
