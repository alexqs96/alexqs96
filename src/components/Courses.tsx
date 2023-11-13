import Image from "next/image";
import { Children } from "react";

export default function Courses() {
  const certificates = [
    "google_it_support.webp",
    "digital_house_fullstack.webp",
    "Certificado-Desarrollo-Web-con-HTML-EducacionIT.webp",
    "Certificado-Git_-Desarrollo-Colaborativo-EducacionIT.webp",
    "Certificado-Introduccion-al-Paradigma-de-Objetos-EducacionIT.webp",
    "Certificado-Javascript-Desarrollador-Avanzado-EducacionIT.webp",
    "Certificado-Javascript-desde-cero-EducacionIT.webp",
    "Certificado-Maquetador-Web-Avanzado-EducacionIT.webp",
    "Certificado-MongoDB-Fundamentos-EducacionIT.webp",
  ];

  return (
    <section>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-2 border-b-8 border-[#5b33ed] dark:border-[#6f48ff] w-fit">
        Courses
      </h2>

      <p className="text-2xl font-medium mb-6">
        My certificates from Coursera, Digital House and Educación IT.
      </p>

      <div className="flex items-center gap-2 flex-wrap mt-10">
        {Children.toArray(
          certificates.map((e) => (
            <a
              className="w-[96px] md:w-[156px] aspect-[16/12.25] rounded-md transition-transform duration-200 hover:-translate-y-1 overflow-hidden"
              href={"/img/courses/" + e}
              target="_blank"
            >
              <Image
                className="h-full w-full object-cover"
                src={"/img/courses/" + e}
                width={256}
                height={256}
                alt={e}
                unoptimized
                priority
              />
            </a>
          )),
        )}
      </div>
    </section>
  );
}
