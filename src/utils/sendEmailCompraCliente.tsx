interface sendEmailCompraClienteProps {
  subtitulo: string;
  email: string;
  instagram: string;
  nome: string;
}

export const sendEmailCompraCliente = async ({
  subtitulo,
  email,
  instagram,
  nome,
}: sendEmailCompraClienteProps) => {
  try {
    const response = await fetch(
      "https://teko-bag.com/api/email-compra-cliente",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subtitulo,
          email,
          instagram,
          nome,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao enviar o email");
    }

    const data = await response.json();
    console.log("Email enviado com sucesso:", data);
  } catch (error) {
    console.error("Erro ao chamar a API de email:", error);
  }
};
