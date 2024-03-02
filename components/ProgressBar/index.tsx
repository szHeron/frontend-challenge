interface IProgressbar {
    value: number,
    total: number
}

export default function Progressbar(props: IProgressbar){
    const progress = Math.floor((props.value / props.total) * 100)
    const bgColor = progress < 90?"bg-red-500":"bg-green-500"
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-medium text-zinc-500 text-sm">Força da senha</span>
                <span className="text-sm font-semibold dark:text-white">{props.value}/{props.total}</span>
            </div>
            <div className="w-full rounded-full h-2 bg-gray-700">
                <div className={`${bgColor} h-2 rounded-full`} style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}