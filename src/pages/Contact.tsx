
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      link: "https://linkedin.com/in/yourusername",
      color: "hover:bg-[#0077B5]"
    },
    {
      name: "X",
      icon: <Twitter className="h-6 w-6" />,
      link: "https://x.com/yourusername",
      color: "hover:bg-black"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      link: "https://instagram.com/yourusername",
      color: "hover:bg-[#E4405F]"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      link: "https://github.com/yourusername",
      color: "hover:bg-[#333]"
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-12">
      <h1 className="fade-in text-4xl font-sans font-bold mb-12">Get in Touch</h1>
      <div className="max-w-xl mx-auto space-y-6">
        {socials.map((social, index) => (
          <a 
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Button
              variant="outline"
              className={`w-full py-8 text-xl flex items-center gap-4 transition-colors ${social.color}`}
            >
              {social.icon}
              {social.name}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
