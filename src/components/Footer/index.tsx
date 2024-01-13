import { Github, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer footer-center rounded bg-base-200 p-8 text-base-content">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="cursor-pointer hover:brightness-75"
            href="https://www.linkedin.com/in/evandro-calado"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            className="cursor-pointer hover:brightness-75"
            href="https://github.com/EvandroCalado"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            className="cursor-pointer hover:brightness-75"
            href="https://www.instagram.com/dev_evandro"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <span className="ml-1 uppercase">evandro calado</span>
        </p>
      </aside>
    </footer>
  );
};
