import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
    label: "hello@example.com",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    label: "@yourusername",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "/in/yourprofile",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    label: "@yourhandle",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8">
          <h2 className="text-sm font-semibold tracking-widest text-primary">
            CONTACT
          </h2>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              {"I'm currently open to new opportunities. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!"}
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
