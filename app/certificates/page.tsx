import React from "react";
import "./certificates.css";
import Image from "next/image";
import Link from "next/link";

const certificates = [
  {
    image: "/assets/akhir.png",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/Baru.jpg",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/akhir.png",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/akhir.png",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/Baru.jpg",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/akhir.png",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/akhir.png",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/Baru.jpg",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/akhir.png",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
];

const CertificatesPage = () => {
  return (
    <div className="certificates-container">
      <h1 className="certificates-title">Certificates</h1>
      <div className="w-20 md:w-32 h-1.5 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-10"></div>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-item">
            <div className="certificate-card">
              <div className="certificate-image-container">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={500}
                  height={300}
                  className="certificate-image"
                />
              </div>
              <div className="certificate-content">
                <h2 className="certificate-card-title">| {cert.title}</h2>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-description">{cert.description}</p>
              </div>
            </div>
            <Link href={cert.link} className="credential-button">
              Show Credential
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="link-icon"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
