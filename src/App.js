import NavbarContainer from "./components/navbar-container/NavbarContainer";

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <NavbarContainer />
      <div className='min-h-full w-full'></div>
    </div>
  );
};

export default App;
