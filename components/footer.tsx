export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-0 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-muted-foreground text-center lg:text-left">
          Designed & Built with care. Powered by{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Vercel
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
