import "./globals.css";
import Header from "../component/"

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      
        {children}
        </body>
    </html>
  );
}
