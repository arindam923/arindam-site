import dynamic from "next/dynamic";
import DesktopLinks from "./DesktopLinks";

const FormDialog = dynamic(() => import("./FormDialoug"), {
  ssr: false,
});

const Header = () => {
  return (
    <header className="flex container mx-auto py-4 items-center justify-between">
      <h1 className="text-2xl font-semibold">
        <span className="text-primary">A</span>rshop
      </h1>
      <DesktopLinks />
      <div className="flex items-center space-x-8 text-sm">
        <button className="text-muted-foreground">Login</button>
        <FormDialog />
      </div>
    </header>
  );
};

export default Header;
