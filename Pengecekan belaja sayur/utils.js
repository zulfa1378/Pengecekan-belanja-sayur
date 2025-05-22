const hargaSayur = {
    bayam: 5000,
    kangkung: 4000,
    wortel: 7000,
    tomat: 6000,
    kentang: 8000,
    cabe: 9000,
    bawang: 10000,
    brokoli: 12000,
    selada: 11000,
};

export function proses(namaSayur) {
    if (!hargaSayur.hasOwnProperty(namaSayur)) {
        throw new Error(`Sayur ${namaSayur} tidak tersedia.`);
    }
    return `Harga ${namaSayur} adalah Rp ${hargaSayur[namaSayur]}`;
}