import NavbarContainer from "./components/navbar-container/NavbarContainer";

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <NavbarContainer />
      <p className='text-red-500'>Hello</p>
    </div>
  );
};

export default App;
