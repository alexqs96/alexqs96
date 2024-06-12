import { Children, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function Certificates(props: React.ComponentProps<"section">) {
  const { className, ...restProps } = props;
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(-1);

  const certificates = [
    { src: "/img/courses/google_it_support.webp" },
    { src: "/img/courses/digital_house_fullstack.webp" },
    {
      src: "/img/courses/Certificado-Desarrollo-Web-con-HTML-EducacionIT.webp",
    },
    {
      src: "/img/courses/Certificado-Git_-Desarrollo-Colaborativo-EducacionIT.webp",
    },
    {
      src: "/img/courses/Certificado-Introduccion-al-Paradigma-de-Objetos-EducacionIT.webp",
    },
    {
      src: "/img/courses/Certificado-Javascript-Desarrollador-Avanzado-EducacionIT.webp",
    },
    { src: "/img/courses/Certificado-Javascript-desde-cero-EducacionIT.webp" },
    {
      src: "/img/courses/Certificado-Maquetador-Web-Avanzado-EducacionIT.webp",
    },
    { src: "/img/courses/Certificado-MongoDB-Fundamentos-EducacionIT.webp" },
  ];

  return (
    <section
      className={className}
      {...restProps}>
      <h1 className="text-2xl font-bold pb-1 border-b-6 border-main w-fit mb-2">
        Certificates
      </h1>

      <Lightbox
        open={open}
        index={current}
        close={() => setOpen(false)}
        slides={[...certificates]}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-5">
        {Children.toArray(
          certificates.map((e, i) => (
            <img
              onClick={() => {
                setCurrent(i), setOpen(true);
              }}
              className="cursor-pointer aspect-[16/12.25] rounded border transition-transform duration-200 hover:-translate-y-1 overflow-hidden"
              src={e.src}
              width={256}
              height={256}
              alt={e.src}
            />
          )),
        )}
      </div>
    </section>
  );
}
