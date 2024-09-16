export default async function fetchPlants() {
  const response = await fetch("http://127.0.0.1:5000/api/plants");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const plants = await response.json();
  console.log(plants);
  return plants;
}
