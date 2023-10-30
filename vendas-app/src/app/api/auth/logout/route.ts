import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { getIdToken } from "app/api/util/sessionTokenAccessor";

export async function GET() {
    const session = await getServerSession(authOptions);
    
    if (session) {
        const idtoken = await getIdToken();
        //isso desconectará o usuário do lado do Keycloak
        var url = `${process.env.END_SESSION_URL}?id_token_hint=${idtoken}&post_logout_redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL || "http://localhost:3000")}`;

        try {
            const resp = await fetch(url, { method: "GET" });   
        } catch (err) {
            console.log(err);
            return new Response({ status: 500 }as any)
        }
    }
    return new Response({ status: 200 }as any)
}