'use client'
import { useSession } from 'next-auth/react';
import { ReactNode } from 'react'

interface SessionLiberUseProdutosProps {
  children: ReactNode;
  allowedRoles: string[];
}

const SessionLiberUseProdutos: React.FC<SessionLiberUseProdutosProps> = ({ allowedRoles, children }) => {
  const { data: session, status }: any = useSession();
 // const session: any = await getServerSession(authOptions);

  if (status === 'loading') {
    // Se a sessão ainda está sendo carregada, mostre um indicador de carregamento ou algo assim
    return <div>Carregando...</div>;
  }

  if(session && (session.roles?.includes("viewer") || session.roles?.includes("admin"))){
    // Se o usuário tiver as permissões necessárias, renderize o conteúdo da página
  return <div className='w-full h-full'>{children}</div>;
  }

  return <div>Voce não tem permisão...</div>;
  
};

export default SessionLiberUseProdutos;
