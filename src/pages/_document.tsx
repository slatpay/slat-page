import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>SlatPay - Your Reliable Payment Solution</title>
        {/* Metatags padrão */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="description"
          content="SlatPay offers seamless payment solutions for your business. Secure, reliable, and user-friendly."
        />
        <meta
          name="keywords"
          content="payment, online payment, payment gateway, secure payment, business payment"
        />
        <link rel="icon" href="/icon.ico" />
        {/* Open Graph Metatags (para o Facebook) */}
        <meta
          property="og:title"
          content="SlatPay - Your Reliable Payment Solution"
        />
        <meta
          property="og:description"
          content="SlatPay offers seamless payment solutions for your business. Secure, reliable, and user-friendly."
        />
        <meta property="og:image" content="/favicon.png" />
        {/* Imagem que você deseja mostrar quando compartilhada */}
        <meta property="og:url" content="https://slatpay.com" />
        {/* URL do site */}
        <meta property="og:type" content="website" />
        {/* Metatags Twitter (para o Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SlatPay - Your Reliable Payment Solution"
        />
        <meta
          name="twitter:description"
          content="SlatPay offers seamless payment solutions for your business. Secure, reliable, and user-friendly."
        />
        <meta name="twitter:image" content="/favicon.png" />
        {/* Imagem que você deseja mostrar quando compartilhada */}
        <meta name="twitter:site" content="@slatpay" />
        {/* Seu identificador do Twitter */}
        <meta name="twitter:creator" content="@slatpay" />
        {/* Seu identificador do Twitter */}
        <meta
          name="keywords"
          content="pagamento, serviço de pagamento, slatpay, soluções de pagamento"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
