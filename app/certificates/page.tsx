import React from "react";
import "./certificates.css"; // Pastikan file CSS ini terhubung
import Image from "next/image";
import Link from "next/link";

const certificates = [
  // ... (data sertifikat Anda tetap sama, tidak perlu diubah)
  {
    image: "/assets/Foto/DSC06372.jpg",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/Foto/DSC06372.jpg",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  {
    image: "/assets/Foto/DSC06372.jpg",
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
    image: "/assets/Baru.jpg",
    title: "Photography",
    issuer: "Google",
    description: "lorem ipsum dolor sit amet",
    link: "#",
  },
  // ... sisa data
];

const CertificatesPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <main>
        <div className="certificates-container">
          {/* DIUBAH: Menggunakan kelas .project-title dan kelas warna teks */}
          <h1 className="certificates-title text-black dark:text-white">
            Certificates
          </h1>

          <div className="w-20 md:w-32 h-1.5 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-10"></div>

          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-image-wrapper">
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
                  <Link href={cert.link} className="credential-button">
                    Show Credential
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="link-icon"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l-1.72 1.72" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CertificatesPage;
