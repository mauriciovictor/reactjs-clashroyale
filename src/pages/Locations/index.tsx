import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, GlobalStyle } from "./styles";
import { Header } from "../../components/Header";

interface LocationProps {
  id: number;
  name: string;
  isCountry: boolean;
  countryCode?: string;
}

interface LocationsRquestProps {
  items: LocationProps[];
  paging: {
    cursors: {
      after?: string;
      before?: string;
    };
  };
}

export function Locations() {
  const [locations, setLocations] = useState<LocationsRquestProps>(
    {} as LocationsRquestProps
  );

  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    // async function loadData() {
    //   try {
    //     setIsLoading(true);
    //     const locationsData = await api.get<LocationsRquestProps>(
    //       "/locations",
    //       {
    //         params: {
    //           limit,
    //         },
    //       }
    //     );
    //     setLocations(locationsData.data);
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.log("error" + error);
    //   }
    // }
    // loadData();
  }, [limit]);

  async function handlePrevLocations() {
    setIsLoading(true);
    const locationsData = await api.get<LocationsRquestProps>("/locations", {
      params: {
        limit,
        before: locations.paging.cursors.before,
      },
    });

    setLocations(locationsData.data);
    setIsLoading(false);
  }

  async function handleNextLocations() {
    setIsLoading(true);
    const locationsData = await api.get<LocationsRquestProps>("/locations", {
      params: {
        limit,
        after: locations.paging.cursors.after,
      },
    });

    setLocations(locationsData.data);
    setIsLoading(false);
  }

  return (
    <>
      <Container>
        <Header />
        {/* <input
          type="text"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
        {isLoading ? (
          <h1> loading...</h1>
        ) : (
          <ul>
            {locations.items?.map((locations) => (
              <li key={locations.id}>
                <label> {locations.name} </label>
                {locations.countryCode && (
                  <label> {locations.countryCode} </label>
                )}
                <img
                  width={20}
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${locations.countryCode}.svg`}
                  alt=""
                />
              </li>
            ))}
          </ul>
        )}
        <button onClick={handlePrevLocations}> Prev </button>
        <button onClick={handleNextLocations}> Next </button> */}
      </Container>
      <GlobalStyle />
    </>
  );
}
