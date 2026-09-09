export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashish S Jadhav",
          url: "https://ashishjadhav.com",
          email: "ashishbox13@gmail.com",
          telephone: "+91-8073392045",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Karnataka",
            addressCountry: "India"
          },
          sameAs: [
            "https://github.com/Ashishjadhav-dev",
            "https://linkedin.com/in/ashish-s-jadhav"
          ],
          jobTitle: "Senior Frontend Engineer",
          description: "Frontend Engineer specializing in React, Next.js, TypeScript and enterprise SaaS interfaces"
        })
      }}
    />
  )
}
