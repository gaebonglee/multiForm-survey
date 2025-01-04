import "./App.css";

import MainLayout from "./components/common/MainLayout";

import SectionListEditor from "./components/edit/SectionListEditor";
import AdminPage from "./pages/AdminPage";
import { SurveyStoreProvider } from "./store";
import { Routes, Route, BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <SurveyStoreProvider>
          <Routes>
            <Route path="/surveys:/surveyId" element={<AdminPage />}>
              <Route path="edit" element={<SectionListEditor />} />
              <Route path="responses" element={<div>응답</div>} />
            </Route>
          </Routes>
        </SurveyStoreProvider>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
