import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuSilaSatu from "./pages/SilaSatu/MenuSilaSatu";
import MenuSilaDua from "./pages/SilaSatu/MenuSilaDua";
import MenuSilaTiga from "./pages/SilaSatu/MenuSilaTiga";
import MenuSilaEmpat from "./pages/SilaSatu/MenuSilaEmpat";
import SilaDuaSatu from "./pages/SilaDua/SilaDuaSatu";
import SilaDuaDua from "./pages/SilaDua/SilaDuaDua";
import SilaDuaTiga from "./pages/SilaDua/SilaDuaTiga";
import SilaDuaEmpat from "./pages/SilaDua/SilaDuaEmpat";
import SilaTigaSatu from "./pages/SilaTiga/SilaTigaSatu";
import SilaTigaDua from "./pages/SilaTiga/SilaTigaDua";
import SilaTigaTiga from "./pages/SilaTiga/SilaTigaTiga";
import SilaTigaEmpat from "./pages/SilaTiga/SilaTigaEmpat";
import SilaEmpatSatu from "./pages/SilaEmpat/SilaEmpatSatu";
import SilaEmpatDua from "./pages/SilaEmpat/SilaEmpatDua";
import SilaEmpatTiga from "./pages/SilaEmpat/SilaEmpatTiga";
import SilaEmpatEmpat from "./pages/SilaEmpat/SilaEmpatEmpat";
import SilaLimaSatu from "./pages/SilaLima/SilaLimaSatu";
import SilaLimaDua from "./pages/SilaLima/SilaLimaDua";
import SilaLimaTiga from "./pages/SilaLima/SilaLimaTiga";
import SilaLimaEmpat from "./pages/SilaLima/SilaLimaEmpat";
import UudSatu from "./pages/UUD/UUDSatu";
import UudDua from "./pages/UUD/UUDDua";
import UudEmpat from "./pages/UUD/UUDEmpat";
import UUDTiga from "./pages/UUD/UUDTiga";
import UudDuaSatu from "./pages/UUDDua/UudSatu";
import UudDuaDua from "./pages/UUDDua/UudDua";
import UudDuaTiga from "./pages/UUDDua/UudTiga";
import UudDuaEmpat from "./pages/UUDDua/UudEmpat";
import LaguSatu from "./pages/BhinnekaSatu/LaguSatu";
import LaguDua from "./pages/BhinnekaSatu/LaguDua";
import LaguTiga from "./pages/BhinnekaSatu/LaguTiga";
import LaguEmpat from "./pages/BhinnekaSatu/LaguEmpat";
import TarianSatu from "./pages/BhinnekaDua/TarianSatu";
import TarianDua from "./pages/BhinnekaDua/TarianDua";
import TarianTiga from "./pages/BhinnekaDua/TarianTiga";
import TarianEmpat from "./pages/BhinnekaDua/TarianEmpat";
import TambangSatu from "./pages/BhinnekaTiga/TambangSatu";
import TambangDua from "./pages/BhinnekaTiga/TambangDua";
import TambangTiga from "./pages/BhinnekaTiga/TambangTiga";
import TambangEmpat from "./pages/BhinnekaTiga/TambangEmpat";
import SatwaSatu from "./pages/BhinnekaEmpat/SatwaSatu";
import SatwaDua from "./pages/BhinnekaEmpat/SatwaDua";
import SatwaTiga from "./pages/BhinnekaEmpat/SatwaTiga";
import SatwaEmpat from "./pages/BhinnekaEmpat/SatwaEmpat";
import KulinerSatu from "./pages/NkriSatu/KulinerSatu";
import KulinerDua from "./pages/NkriSatu/KulinerDua";
import KulinerTiga from "./pages/NkriSatu/KulinerTiga";
import KulinerEmpat from "./pages/NkriSatu/KulinerEmpat";
import Pancasila from "./pages/AllMainPage/Pancasila";
import UudPage from "./pages/AllMainPage/UudPage";
import Bhinneka from "./pages/AllMainPage/Bhinneka";
import NkriPage from "./pages/AllMainPage/NkriPage";
import GunungSungaiSatu from "./pages/BhinnekaLima/GunungSungaiSatu";
import GunungSungaiDua from "./pages/BhinnekaLima/GunungSungaiDua";
import GunungSungaiTiga from "./pages/BhinnekaLima/GunungSungaiTiga";
import GunungSungaiEmpat from "./pages/BhinnekaLima/GunungSungaiEmpat";
import KerajaanSatu from "./pages/BhinnekaEnam/KerajaanSatu";
import KerajaanDua from "./pages/BhinnekaEnam/KerajaanDua";
import KerajaanTiga from "./pages/BhinnekaEnam/KerajaanTiga";
import KerajaanEmpat from "./pages/BhinnekaEnam/KerajaanEmpat";
import PahlawanSatu from "./pages/BhinnekaTujuh/PahlawanSatu";
import PahlawanDua from "./pages/BhinnekaTujuh/PahlawanDua";
import PahlawanTiga from "./pages/BhinnekaTujuh/PahlawanTiga";
import PahlawanEmpat from "./pages/BhinnekaTujuh/PahlawanEmpat";
import IbukotaSatu from "./pages/NkriDua/IbukotaSatu";
import IbukotaDua from "./pages/NkriDua/IbukotaDua";
import IbukotaTiga from "./pages/NkriDua/IbukotaTiga";
import IbukotaEmpat from "./pages/NkriDua/IbukotaEmpat";
import LaguNasionalSatu from "./pages/NkriTiga/LaguNasionalSatu";
import LaguNasionalDua from "./pages/NkriTiga/LaguNasionalDua";
import LaguNasionalTiga from "./pages/NkriTiga/LaguNasionalTiga";
import LaguNasionalEmpat from "./pages/NkriTiga/LaguNasionalEmpat";
import PulauSatu from "./pages/NkriEmpat/PulauSatu";
import PulauDua from "./pages/NkriEmpat/PulauDua";
import PulauTiga from "./pages/NkriEmpat/PulauTiga";
import PulauEmpat from "./pages/NkriEmpat/PulauEmpat";
import TestimoniComponent from "./backend/action/TestimoniComponent";
import UpdateMitraComponent from "./backend/action/UpdateMitraComponent";
import GaleryComponent from "./backend/action/GaleryComponent";
import Login from "./backend/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/pancasila" element={<Pancasila />} />
        <Route path="/undang-undang-dasar-1945" element={<UudPage />} />
        <Route path="/bti" element={<Bhinneka />} />

        <Route
          path="/negara-kesatuan-republik-indonesia"
          element={<NkriPage />}
        />

        {/* Sila Satu */}
        <Route path="/sila-satu-1" element={<MenuSilaSatu />} />
        <Route path="/sila-satu-2" element={<MenuSilaDua />} />
        <Route path="/sila-satu-3" element={<MenuSilaTiga />} />
        <Route path="/sila-satu-4" element={<MenuSilaEmpat />} />

        {/* Sila Dua */}
        <Route path="/sila-dua-1" element={<SilaDuaSatu />} />
        <Route path="/sila-dua-2" element={<SilaDuaDua />} />
        <Route path="/sila-dua-3" element={<SilaDuaTiga />} />
        <Route path="/sila-dua-4" element={<SilaDuaEmpat />} />
        {/* Sila Tiga */}
        <Route path="/sila-tiga-1" element={<SilaTigaSatu />} />
        <Route path="/sila-tiga-2" element={<SilaTigaDua />} />
        <Route path="/sila-tiga-3" element={<SilaTigaTiga />} />
        <Route path="/sila-tiga-4" element={<SilaTigaEmpat />} />
        {/* Sila Empat */}
        <Route path="/sila-empat-1" element={<SilaEmpatSatu />} />
        <Route path="/sila-empat-2" element={<SilaEmpatDua />} />
        <Route path="/sila-empat-3" element={<SilaEmpatTiga />} />
        <Route path="/sila-empat-4" element={<SilaEmpatEmpat />} />

        {/* Sila Lima */}
        <Route path="/sila-lima-1" element={<SilaLimaSatu />} />
        <Route path="/sila-lima-2" element={<SilaLimaDua />} />
        <Route path="/sila-lima-3" element={<SilaLimaTiga />} />
        <Route path="/sila-lima-4" element={<SilaLimaEmpat />} />
        {/* UUD */}
        <Route path="/uud-1" element={<UudSatu />} />
        <Route path="/uud-2" element={<UudDua />} />
        <Route path="/uud-3" element={<UUDTiga />} />
        <Route path="/uud-4" element={<UudEmpat />} />

        {/* UUD 2 */}
        <Route path="/bahasa-1" element={<UudDuaSatu />} />
        <Route path="/bahasa-2" element={<UudDuaDua />} />
        <Route path="/bahasa-3" element={<UudDuaTiga />} />
        <Route path="/bahasa-4" element={<UudDuaEmpat />} />

        {/* Bhineka 1 */}
        <Route path="/lagu-1" element={<LaguSatu />} />
        <Route path="/lagu-2" element={<LaguDua />} />
        <Route path="/lagu-3" element={<LaguTiga />} />
        <Route path="/lagu-4" element={<LaguEmpat />} />

        {/* Bhineka 2 */}
        <Route path="/tarian-1" element={<TarianSatu />} />
        <Route path="/tarian-2" element={<TarianDua />} />
        <Route path="/tarian-3" element={<TarianTiga />} />
        <Route path="/tarian-4" element={<TarianEmpat />} />

        {/* Bhineka 3 */}
        <Route path="/tambang-1" element={<TambangSatu />} />
        <Route path="/tambang-2" element={<TambangDua />} />
        <Route path="/tambang-3" element={<TambangTiga />} />
        <Route path="/tambang-4" element={<TambangEmpat />} />

        {/* Bhineka 4 */}
        <Route path="/satwa-1" element={<SatwaSatu />} />
        <Route path="/satwa-2" element={<SatwaDua />} />
        <Route path="/satwa-3" element={<SatwaTiga />} />
        <Route path="/satwa-4" element={<SatwaEmpat />} />

        {/* Bhineka 5 */}
        <Route path="/gunung-1" element={<GunungSungaiSatu />} />
        <Route path="/gunung-2" element={<GunungSungaiDua />} />
        <Route path="/gunung-3" element={<GunungSungaiTiga />} />
        <Route path="/gunung-4" element={<GunungSungaiEmpat />} />

        {/* Bhineka 6 */}
        <Route path="/Kerajaan-1" element={<KerajaanSatu />} />
        <Route path="/Kerajaan-2" element={<KerajaanDua />} />
        <Route path="/Kerajaan-3" element={<KerajaanTiga />} />
        <Route path="/Kerajaan-4" element={<KerajaanEmpat />} />

        {/* Bhineka 7 */}
        <Route path="/Pahlawan-1" element={<PahlawanSatu />} />
        <Route path="/Pahlawan-2" element={<PahlawanDua />} />
        <Route path="/Pahlawan-3" element={<PahlawanTiga />} />
        <Route path="/Pahlawan-4" element={<PahlawanEmpat />} />

        {/* NKRI 1 */}
        <Route path="/kuliner-1" element={<KulinerSatu />} />
        <Route path="/kuliner-2" element={<KulinerDua />} />
        <Route path="/kuliner-3" element={<KulinerTiga />} />
        <Route path="/kuliner-4" element={<KulinerEmpat />} />

        {/* NKRI 2 */}
        <Route path="/ibukota-1" element={<IbukotaSatu />} />
        <Route path="/ibukota-2" element={<IbukotaDua />} />
        <Route path="/ibukota-3" element={<IbukotaTiga />} />
        <Route path="/ibukota-4" element={<IbukotaEmpat />} />

        {/* NKRI 3 */}
        <Route path="/nasional-1" element={<LaguNasionalSatu />} />
        <Route path="/nasional-2" element={<LaguNasionalDua />} />
        <Route path="/nasional-3" element={<LaguNasionalTiga />} />
        <Route path="/nasional-4" element={<LaguNasionalEmpat />} />

        {/* NKRI 4 */}
        <Route path="/pulau-1" element={<PulauSatu />} />
        <Route path="/pulau-2" element={<PulauDua/>} />
        <Route path="/pulau-3" element={<PulauTiga/>} />
        <Route path="/pulau-4" element={<PulauEmpat/>} />

        {/* Backend */}
        <Route path="/backend" element={<Login />} />
        <Route path="/backend/galery" element={<GaleryComponent />} />
        <Route path="/backend/testimoni" element={<TestimoniComponent />} />
        <Route path="/backend/mitra" element={<UpdateMitraComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
