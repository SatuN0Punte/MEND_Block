
import './App.css';
import { UserContextProvider } from './context/UserContext';
import { Rouutes, Route } from "react-router-dom";
import indexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import RejisterPage from "./pages/RejisterPage";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";
import EditPage from "./pages/EditPage";

function App() {
  <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<indexPage />}>
          <Route path="login" element={<LoginPage />}>
            <Route path="rejister" element={<RejisterPage />}>
              <Route path="create" element={<CreatePage />}>
                <Route path="post" element={<PostPage />}>
                  <Route path="edit" element={<EditPage />}>

                  </Route>
                </Routes>
              </UserContextProvider>
}

export default App
