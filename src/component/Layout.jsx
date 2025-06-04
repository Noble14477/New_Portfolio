import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="flex flex-col min-h-[100dvh]">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}