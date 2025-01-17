import dayjs from "dayjs";

export default function formatDate(type:string, dateTxt:string) {
    const date = new Date(dateTxt);
    if(type === "time"){
        return dayjs(date).format("HH:mm")
    }
    
    return dayjs(date).format("DD/MM");
}