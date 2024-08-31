const year = new Date().getFullYear()
export default function Footer() {
  return (
    <footer className="p-5 h-14 bg-backgorund bg-black text-white">Made with the force {year}</footer>
  )
}
