
// importing the ToolTip component from the components directory
import ToolTip from './component/ToolTip';

function App() {
  return (
    <div className="App">
      {/* rendering ToolTip components with different positions and content */}
      <ToolTip position="top" content="This is a tooltip at the top" />
      <ToolTip position="bottom" content="This is a tooltip at the bottom" />
      <ToolTip position="left" content="This is a tooltip on the left" />
      <ToolTip position="right" content="This is a tooltip on the right" />
    </div>
  );
}

// exporting the App component as the default export
export default App;
