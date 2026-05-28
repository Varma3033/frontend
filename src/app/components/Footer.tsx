export default function Footer() {
  return (
//footer section
    <footer className="bg-black text-white h-[100px] flex items-center justify-center">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}