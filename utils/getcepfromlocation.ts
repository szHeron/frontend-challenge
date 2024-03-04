import api_geolocation from "@/services/api_geolocation";

export async function getCepFromLocation(): Promise<string | null> {
    try {
      if ('geolocation' in navigator) {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
  
        const { latitude, longitude } = position.coords;
        const response = await api_geolocation.get(`/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`)
  
        const data = response.data.results;
        const cep = data[0]?.address_components.find((component: any) =>
          component.types.includes('postal_code')
        )?.long_name;
  
        return cep || null;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };