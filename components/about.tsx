import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>
            I'm a dynamic Software Engineer with expertise in frontend and backend solutions, recognized for
            successfully delivering responsive UI/UX designs and automating message queues. I have strong analytical
            problem-solving abilities, complemented by a collaborative approach that consistently drives successful
            project outcomes.
          </p>

          <p>
            I'm proficient in React and Golang, contributing to high-impact product initiatives. My career goals include
            leveraging technical skills to innovate in software development and enhance user experiences.
          </p>

          <p>
            Based in Karnataka, India, I'm fluent in multiple languages including English, Hindi, Marathi, Kannada  and
            Tamil which helps me collaborate effectively with diverse teams.
          </p>

          <div className="pt-6 flex justify-center">
            <Button asChild className="gap-2">
              <a href="/Ashish_Jadhav_Full_Stack.pdf" download="Ashish_Jadhav_Full_Stack.pdf">
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
