export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashish Jadhav",
          url: "https://ashishjadhav.com",
          email: "ashishbox13@gmail.com",
          telephone: "+91-8073392045",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Karnataka",
            addressCountry: "India"
          },
          sameAs: [
            "https://github.com/ashishjadhav",
            "https://linkedin.com/in/ashishjadhav"
          ],
          jobTitle: "Web Developer",
          description: "Full-stack web developer specializing in React, Next.js, and modern web technologies"
        })
      }}
    />
  )
}
