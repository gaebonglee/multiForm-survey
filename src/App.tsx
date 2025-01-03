import "./App.css";
import Dropdown from "./components/common/Dropdown";
import MainLayout from "./components/common/MainLayout";
import Panel, {
  PanelBody,
  PanelCap,
  PanelFooter,
  PanelHeader,
} from "./components/common/Panel";
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "./components/common/Tabs";

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
            <Panel>
              <PanelHeader>
                <>Header</>
                <Dropdown<string>
                  options={[
                    { label: <div>1</div>, value: `1` },
                    { label: <div>2</div>, value: `2` },
                    { label: <div>3</div>, value: `3` },
                    { label: <div>4</div>, value: `4` },
                    { label: <div>5</div>, value: `5` },
                    { label: <div>6</div>, value: `6` },
                  ]}
                  onChange={(value) => console.log(value)}
                />
              </PanelHeader>
              <PanelBody>Body</PanelBody>
              <PanelFooter>Footer</PanelFooter>
            </Panel>
          </TabPanel>
          <TabPanel index={1}>panel2</TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}

export default App;
