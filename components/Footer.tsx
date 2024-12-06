import { Container } from "@mui/material"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-5">
      <Container maxWidth="lg" className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a href="https://www.linkedin.com/in/max-im" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/max-im" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a href="https://www.youtube.com/@maksym.pozhydaiev" target="_blank" rel="noopener noreferrer">
            YouTube
          </a> */}
        </div>
      </Container>
    </footer>
  );
}