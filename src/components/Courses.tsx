import Image from "next/image"
import { Children } from "react"

export default function Courses(){
  const certificates = [
    "google_it_support.webp",
    "Certificado-Desarrollo-Web-con-HTML-EducaciónIT.webp",
    "Certificado-Git_-Desarrollo-Colaborativo-EducaciónIT.webp",
    "Certificado-Introducción-al-Paradigma-de-Objetos-EducaciónIT.webp",
    "Certificado-Javascript-Desarrollador-Avanzado-EducaciónIT.webp",
    "Certificado-Javascript-desde-cero-EducaciónIT.webp",
    "Certificado-Maquetador-Web-Avanzado-EducaciónIT.webp",
    "Certificado-MongoDB-Fundamentos-EducaciónIT.webp",
  ]

  return(
    <section>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-2 border-b-8 border-[#5b33ed] dark:border-[#6f48ff] w-fit">
        Courses
      </h2>

      <p className="text-2xl font-medium mb-6">
        My certificates from Educación IT and Coursera.
      </p>

      <div className="flex items-center gap-2 flex-wrap mt-10">
        {
          Children.toArray(
            certificates.map(e => (
              <a
                className="block h-full w-full max-w-[96px] md:max-w-[156px] object-cover rounded-lg border transition-transform duration-200 hover:-translate-y-1 overflow-hidden"
                href={"/img/courses/"+e}
                target="_blank"
              >
                <Image
                  className="w-full h-full"
                  src={"/img/courses/"+e}
                  width={256}
                  height={256}
                  alt={e}
                  unoptimized
                  priority
                />
              </a>
            ))
          )
        }
      </div>
    </section>
  )
}