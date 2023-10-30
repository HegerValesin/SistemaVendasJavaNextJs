import { Alert, Alerts } from "Components/message/Alerts";
import SessionLiberUseProdutos from "app/api/util/sessionLiberUseProduts";
import { ReactNode } from "react";

interface CardPageProps {
    titulo?: string;
    children?: ReactNode;
    mensagens?: Array<Alert>;
}
export default function CardPage({titulo, children, mensagens}: CardPageProps) {
    return(
        <SessionLiberUseProdutos allowedRoles={['viewer', 'admin']}>
            <div className="m-4 overflow-y-auto">
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg p-6 relative">
                        <p className="text-xl font-semibold mb-2">{titulo}</p>
                    </div>
                    <div className="bg-white shadow-md mt-2 rounded-lg p-6 overflow-y-auto">
                        {mensagens && 
                            mensagens.map( (msg, index) => <Alerts key={index} {...msg} />)
                        }     
                        {children}
                    </div>
                </div>
            </div>
            <div className="m-5 h-1 w-full">  </div>
        </SessionLiberUseProdutos>
    )
}