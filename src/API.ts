// NASA API
const count: number = 10;
const demoKey: string = 'DEMO_KEY'; // can use this instead of key. Has 30 requests/day
const apiKey: string = 'tWJ3fobYvlnWjF6Gcckh7pCp45jjemC31VBC057C'; // 1000 requests/day
const apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
const proxyUrl: string = 'https://whispering-reef-88562.herokuapp.com/';
const proxiedApiUrl: string = proxyUrl + apiUrl;

// Get 10 Images from NASA API
export async function fetchAPIPictures(): Promise<NasaImageData[]> {
  try {
    const response = await fetch(proxiedApiUrl);
    const data: NasaImageData[] = await response.json();
    return data;
  } catch (err) {
    // Catch error here
    console.log('error fetching api', err);
  }
}
