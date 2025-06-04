import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // You'll create this
// import Layout from './component/Layout'; // New wrapper component
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default App;