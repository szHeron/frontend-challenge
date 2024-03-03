export default function CurrentLocationMap({lon,lat}: {lon: number, lat: number}){
    return (
        <div className="flex flex-row h-2/5 w-2/5 rounded-lg shadow-2xl p-2">
            <iframe className="w-full h-full" loading="lazy" src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&center=${lat},${lon}&zoom=12`}></iframe>
        </div>
    )
}

