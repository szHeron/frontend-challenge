export default function formatDate(type:string, dateTxt:string) {

    const date = new Date(dateTxt);
    if(type === "time"){
        const formattedHours = date.getHours().toString().padStart(2, "0");
        const formattedMinutes = date.getMinutes().toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes}`;
    }

    const formattedDay = date.getDate().toString().padStart(2, "0");
    const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");
    
    return `${formattedDay}/${formattedMonth}`;
}