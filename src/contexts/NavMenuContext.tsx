import { createContext, useState } from "react";

export const navMenuContext = createContext<any>(null);

export const NavMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navMenuActive, setNavMenuActive] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<
    "features" | "build" | "resources" | null
  >(null);

  return (
    <navMenuContext.Provider
      value={{
        navMenuActive,
        setNavMenuActive,
        activeAccordion,
        setActiveAccordion,
      }}
    >
      {children}
    </navMenuContext.Provider>
  );
};
