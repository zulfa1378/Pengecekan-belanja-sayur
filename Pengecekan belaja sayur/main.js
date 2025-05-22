import { proses } from "./utils.js";
const sayuran = ['bayam', 'kangkung', 'wortel', 'tomat', 'kentang', 'cabe', 'bawang', 'brokoli', 'selada',];
sayuran.forEach((sayur) => {
try {
    const hasil = proses(sayur);
    console.log(hasil);
} catch (error) {
    console.error(error.message);
}
});