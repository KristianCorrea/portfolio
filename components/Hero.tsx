import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
          Kristian Correa
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6">
          Software Engineer
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building intuitive web experiences and solving real-world problems with code.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="tel:786-814-9844"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            aria-label="Phone: 786-814-9844"
          >
            <Phone size={20} />
            <span className="text-sm sm:text-base">786-814-9844</span>
          </a>
          <a
            href="mailto:kristiangabrielcorrea@gmail.com"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            aria-label="Email: kristiangabrielcorrea@gmail.com"
          >
            <Mail size={20} />
            <span className="text-sm sm:text-base">kristiangabrielcorrea@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/Kristian-Correa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
            <span className="text-sm sm:text-base">LinkedIn</span>
          </a>
          <a
            href="https://github.com/KristianCorrea"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
            <span className="text-sm sm:text-base">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;