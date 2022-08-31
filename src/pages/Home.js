import { useState, useEffect } from "react";
import { gettAllCategories } from "../api";
import Loader from "../components/Loader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";
import { useLocation, useHistory } from "react-router-dom";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    gettAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split()[1].toLocaleLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);
  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Loader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}
