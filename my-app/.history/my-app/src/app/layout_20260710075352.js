import "./globals.css";
import Header from "../component/Header"

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        {children}
        </body>
    </html>
  );
}
