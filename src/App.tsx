import "./App.css";

import MainLayout from "./components/common/MainLayout";
import { PanelCap } from "./components/common/Panel";
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/common/Tabs";
import QuestionEditor from "./components/edit/QuestionEditor";

function App() {
  return (
    <MainLayout>
      <Tabs>
        <TabList>
          <Tab index={0}>질문</Tab>
          <Tab index={1}>응답</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <PanelCap>2층 1섹션</PanelCap>
            <QuestionEditor />
          </TabPanel>
          <TabPanel index={1}>panel2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}

export default App;
