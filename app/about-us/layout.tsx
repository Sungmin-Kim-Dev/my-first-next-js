export const metadata = {
  title: "About Us",
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      {children}
      &copy; Next JS is GREAT!
    </div>
  );
}
