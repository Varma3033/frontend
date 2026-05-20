export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}