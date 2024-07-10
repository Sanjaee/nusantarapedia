import LayoutMenuBhinneka from "./AllLayoutMenu/LayoutMenuBhinneka";
import LayoutMenuNkri from "./AllLayoutMenu/LayoutMenuNkri";
import LayoutMenuSila from "./AllLayoutMenu/LayoutMenuSila";
import LayoutMenuUud from "./AllLayoutMenu/LayoutMenuUud";

const LayoutMenu = ({ children }) => {
  return (
    <div className="hidden sm:flex overflow-hidden">
      <div className="h-full w-80 text-sm fixed z-10 bg-[#0054A3] shadow-lg pt-16 pb-44  overflow-y-auto">
        {/* Sila */}
        <LayoutMenuSila />

        {/* UUD */}
        <LayoutMenuUud />

        {/* Bhinneka Tunggal Ika */}

        <LayoutMenuBhinneka />

        {/* NKRI */}

        <LayoutMenuNkri />
      </div>

      <div className="mt-24 overflow-y-auto">{children}</div>
    </div>
  );
};

export default LayoutMenu;
