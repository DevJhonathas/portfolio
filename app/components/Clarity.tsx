import Script from "next/script";

<<<<<<< HEAD
const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;
=======
const KEYCLARITY = process.env.KEYCLARITY || "";
>>>>>>> 6d63f11 (feat: adiciona Microsoft Clarity ao portfólio)

export default function Clarity() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
<<<<<<< HEAD
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
=======
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${KEYCLARITY}");
>>>>>>> 6d63f11 (feat: adiciona Microsoft Clarity ao portfólio)
      `}
    </Script>
  );
}