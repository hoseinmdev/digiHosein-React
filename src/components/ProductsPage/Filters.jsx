import { allProducts, filters } from "db";

const { default: Skeleton } = require("components/common/Skeleton");
const { useState } = require("react");
const { ImArrowUp2 } = require("react-icons/im");
const { useSearchParams } = require("react-router-dom");
const { default: createEmptyArray } = require("utils/createEmptyArray");

const Filters = ({ category }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const serializeFormQuery = () => {
    const allParams = {};
    for (const entry of searchParams.entries()) {
      const [key, value] = entry;
      allParams[key] = value;
    }
    return allParams;
  };
  const checkBoxHandler = (e, optionKey) => {
    const allParams = serializeFormQuery();
    if (e.target.checked) {
      setSearchParams({ ...allParams, [optionKey]: true });
    } else {
      const newParams = { ...allParams };
      delete newParams[optionKey];
      setSearchParams(newParams);
    }
  };
  const generateFiltersState = () => {
    const currentFilters = {};
    filters.phones.forEach((p) => {
      currentFilters[p.key] = false;
    });
    return currentFilters;
  };
  const [showFilters, setShowFilters] = useState(generateFiltersState);

  const toggleShowFilterOptionHandler = (key) => {
    setShowFilters({ ...showFilters, [key]: !showFilters[key] });
  };

  if (category) {
    return filters[category].map((option) => {
      return (
        <div
          key={option.key}
          className="flex w-full flex-col overflow-hidden rounded-lg bg-gray-100 px-4 py-2 text-base dark:bg-gray-600"
        >
          <span
            className="flex items-center justify-between lg:cursor-pointer"
            onClick={() => toggleShowFilterOptionHandler(option.key)}
          >
            <p
              className={`flex w-full items-center justify-between font-EstedadFont lg:cursor-pointer ${
                showFilters[option.key]
                  ? "text-violet-700 dark:font-bold dark:text-violet-400"
                  : "text-gray-800 dark:text-white/70"
              }`}
            >
              {option.title}
              <ImArrowUp2
                className={`${showFilters[option.key] ? "rotate-180" : ""}`}
              />
            </p>
          </span>
          <span
            className={`flex flex-col items-center justify-start gap-1  ${
              showFilters[option.key]
                ? "pt-4 opacity-100"
                : "h-0 scale-0 opacity-0"
            }`}
          >
            {option.options.map((item) => {
              const checked = Object.keys(serializeFormQuery()).find(
                (o) => o === item.key,
              );
              return (
                <label
                  className="flex w-full items-center justify-start gap-2 font-EstedadFont dark:text-white/70"
                  key={item.title}
                >
                  <input
                    className="flex h-3 w-3 items-center justify-center rounded-2xl p-1"
                    type="checkbox"
                    checked={checked ? true : false}
                    onChange={(e) => checkBoxHandler(e, item.key)}
                  />
                  {item.title}
                </label>
              );
            })}
          </span>
        </div>
      );
    });
  } else {
    return createEmptyArray(7).map((p, index) => {
      return (
        <Skeleton key={index} width={"100%"} height={"2rem"} radius={"30px"} />
      );
    });
  }
};
export default Filters;
