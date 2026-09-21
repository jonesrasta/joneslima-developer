export interface EducationItem {
  id: string;
  number: string;
  institution: string;
  course: string;
  year: string;
  logo: string;
}

export const education: EducationItem[] = [
  {
    id: "01",
    number: "01",
    institution: "Institution Name",
    course: "Software Engineering",
    year: "2021",
    logo: "/education/fiap.svg",
  },
  {
    id: "02",
    number: "02",
    institution: "Institution Name",
    course: "Back-end Developer",
    year: "2022",
    logo: "/education/impacta.svg",
  },
  {
    id: "03",
    number: "03",
    institution: "Institution Name",
    course: "Blockchain Developer",
    year: "2022",
    logo: "/education/dio.svg",
  },
  {
    id: "04",
    number: "04",
    institution: "Institution Name",
    course: "Product Design",
    year: "2023",
    logo: "/education/alura.svg",
  },
  {
    id: "05",
    number: "05",
    institution: "Institution Name",
    course: "Mobile Developer",
    year: "2023",
    logo: "/education/santander.svg",
  },
  {
    id: "06",
    number: "06",
    institution: "Institution Name",
    course: "Desenvolvimento Web",
    year: "2023",
    logo: "/education/univesp.svg",
  },
];
