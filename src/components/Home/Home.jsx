import React from 'react';
import { Link } from 'react-router-dom';
import pets from '../../assets/pets.jpg';
import background from '../../assets/background.jpg';

export default function Home() {
  const services = [
    {
      title: 'Haircut',
      image: 'https://imgs.search.brave.com/TI5tcb5rq86McFACNnSNeD1DWAjHBN0ddVSxKWmjXAQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucGV0Y28uY29t/L3BldGNvL2ltYWdl/L3VwbG9hZC9mX2F1/dG8scV9hdXRvOmJl/c3QvZ3Jvb21pbmct/bHAtYnktYXBwb2lu/dG1lbnQtYmF0aC1h/bmQtaGFpcmN1dC1p/bWctMTAwMHg2Njc', // Replace with your image URL
    },
    {
      title: 'Conditioning',
      image: 'https://imgs.search.brave.com/gSs2rImNWZKSRGsf0n0Qf2qAoLyvVOIfcUWgVK4-CIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlcGV0/cy5jb20vdGhtYi85/MTA2el83Y3U3eHV5/OWRCTExEZzVzY1Jm/Z2c9LzMxNXgyMDgv/ZmlsdGVyczpub191/cHNjYWxlKCk6c3Ry/aXBfaWNjKCkvbWlk/c2VjdGlvbi1vZi12/ZXRzLWV4YW1pbmlu/Zy1pbmp1cmVkLWNh/dC1hdC1ob3NwaXRh/bC02ODY3NzUwMjUt/NWE2ZTIyNmQxZDY0/MDQwMDM3Y2QyOTJk/LmpwZw', // Replace with your image URL
    },
    {
      title: 'Shampoo Bathing',
      image: 'https://imgs.search.brave.com/goIHK3jnPmaUFradQsD8zf6FG2kZOC5zKGgwNdKt7yY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC83eWJ0ZHpk/Z2hhNWQvNUpRMHhn/cGpiOTFQZnhscks1/V25Fcy84MmEzOGE4/YWEyNmU3ODkzNTUy/NzRlZTA0YjgwZTRl/Ni9DYW52YV8tX0Jh/dGhyb29tX3RvX2Ff/ZG9nX2Nob3dfY2hv/dy5qcGc_dz01Njcm/aD0zODAmZmw9cHJv/Z3Jlc3NpdmUmcT02/NSZmbT1qcGcmZml0/PWZpbGwmZj1mYWNl/cw', // Replace with your image URL
    },
    {
      title: 'Paw Moisturizing',
      image: 'https://imgs.search.brave.com/V2OCcl4M-FPXA7UZ7n7yya20ayaUvmvfsjOb0Ncmn68/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90b3Bk/b2dodWIuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA2/L3NodXR0ZXJzdG9j/a183MjkxNTk0NzIt/MTAyNHg2ODMuanBn', // Replace with your image URL
    },
    {
      title: 'Nail Trimming',
      image: 'https://imgs.search.brave.com/AA_-vmUWr3mfC-d6xm3QoJJ16gv-30resXwQjAnlzUA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yc3Z6/cHJvZC5wc3BjZG4u/Y29tLy0vbWVkaWEv/aW1hZ2VzL3dudy9z/ZXJ2aWNlcy13ZWJw/YWdlcy9uYWlsLXRy/aW0vbmFpbC10cmlt/XzQwMHg0MDAuanBn/P3Jldj1hZWJlYzFj/NzM3MjU0MThiOGFj/NjIwYmRmNzYyZWYz/OA', // Replace with your image URL
    },
    {
      title: 'Ear Cleaning',
      image: 'https://imgs.search.brave.com/7nYyTSFxWCbZpt4E3tybiCktoxOBO6x3cXkQz-jN-Zs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kb2dz/dGVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMy92/ZXQtY2xlYW5pbmct/dGhlLWVhci1vZi1k/YWNoc2h1bmQtZG9n/LXdpdGgtY290dG9u/LXBhZF9EQW5kcmVl/dl9TaHV0dGVyc3Rv/Y2suanBn', // Replace with your image URL
    },
  ];

  return (
    <div className="mx-auto w-full h-min">
      {/* Banner section */}
      <div className="relative min-h-96"> {/* Fixed height for banner */}
        <img src={pets} alt="Pets Banner" className="my-5 absolute inset-0 object-cover w-full z-0" />
      </div>

        {/* Hero section */}
        <div className="mt-36 mx-auto w-full max-w-7xl text-center text-5xl font-bold text-yellow-600">
          <h1>Checkout our Grooming Services</h1>
        </div>

        {/* Service section */}
        <div className="mt-20 bg-yellow-500 text-white font-sans rounded-3xl py-8 px-8"
          style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}
> 
          <h1 className="mb-8 text-center font-bold text-black text-4xl">Everything you need for your furry friend</h1>
          <div className="container mx-auto px-2 flex flex-wrap justify-center items-center">
            {services.map((service) => (
              <div key={service.title} className="mx-2 w-full md:w-1/4 lg:w-1/5 mb-8 text-center">
                <img src={service.image} alt={service.title} className="w-full h-56 object-cover rounded-lg mb-4 mx-auto" />
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
