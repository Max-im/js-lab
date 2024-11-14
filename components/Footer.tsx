import { Container } from "@mui/material"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <Container maxWidth="lg" className="flex justify-between items-center">
        <div>
          <p>&copy; 2024 All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/max-im" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/max-im" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.youtube.com/@maksym.pozhydaiev" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </Container>
    </footer>
  );
}