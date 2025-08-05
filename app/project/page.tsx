"use client";

import React, { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import "./project.css";

interface Image {
  src: string;
  alt: string;
  title: string;
  description: string;
}

//ubah disini untuk yang cars
const images: Image[] = [
  {
    src: "/assets/Baru.jpg",
    alt: "Car 1",
    title: "Car 1",
    description: "This is the first car.",
  },
  {
    src: "/assets/poto.jpg",
    alt: "Car 2",
    title: "Car 2",
    description: "This is the second car.",
  },
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 3",
    title: "Car 3",
    description: "This is the third car.",
  },
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 3",
    title: "Car 3",
    description: "This is the third car.",
  },
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 3",
    title: "Car 3",
    description: "This is the third car.",
  },
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 3",
    title: "Car 3",
    description: "This is the third car.",
  },
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 3",
    title: "Car 3",
    description: "This is the third car.",
  },
];

//ubah disini untuk yang street
const street: Image[] = [
  {
    src: "/assets/Baru.jpg",
    alt: "Car 1",
    title: "Car 1",
    description: "This is the first car.",
  },
  {
    src: "/assets/poto.jpg",
    alt: "Car 2",
    title: "Car 2",
    description: "This is the second car.",
  },
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 3",
    title: "Car 3",
    description: "This is the third car.",
  },
];

//ubah disini untuk yang apaya
const apaya: Image[] = [
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 1",
    title: "Car 1",
    description: "This is the first car.",
  },
  {
    src: "/assets/poto.jpg",
    alt: "Car 2",
    title: "Car 2",
    description: "This is the second car.",
  },
  {
    src: "/assets/Foto/DSC00106.JPG",
    alt: "Car 3",
    title: "Car 3",
    description: "This is the third car.",
  },
];

const ProjectPage = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <main className="project-page">
        <h1 className="project-title text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-black dark:text-white">
          Project
        </h1>
        <div className="w-20 md:w-32 h-1.5 bg-[#5086F2] rounded-full mx-auto mb-6 md:mb-10"></div>
        <section className="photography-section">
          <h2 className="flex items-center text-black dark:text-white">
            <span className="border-l-4 rounded-full border-black dark:border-white h-10 mr-5"></span>
            Photography
          </h2>

          <h3 className="text-black dark:text-white">Cars</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                    {image.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="flex justify-end mt-8">
            <a
              href="#" // Ganti dengan link Google Drive Anda
              target="_blank"
              rel="noopener noreferrer"
              className="get-more-button"
            >
              Get More <span className="arrow">{`->`}</span>
            </a>
          </div>

          <h3 className="text-black dark:text-white">Street</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {street.map((image, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                    {image.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="flex justify-end mt-8">
            <a
              href="#" // Ganti dengan link Google Drive Anda
              target="_blank"
              rel="noopener noreferrer"
              className="get-more-button"
            >
              Get More <span className="arrow">{`->`}</span>
            </a>
          </div>

          <h3 className="text-black dark:text-white">Cars</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {apaya.map((image, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                    {image.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="flex justify-end mt-8">
            <a
              href="#" // Ganti dengan link Google Drive Anda
              target="_blank"
              rel="noopener noreferrer"
              className="get-more-button"
            >
              Get More <span className="arrow">{`->`}</span>
            </a>
          </div>
        </section>

        <section className="design-section">
          <h2 className="flex items-center text-black dark:text-white">
            <span className="border-l-4 rounded-full border-black dark:border-white h-10 mr-5"></span>
            Design
          </h2>

          <h3 className="text-black dark:text-white">Cars</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                    {image.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="flex justify-end mt-8">
            <a
              href="#" // Ganti dengan link Google Drive Anda
              target="_blank"
              rel="noopener noreferrer"
              className="get-more-button"
            >
              Get More <span className="arrow">{`->`}</span>
            </a>
          </div>

          <h3 className="text-black dark:text-white">Street</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {street.map((image, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                    {image.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="flex justify-end mt-8">
            <a
              href="#" // Ganti dengan link Google Drive Anda
              target="_blank"
              rel="noopener noreferrer"
              className="get-more-button"
            >
              Get More <span className="arrow">{`->`}</span>
            </a>
          </div>

          <h3 className="text-black dark:text-white">Cars</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {apaya.map((image, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                    {image.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="flex justify-end mt-8">
            <a
              href="#" // Ganti dengan link Google Drive Anda
              target="_blank"
              rel="noopener noreferrer"
              className="get-more-button"
            >
              Get More <span className="arrow">{`->`}</span>
            </a>
          </div>
        </section>
      </main>
      ##ini bagian kalo di klik
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={500}
              height={500}
              className="object-cover w-full"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">
                {selectedImage.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {selectedImage.description}
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-4 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
