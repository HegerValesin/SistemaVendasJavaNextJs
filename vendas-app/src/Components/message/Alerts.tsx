interface AlertsProps {
    type: string;
    field?: string;
    texto: string;
}

export interface Alert {
    type: string;
    field?: string;
    texto: string;
}

export const Alerts: React.FC<AlertsProps> = ({type, field, texto}) => {
   if(type === "success"){
    return (
        <div className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4`} role="alert">
            <p>
                {field &&`${field} : `} {`${texto}`}
            </p>
        </div>
    )}

    if(type === "warning"){
    return (
        <div className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4`} role="alert">
            <p>
                {field && `${field} : `} {`${texto}`}
            </p>
        </div>
    )}
    if(type === "danger") {
    return (
        <div className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 flex`} role="alert">
            <p className="font-bold mr-1">
                {field && `${field} :`} </p>{`${texto}`}
        </div>
    )}
}