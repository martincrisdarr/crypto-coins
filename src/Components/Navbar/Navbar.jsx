import SearchIcon from "@rsuite/icons/Search";
import { Input, InputGroup } from "rsuite";
import { Link } from "react-router-dom";
const styles = {
  container: "py-4 px-4 md:px-12 flex justify-between w-full",
  title: " text-4xl font-semibold hover:text-blue-300 hover:no-underline",
};

function Navbar({ message, search,display }) {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.title}>Coin Market</Link>
      <form onChange={message} onSubmit={handleSubmit} className={`${display}`} >
        <InputGroup size="lg" inside >
          <Input placeholder="Search your coin" value={search} />
          <InputGroup.Button>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </form>
    </div>
  );
}

export default Navbar;
